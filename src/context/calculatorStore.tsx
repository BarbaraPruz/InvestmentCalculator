import React, { Dispatch, useReducer } from "react";
import { Actions, initialState, IState, reducer } from "./reducer";

interface IContextProps {
  state: IState;
  dispatch: Dispatch<Actions>;
}

export const CalculatorStore = React.createContext({} as IContextProps);

export function CalculatorStoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <CalculatorStore.Provider value={value}>
      {props.children}
    </CalculatorStore.Provider>
  );
}
