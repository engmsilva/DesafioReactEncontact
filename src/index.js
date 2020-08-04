import React from 'react';
import ReactDOM from 'react-dom';
import ContextAPI from './ContextAPI';
import App from './App';

ReactDOM.render(
      <ContextAPI>
        <App />
      </ContextAPI>,
  document.getElementById('root')
);
