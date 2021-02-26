import React from "react";
import { CalculatorStoreProvider } from "./context/calculatorStore";

import SavingsPlan from "./components/savingsPlan";
import SummaryTable from "./components/summaryTable";
import ChartsContainer from "./components/chartsContainer";

function App(): JSX.Element {
  return (
    <CalculatorStoreProvider>
      <div>
        <h1>Savings Calculator</h1>
        <div className="container">
          <div className="row">
            <SavingsPlan />
            <SummaryTable />
          </div>
        </div>
        <ChartsContainer />
      </div>
    </CalculatorStoreProvider>
  );
}

export default App;
