import React from "react";

import { CalculatorContext } from "../context/calculatorContext";
import { MIN_YEAR, MAX_YEAR, MIN_YEAR_SPAN, MAX_YEAR_SPAN } from "../constants";

interface NumberSetter {
  (val: number): void;
}

export const Timespan: React.FC = () => {
  const { startYear, numberYears, setYear, setSpan } = React.useContext(
    CalculatorContext
  );
  const [inputYear, setInputYear] = React.useState<number>(startYear);
  const [inputSpan, setInputSpan] = React.useState<number>(numberYears);

  const checkVal = (
    e: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number,
    localSetter: NumberSetter,
    setter: NumberSetter
  ) => {
    const val = Number(e.target.value);
    localSetter(val);
    if (val >= min && val <= max) setter(val);
  };

  return (
     <div className="card timespan form-inline">
      <div className="form-group justify-content-around w-100">
        <div className="d-flex">
          <label className="inline-label">Start Year:</label>
          <input
            className="form-control w-6em"
            onChange={(e) =>
              checkVal(e, MIN_YEAR, MAX_YEAR, setInputYear, setYear)
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
              checkVal(e, MIN_YEAR_SPAN, MAX_YEAR_SPAN, setInputSpan, setSpan)
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
