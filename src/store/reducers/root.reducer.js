import { combineReducers } from 'redux';
import { countriesReducer } from './countries.reducer';
import { countryReducer } from './country.reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
});
export default rootReducer;
