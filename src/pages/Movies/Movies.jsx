import { useState, useEffect } from 'react';
import { getMovie } from 'utils/filmsApi';
import SearchForm from 'components/SearchForm/SearchForm';
import List from 'components/List/List';
import './Movies.css';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState([]);

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
    getMovie(search)
      .then(res => setQuery(res))
      .catch(err => console.log(err.message));
  }, [search]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <List arr={query} />
    </>
  );
};
export default Movies;
