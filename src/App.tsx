import React from 'react';
import {CalculatorStoreProvider} from './context/calculatorStore';

import DescriptionTab from './tabs/descriptionTab'
import TableTab from './tabs/tableTab'
import ChartsTab from './tabs/tableTab'
import ContextDbg from './tabs/contextDbg'

import { Tab, Tabs } from 'react-bootstrap';

function App() {
  return (
    <CalculatorStoreProvider > 
      <div className="App">
        <h1>Savings Calculator</h1>
        <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
          <Tab eventKey="description" title="Savings Description">
            <DescriptionTab />
          </Tab>
          <Tab eventKey="table" title="Detailed Summary">
            <TableTab />
          </Tab>
          <Tab eventKey="chart" title="Charts">
            <ChartsTab />
          </Tab>
          <Tab eventKey="dbg" title="Context Dbg">
            <ContextDbg />
          </Tab>
        </Tabs>
      </div>
     </CalculatorStoreProvider> 
  );
}

export default App;
