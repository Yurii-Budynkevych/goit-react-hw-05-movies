import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRevievById } from 'utils/filmsApi';
import './Revievs.css';

const Reviews = () => {
  const [reviev, setReviev] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    getRevievById(id)
      .then(res => setReviev(res.results))
      .finally(() => setLoading(false));
  }, [id, reviev.length]);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (reviev.length === 0) {
    return <h3>We don't have revievs for this movie</h3>;
  }
  return (
    <h3>
      <ul>
        {reviev.map(el => (
          <li key={el.id}>
            <h4>{el.author}</h4>
            <p className="reviev">{el.content}</p>
          </li>
        ))}
      </ul>
    </h3>
  );
};
export default Reviews;
