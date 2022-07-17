import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const InputParameter = {
  CARDS_COUNT: 5,
};

root.render(
  <React.StrictMode>
    <App
      cardsCount={InputParameter.CARDS_COUNT}
      offers={offers}
    />
  </React.StrictMode>,
);
