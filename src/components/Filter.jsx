import PropTypes from 'prop-types';
import '../assets/App.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter_2">
      <h1>Filtrar:</h1>
      <div className="filter-options">
        <div>
          <p className='p_status'>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <p>Ordem Alfabética:</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Desc")}>Desc</button>
      </div>
    </div>
  );
};

// Prop type validation
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired, // Added validation for setSort
};

export default Filter;
