import React from 'react';
import { ContextAPI } from './context';
import axios from "axios";

const useCustomHooks = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);

  async function getAPI(config) {
    return new Promise((resolve, reject) => {
      axios.get(...config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async function postAPI(config) {
    return new Promise((resolve, reject) => {
      axios.post(...config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return {
    getAPI,
    postAPI,
  }
};

export default useCustomHooks;
