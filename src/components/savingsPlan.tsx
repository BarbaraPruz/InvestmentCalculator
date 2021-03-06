import React from "react";
import NumberInputField from "./numberInputField";
import MoneyInputField from "./moneyInputField";
import { CalculatorStore } from "../context/calculatorStore";
import { Form } from "react-bootstrap";

enum InjectionFrequency {
  None = 0,
  Annually = 1,
}
export const SavingsPlan = (): JSX.Element => {
  const { state, dispatch } = React.useContext(CalculatorStore);
  const { numberYears, initialInvestment, rate, injectionAmount } = state;

  const onFrequencySelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      InjectionFrequency[e.target.value as keyof typeof InjectionFrequency];
    dispatch({ type: "SetInjectionFrequency", frequency: newValue });
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <h2>Savings Plan</h2>
        <div className="row">
          <label className="col-sm-6 text-right" htmlFor="numberYears">Years to Invest:</label>
          <div className="col-sm-6 text-left pl-1">
            <NumberInputField
              onChange={(value: string) =>
                dispatch({ type: "SetNumberYears", years: Number(value) })
              }
              min="1"
              max="100"
              initialValue={numberYears.toString()}
              htmlId="numberYears"
            />
          </div>
        </div>
        <div className="row">
          <label className="col-sm-6 text-right" htmlFor="initialAmount">Initial Amount:</label>
          <div className="col-sm-6 text-left pl-1">
            <MoneyInputField
              htmlId="initialAmount"
              onChange={(value: string) =>
                dispatch({
                  type: "SetInitialInvestment",
                  amount: Number(value),
                })
              }
              initialValue={initialInvestment.toString()}
            />
          </div>
        </div>

        <div className="row">
          <label className="col-sm-6 text-right" htmlFor="interestRate">Annual Interest Rate:</label>
          <div className="col-sm-6 text-left pl-1">
            <NumberInputField
              onChange={(value: string) =>
                dispatch({ type: "SetRate", rate: Number(value) })
              }
              htmlId="interestRate"
              initialValue={rate.toString()}
              min="0.01"
              max="99.99"
              step=".01"
            />
          </div>
        </div>
        <div className="row">
          <label className="col-sm-6 text-right" htmlFor="injectionAmount">Injection Amount:</label>
          <div className="col-sm-6 text-left pl-1">
            <MoneyInputField
              htmlId="injectionAmount"
              onChange={(value: string) =>
                dispatch({ type: "SetInjectionAmount", amount: Number(value) })
              }
              initialValue={injectionAmount.toString()}
            />
          </div>
        </div>
        <div className="row">
          <label className="col-sm-6 text-right" htmlFor="injectionFrequency">Injection Frequency:</label>
          <div className="col-sm-4 pl-1">
            <Form.Control as="select" size="sm" id="injectionFrequency" onChange={onFrequencySelected}>
              {Object.keys(InjectionFrequency).map((f) => {
                return isNaN(Number(f)) ? (
                  <option key={f.toString()} value={f.toString()}>
                    {f}
                  </option>
                ) : (
                  ""
                );
              })}
            </Form.Control>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsPlan;
