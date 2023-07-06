import { ACTION_TYPES } from '../constants/action.types';

export const dummyUsersFetchStart = () => {
  return {
    type: ACTION_TYPES.DUMMY_USERS_FETCH_START,
  };
};

export const dummyUsersFetchSuccess = (data) => {
  return {
    type: ACTION_TYPES.DUMMY_USERS_FETCH_SUCCESS,
    payload: data,
  };
};

export const dummyUsersFetchError = (data) => {
  return {
    type: ACTION_TYPES.DUMMY_USERS_FETCH_ERROR,
    payload: data,
  };
};
