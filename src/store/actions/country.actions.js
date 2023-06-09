import { ACTION_TYPES } from '../constants/action.types';

export const countryFetchStart = () => {
  return {
    type: ACTION_TYPES.COUNTRY_FETCH_START,
  };
};

export const countryFetchSuccess = (data) => {
  return {
    type: ACTION_TYPES.COUNTRY_FETCH_SUCCESS,
    payload: data,
  };
};

export const countryFetchError = (data) => {
  return {
    type: ACTION_TYPES.COUNTRY_FETCH_ERROR,
    payload: data,
  };
};
