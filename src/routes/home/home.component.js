import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from '../../utils/helpers.utils';
import { DUMMY_USERS_API, DUMMY_USERS_API_ID } from '../../utils/config.utils';

import './home.styles.scss';

const Home = () => {
  const { loading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsers = async () => {
    try {
      const data = await apiRequest(`${DUMMY_USERS_API}?page=1&limit=10`);
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('component did mount...');
    getUsers();
    // clean up..
    return () => {
      console.log('component will unmount...');
    };
  }, []);

  return (
    <div>
      <p>Home Page..</p>
    </div>
  );
};

export default Home;
