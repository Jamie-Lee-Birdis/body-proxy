import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterType from "./FilterType.jsx";
import inputs from "./FilterData.js";
import InitialSettings from "./InitialSettings.js";
import DisplayAs from "./DisplayAs.jsx";
import ShowGraph from "./ShowGraph/ShowGraph.jsx";

var Filters = ({ filters }) => {

  const [filterSettings, setFilterSettings] = useState(InitialSettings);
  const filterList = [];

  for (let i = 0; i < filters.length; i++) {
    filterList.push(<FilterType inputs={inputs[i]} filterSettings={filterSettings} filterTitle={filters[i]} key={i}/>)
  }

  return (
    <FilterContainer>
      {filterList}
      <DisplayAs />
      <ShowGraph />
    </FilterContainer>
    );
  }

  export default Filters;

const FilterContainer = styled.div`
  background-color: #1f2f42;
  font-size: 12px;
  margin-bottom: 30px;
  padding: 0;
`;