import { combineReducers } from 'redux';
import { countriesReducer } from './countries.reducer';
import { countryReducer } from './country.reducer';
import { usersReducer } from './users.reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  users: usersReducer,
});

export default rootReducer;
