import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRIES_API_BASE_URL } from '../../utils/config.utils.js';
import { apiRequest } from '../../utils/helpers.utils.js';
import {
  countryFetchStart,
  countryFetchSuccess,
  countryFetchError,
} from '../../store/actions/country.actions';
import { Loader } from '../../components/loader/loader.component';
import { CountriesCard } from '../../components/countries-card/countries-card.component';

const Country = () => {
  const { loading, country, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log({ loading, country, error }, id);

  const getRequest = async (url, signal) => {
    try {
      dispatch(countryFetchStart());
      const data = await apiRequest(url, signal);
      dispatch(countryFetchSuccess(data));
    } catch (err) {
      if (err.name === 'AbortError') return; // Handling error from abort controller...
      dispatch(countryFetchError(err));
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getRequest(`${COUNTRIES_API_BASE_URL}/alpha/${id}`, signal);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      <Row>
        {loading && (
          <div className="col-md-12">
            <Loader /> Loading...
          </div>
        )}
        {country &&
          country.length > 0 &&
          country.map((country) => {
            return <CountriesCard country={country} key={country.cca3} />;
          })}
        {error && (
          <div className="col-md-12">
            <p>{error}</p>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Country;
