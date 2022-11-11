import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'utils/filmsApi';
import './Cast.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCastById(id).then(res => setCast(res.cast));
  }, [id]);

  if (!cast) return null;
  return (
    <>
      <ul className="gallery">
        {cast.map(el => (
          <li key={el.id}>
            <h3>{el.name}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
              alt="actor"
              width="150"
            />
            <p>{el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
