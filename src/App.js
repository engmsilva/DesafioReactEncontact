import React from 'react';
import { ContextAPI } from '../src/ContextAPI/context';
import intl from 'react-intl-universal';
import Router from './router';

const locales = {
  'pt-BR': require('../src/locales/pt-BR.json'),
  'en-US': require('../src/locales/en-US.json')
};

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);
  const { language } = state;

  intl.init({
    currentLocale: language,
    locales
  });

  return (
    <Router />
  );
}

export default App;
