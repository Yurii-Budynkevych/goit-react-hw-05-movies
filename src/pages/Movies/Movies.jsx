import { useState, useEffect } from 'react';
import { getMovie } from 'utils/filmsApi';
import SearchForm from 'components/SearchForm/SearchForm';
import List from 'components/List/List';
import './Movies.css';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (searchValue.trim() === '') {
      return window.alert('Please enter something');
    }
    setSearch(searchValue);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    setLoading(true);
    getMovie(search)
      .then(res => setQuery(res))
      .catch(err => console.log(err.message))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {loading ? <h2>Loading...</h2> : <List arr={query} />}
    </>
  );
};
export default Movies;
