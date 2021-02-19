import React from "react";

import { CalculatorStore } from "../context/calculatorStore";
import { Actions } from "../context/reducer";

import { MIN_YEAR, MAX_YEAR, MIN_YEAR_SPAN, MAX_YEAR_SPAN } from "../constants";

interface NumberSetter {
  (val: number): void;
}

export const Timespan: React.FC = () => {
  const { state:{startYear, numberYears}, dispatch } = React.useContext(
    CalculatorStore
  );
  const [inputYear, setInputYear] = React.useState<number>(startYear);
  const [inputSpan, setInputSpan] = React.useState<number>(numberYears);

  const checkYear = (
    e: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number,
    localSetter: NumberSetter
  ) => {
    const val = Number(e.target.value);
    localSetter(val);
    if (val >= min && val <= max) dispatch({type:'CalculatorSetStartYear',year:val});
  };

  const checkSpan = (
    e: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number,
    localSetter: NumberSetter,
  ) => {
    const val = Number(e.target.value);
    localSetter(val);
    if (val >= min && val <= max) dispatch({type:'CalculatorSetNumberYears',span:val});
  };

  return (
     <div className="card timespan form-inline">
      <div className="form-group justify-content-around w-100">
        <div className="d-flex">
          <label className="inline-label">Start Year:</label>
          <input
            className="form-control w-6em"
            onChange={(e) =>
              checkYear(e, MIN_YEAR, MAX_YEAR, setInputYear)
            }
            type="number"
            min={MIN_YEAR}
            max={MAX_YEAR}
            step="1"
            value={inputYear}
          />
        </div>

        <div className="d-flex">
          <label className="inline-label">Number Years:</label>
          <input
            className="form-control w-6em"
            onChange={(e) =>
              checkSpan(e, MIN_YEAR_SPAN, MAX_YEAR_SPAN, setInputSpan)
            }
            type="number"
            min={MIN_YEAR_SPAN}
            max={MAX_YEAR_SPAN}
            step="1"
            value={inputSpan}
          />
        </div>
      </div>
    </div>
  );
};

export default Timespan;
