import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'utils/filmsApi';
import SearchForm from 'components/SearchForm/SearchForm';
import List from 'components/List/List';
import './Movies.css';

const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const sQery = search.get('film');

  const onSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (searchValue.trim() === '') {
      return window.alert('Please enter something');
    }
    setSearch({ film: searchValue });
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!sQery) {
      return;
    }
    setLoading(true);
    getMovie(sQery)
      .then(res => setQuery(res))
      .catch(err => console.log(err.message))
      .finally(() => setLoading(false));
  }, [sQery]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {loading ? <h2>Loading...</h2> : <List arr={query} />}
    </>
  );
};
export default Movies;
