import { ACTION_TYPES } from '../constants/action.types';

const initialState = {
  loading: false,
  countries: [],
  error: null,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.COUNTRIES_FETCH_START:
      return { ...state, loading: true, countries: [], error: null };
    case ACTION_TYPES.COUNTRIES_FETCH_SUCCESS:
      return { ...state, countries: payload, loading: false };
    case ACTION_TYPES.COUNTRIES_FETCH_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
