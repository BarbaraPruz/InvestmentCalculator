import React from 'react';
import {CalculatorStoreProvider} from './context/calculatorStore';

import DescriptionTab from './tabs/descriptionTab'
import TableTab from './tabs/tableTab'
import ChartsTab from './tabs/chartsTab'

function App() {
  return (
    <CalculatorStoreProvider > 
      <div className="App">
        <h1>Savings Calculator</h1>
        <div className="d-flex">
          <DescriptionTab />
          <TableTab />          
        </div>
        <ChartsTab />
      </div>
     </CalculatorStoreProvider> 
  );
}

export default App;
