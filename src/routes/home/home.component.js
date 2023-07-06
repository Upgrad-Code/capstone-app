import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { apiRequest } from '../../utils/helpers.utils';
import { DUMMY_USERS_API } from '../../utils/config.utils';
import {
  dummyUsersFetchStart,
  dummyUsersFetchSuccess,
  dummyUsersFetchError,
} from '../../store/actions/users.actions';
import { Loader } from '../../components/loader/loader.component';
import { UsersCard } from '../../components/users-card/users-card.component';

import './home.styles.scss';

const Home = () => {
  const { loading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsers = async (url, signal) => {
    try {
      dispatch(dummyUsersFetchStart());
      const data = await apiRequest(url, signal);
      const users = [...data.data];
      dispatch(dummyUsersFetchSuccess(users));
    } catch (err) {
      if (err.name === 'AbortError') return; // Handling Abort Error api
      dispatch(dummyUsersFetchError(err));
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // console.log('component did mount...');
    getUsers(`${DUMMY_USERS_API}?page=1&limit=20`, signal);
    // clean up..
    return () => {
      controller.abort();
      // console.log('component will unmount...');
    };
  }, []);

  return (
    <div className="users__section">
      <Container>
        <Row>
          <Col md={12}>
            <h5>List of users...</h5>
            {loading && <Loader />}
          </Col>

          {users &&
            users.length > 0 &&
            users.map((user) => {
              return <UsersCard user={user} key={user.id} />;
            })}

          {error && (
            <Col md={12}>
              <p>{error}</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
