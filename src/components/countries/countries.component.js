import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRIES_API_BASE_URL } from '../../utils/config.utils';
import { apiRequest } from '../../utils/helpers.utils';
import {
  countriesFetchStart,
  countriesFetchSuccess,
  countriesFetchError,
} from '../../store/actions/countries.actions';
import './countries.styles.scss';

const Countries = () => {
  const state = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log(state);

  const getRequest = async (url, signal) => {
    try {
      dispatch(countriesFetchStart());
      const data = await apiRequest(url, signal);
      dispatch(countriesFetchSuccess(data));
    } catch (err) {
      if (err.name === 'AbortError') return; // Handling error from abort controller...
      dispatch(countriesFetchError(err));
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getRequest(`${COUNTRIES_API_BASE_URL}/all`, signal);
    return () => {
      controller.abort();
    };
  }, []);

  return <p>Countries Page..</p>;
};

export default Countries;
