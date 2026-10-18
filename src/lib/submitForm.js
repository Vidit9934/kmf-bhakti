import { contact } from '../content/site';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export function mailtoHref(subject, lines) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// Resolves { mode: 'sent' } after a successful POST, or { mode: 'mailto' } when no
// endpoint is configured (the caller then opens the visitor's email app). Throws on a failed POST.
export async function submitForm(payload) {
  if (!ENDPOINT) return { mode: 'mailto' };
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
  return { mode: 'sent' };
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_PATTERN = /^\+?[0-9][0-9\s-]{6,17}$/;
