import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/filmsApi';
import './FilmDescr.css';

export const FilmDescr = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(res => setFilm(res));
  }, [id]);

  if (!film) return null;

  return (
    <div>
      <h2>{film.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
        alt="film poster"
      />
      <p>User Score: {film.vote_average.toFixed(0) * 10}%</p>
      <h3>Overview</h3>
      <p>{film.overview}</p>
      <h3>Genres</h3>
      <ul>
        {film.genres.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      <div className="additional-info">
        <ul className="nav-list">
          <li>
            <NavLink className="nav-link" to={'cast'}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'reviews'} state={film}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default FilmDescr;
