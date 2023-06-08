import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRIES_API_BASE_URL } from '../../utils/config.utils';
import { apiRequest } from '../../utils/helpers.utils';
import {
  countriesFetchStart,
  countriesFetchSuccess,
  countriesFetchError,
} from '../../store/actions/countries.actions';
import { CountriesCard } from '../countries-card/countries-card.component';
import { Loader } from '../loader/loader.component';
import './countries.styles.scss';

const Countries = () => {
  const { loading, countries, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

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

  return (
    <div className="countries">
      <div className="container">
        <div className="row">
          <Loader />
          {loading && (
            <div className="col-md-12">
              <p>
                <Loader /> Loading...
              </p>
            </div>
          )}

          {/* {countries &&
            countries.length > 0 &&
            countries.map((country) => {
              return <CountriesCard country={country} key={country.cca3} />;
            })} */}

          {error && (
            <div className="col-md-12">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
