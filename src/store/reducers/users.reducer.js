import { ACTION_TYPES } from '../constants/action.types';

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.DUMMY_USERS_FETCH_START:
      return { ...state, loading: true, users: [], error: null };
    case ACTION_TYPES.DUMMY_USERS_FETCH_SUCCES:
      return { ...state, users: payload, loading: false };
    case ACTION_TYPES.DUMMY_USERS_FETCH_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
