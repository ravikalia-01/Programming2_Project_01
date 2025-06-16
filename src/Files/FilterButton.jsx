import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('ALL')}>All</button>
      <button onClick={() => setFilter('ABOVE_4')}>Above 4</button>
      <button onClick={() => setFilter('BELOW_4')}>Equal & Below 4</button>
      <button onClick={() => setFilter('BELOW_3')}>Below 3</button>
    </div>
  );
};

export default FilterButtons;
