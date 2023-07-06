import React, { useEffect } from 'react';
import { apiRequest } from '../../utils/helpers.utils';
import { DUMMY_USERS_API, DUMMY_USERS_API_ID } from '../../utils/config.utils';
import './home.styles.scss';

console.log(DUMMY_USERS_API);

const Home = () => {
  const getUsers = () => {
    try {
      const data = apiRequest(`${DUMMY_USERS_API}?page=1&limit=10`);
      console.log(data);
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
