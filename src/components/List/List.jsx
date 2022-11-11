import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './List.css';

const List = ({ arr }) => (
  <ul>
    {arr.map(el => (
      <li key={el.id}>
        <Link to={`/movies/${el.id}`}>{el.title}</Link>
      </li>
    ))}
  </ul>
);
export default List;

List.propTypes = {
  arr: PropTypes.array.isRequired,
};
