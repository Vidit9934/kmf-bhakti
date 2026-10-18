import { useState } from 'react';
import { contact } from '../content/site';
import { services } from '../content/services';
import { useLang } from '../i18n/LangContext';
import { EMAIL_PATTERN, PHONE_PATTERN, mailtoHref, submitForm } from '../lib/submitForm';

const EMPTY = { name: '', email: '', phone: '', service: '', message: '', company: '' };

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

// Contact form. Validation runs on submit and focuses the first problem. `company` is a hidden
// honeypot that only bots fill in. With no VITE_FORM_ENDPOINT the form opens a prefilled email instead.
export default function ContactForm() {
  const { t, pick } = useLang();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function validate(current) {
    const found = {};
    const name = current.name.trim();
    if (name.length < 2) found.name = t('form.err.name');
    else if (name.length > 80) found.name = t('form.err.nameLong');
    if (!EMAIL_PATTERN.test(current.email.trim()) || current.email.length > 120) found.email = t('form.err.email');
    if (current.phone.trim() && !PHONE_PATTERN.test(current.phone.trim())) found.phone = t('form.err.phone');
    if (!current.service) found.service = t('form.err.service');
    const message = current.message.trim();
    if (message.length < 10) found.message = t('form.err.message');
    else if (message.length > 1000) found.message = t('form.err.messageLong');
    return found;
  }

  const setField = (name) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: setField(name),
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    if (values.company) {
      setStatus('sent');
      return;
    }

    const payload = {
      type: 'contact',
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      service: values.service,
      message: values.message.trim(),
    };

    setStatus('sending');
    try {
      const result = await submitForm(payload);
      if (result.mode === 'mailto') {
        window.location.href = mailtoHref(`Enquiry: ${payload.service}`, [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone || '-'}`,
          `Service: ${payload.service}`,
          '',
          payload.message,
        ]);
        setStatus('mailto');
      } else {
        setStatus('sent');
      }
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'sent' || status === 'mailto') {
    return (
      <div className="form-done" role="status">
        <p className="form-done__title">{status === 'sent' ? t('form.sentTitle') : t('form.mailtoTitle')}</p>
        <p>
          {status === 'sent' ? t('form.sentText') : `${t('form.mailtoText')} ${contact.email}.`}
        </p>
        <button type="button" className="btn btn--ghost" onClick={reset}>
          {t('form.again')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label={t('form.title')}>
      <div className="field-row">
        <Field id="contact-name" label={t('form.name')} error={errors.name}>
          <input type="text" autoComplete="name" maxLength={80} {...inputProps('name')} />
        </Field>
        <Field id="contact-email" label={t('form.email')} error={errors.email}>
          <input type="email" autoComplete="email" maxLength={120} {...inputProps('email')} />
        </Field>
      </div>

      <div className="field-row">
        <Field id="contact-phone" label={t('form.phone')} error={errors.phone}>
          <input type="tel" autoComplete="tel" maxLength={20} {...inputProps('phone')} />
        </Field>
        <Field id="contact-service" label={t('form.service')} error={errors.service}>
          <select {...inputProps('service')}>
            <option value="">{t('form.choose')}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title.en}>
                {pick(service.title)}
              </option>
            ))}
            <option value="Something else">{t('form.other')}</option>
          </select>
        </Field>
      </div>

      <Field id="contact-message" label={t('form.message')} error={errors.message}>
        <textarea rows={5} maxLength={1000} {...inputProps('message')} />
      </Field>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-company">Company (leave empty)</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={setField('company')} />
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {t('form.fail')} <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      )}

      <button type="submit" className="btn btn--kesar form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('form.sending') : t('form.send')}
      </button>
    </form>
  );
}
