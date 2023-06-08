import { ACTION_TYPES } from '../constants/action.types';

export const countriesFetchStart = () => {
  return {
    type: ACTION_TYPES.COUNTRIES_FETCH_START,
  };
};

export const countriesFetchSuccess = (data) => {
  return {
    type: ACTION_TYPES.COUNTRIES_FETCH_SUCCESS,
    payload: data,
  };
};

export const countriesFetchError = (data) => {
  return {
    type: ACTION_TYPES.COUNTRIES_FETCH_ERROR,
    payload: data,
  };
};
