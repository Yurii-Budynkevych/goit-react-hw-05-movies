import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './List.css';

const List = ({ arr }) => {
  const location = useLocation();
  return (
    <ul>
      {arr.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={location}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default List;

List.propTypes = {
  arr: PropTypes.array.isRequired,
};
