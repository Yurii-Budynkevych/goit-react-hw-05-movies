import './SearchForm.css';

const SearchForm = ({ onSubmit }) => (
  <form className="form" onSubmit={onSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search movie here"
    />
  </form>
);
export default SearchForm;
