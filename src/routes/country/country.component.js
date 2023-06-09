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
} from '../../store/actions/countries.actions';

const Country = () => {
  const state = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(state, id);

  const getRequest = async (url, signal) => {
    try {
      dispatch(countryFetchStart());
      const data = await apiRequest(url, signal);
      console.log(data);
      // dispatch(countryFetchSuccess(data));
    } catch (err) {
      if (err.name === 'AbortError') return; // Handling error from abort controller...
      // dispatch(countryFetchError(err));
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
        <Col md={12}>
          <p>
            Country..............
            Found.....................................................
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Country;
