import { ACTION_TYPES } from '../constants/action.types';

const initialState = {
  loading: false,
  country: [],
  error: null,
};

export const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.COUNTRY_FETCH_START:
      return {
        ...state,
        loading: true,
        country: [],
        error: null,
      };
    case ACTION_TYPES.COUNTRY_FETCH_SUCCESS:
      return { ...state, country: payload, loading: false };
    case ACTION_TYPES.COUNTRY_FETCH_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
