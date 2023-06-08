import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { COUNTRIES_API_BASE_URL } from '../../utils/config.utils';
import { apiRequest } from '../../utils/helpers.utils';
import {
  countriesFetchStart,
  countriesFetchSuccess,
  countriesFetchError,
} from '../../store/actions/countries.actions';
import './countries.styles.scss';

const Countries = () => {
  const { loading, countries, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log({ loading, countries, error });

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
          {loading && (
            <div className="col-md-12">
              <p>Loading...</p>
            </div>
          )}

          {countries &&
            countries.length > 0 &&
            countries.map((country) => {
              return (
                <div className="col-md-3" key={country.cca3}>
                  <Card>
                    <Card.Body>
                      <Card.Text>{country.name.common}</Card.Text>
                      <Button variant="primary">Go</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}

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
