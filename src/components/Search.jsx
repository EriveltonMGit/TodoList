// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar:</h2>
      <input className='search_input'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar"
      />
    </div>
  );
};

// Prop type validation
Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
