import { useState, useEffect } from 'react';
import { getTrending } from 'utils/filmsApi';
import List from 'components/List/List';
import './Home.css';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => setTrending(res))
      .catch(err => console.log(err.message));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <List arr={trending} />
    </>
  );
};
export default Home;
