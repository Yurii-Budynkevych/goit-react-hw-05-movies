import PropTypes from 'prop-types';
import './List.css';

const List = ({ arr }) => (
  <ul>
    {arr.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);
export default List;

List.propTypes = {
  arr: PropTypes.array.isRequired,
};
