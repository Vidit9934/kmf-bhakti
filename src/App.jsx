import { useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ToTop from './components/ToTop';
import { brand } from './content/site';
import { servicesBySlug } from './content/services';
import { useLang } from './i18n/LangContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Credits from './pages/Credits';
import Equipment from './pages/Equipment';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';

const PAGE_TITLES = {
  '/services': 'page.services',
  '/equipment': 'page.equipment',
  '/about': 'page.about',
  '/team': 'page.team',
  '/testimonials': 'page.testimonials',
  '/contact': 'page.contact',
  '/credits': 'page.credits',
};

// On every route change: back to the top and a page-specific document title.
function RouteEffects() {
  const { pathname } = useLocation();
  const { t, pick } = useLang();

  useEffect(() => {
    // jump, don't glide: the page-level smooth scrolling is for in-page movement only
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    const name = pick({ en: brand.name, hi: brand.nameHi });
    const slug = pathname.startsWith('/services/') ? pathname.split('/')[2] : null;
    const service = slug ? servicesBySlug[slug] : null;
    let page = null;
    if (service) page = pick(service.title);
    else if (PAGE_TITLES[pathname]) page = t(PAGE_TITLES[pathname]);
    else if (pathname !== '/') page = t('page.notfound');
    document.title = page ? `${page} | ${name}` : `${name} | ${pick(brand.tagline)}`;
  }, [pathname, t, pick]);

  return null;
}

function ServiceRoute() {
  const { slug } = useParams();
  return <ServiceDetail slug={slug} />;
}

export default function App() {
  const { t } = useLang();
  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#main">
        {t('skip')}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceRoute />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
