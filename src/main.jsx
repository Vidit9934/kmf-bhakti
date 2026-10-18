import '@fontsource-variable/anek-devanagari/wght.css';
import '@fontsource/tiro-devanagari-hindi/400.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LangProvider } from './i18n/LangContext';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/pages.css';
import './styles/forms.css';
import './styles/footer.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <App />
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
