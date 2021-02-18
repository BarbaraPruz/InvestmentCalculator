import React from 'react';
import {CalculatorProvider} from './context/calculatorContext';

import InvestmentsTab from './tabs/investmentsTab'
import ContextDbg from './tabs/contextDbg'
import Injection from './components/injection'

import { Tab, Tabs } from 'react-bootstrap';

function App() {
  return (
    <CalculatorProvider >
      <div className="App">
        <h1>Investment Calculator</h1>
        <Tabs defaultActiveKey="investments" id="uncontrolled-tab-example">
          <Tab eventKey="investments" title="Investments">
            <InvestmentsTab />
          </Tab>
          <Tab eventKey="injection" title="Injections">
            <Injection />
          </Tab>
          <Tab eventKey="dbg" title="Context Dbg">
            <ContextDbg />
          </Tab>
        </Tabs>
      </div>
    </CalculatorProvider> 
  );
}

export default App;
