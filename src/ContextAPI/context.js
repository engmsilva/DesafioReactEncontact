import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer} from './reduncer';

const ContextAPI = React.createContext([{}, () => {}]);

const Provider = (props) => {
  const { children } = props;

  const initialValue = ({});

  const [status, setStatus] = useState(initialValue);

  const [ state, dispatch ] = useReducer(reducer, initialState );

  return (
    <ContextAPI.Provider value={[ state, dispatch, status, setStatus ]}>
      {children}
    </ContextAPI.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ContextAPI, Provider };
