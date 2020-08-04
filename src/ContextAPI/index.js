import React from 'react';
import { Provider } from './context';

export default function Context(props) {
  const { children } = props;
  return (
    <Provider>
      {children}
    </Provider>
  );
}
