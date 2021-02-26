enum InjectionFrequency {
  None = 0,
  Annually = 1,
}

export interface IState {
  numberYears: number;
  initialInvestment: number;
  rate: number;
  injectionAmount: number;
  injectionFrequency: InjectionFrequency;
  yearSavings: YearSavings[];
}

interface ISetNumberYears {
  type: "SetNumberYears";
  years: number;
}

interface ISetInitialInvestment {
  type: "SetInitialInvestment";
  amount: number;
}

interface ISetRate {
  type: "SetRate";
  rate: number;
}

interface ISetInjectionAmount {
  type: "SetInjectionAmount";
  amount: number;
}

interface ISetInjectionFrequency {
  type: "SetInjectionFrequency";
  frequency: InjectionFrequency;
}

export type Actions =
  | ISetNumberYears
  | ISetInitialInvestment
  | ISetRate
  | ISetInjectionAmount
  | ISetInjectionFrequency;

export const initialState = {
  numberYears: 5,
  initialInvestment: 0,
  rate: 1.75,
  injectionAmount: 0,
  injectionFrequency: InjectionFrequency.None,
  yearSavings: [
    { start: 0, deposits: 0, interest: 0, amount: 0 },
    { start: 0, deposits: 0, interest: 0, amount: 0 },
    { start: 0, deposits: 0, interest: 0, amount: 0 },
    { start: 0, deposits: 0, interest: 0, amount: 0 },
    { start: 0, deposits: 0, interest: 0, amount: 0 },
  ],
};

export const reducer = (state: IState, action: Actions) => {
  const calcInterest = (initial: number, rate: number): number => {
    return Math.pow(1 + rate / 100 / 12, 12) * initial;
  };

  const calcSavings = (
    years: number,
    initial: number,
    amount: number,
    freq: InjectionFrequency,
    rate: number
  ): YearSavings[] => {
    const amt: number = amount * freq;
    const savings: YearSavings[] = [];
    const firstAmount = calcInterest(initial, rate);
    const year1: YearSavings = {
      start: 0,
      deposits: initial,
      amount: firstAmount,
      interest: firstAmount - initial,
    };

    savings.push(year1);
    for (let i = 1; i < years; ++i) {
      const start = savings[i - 1].amount;
      const amount = calcInterest(start + amt, rate);
      savings.push({
        start: start,
        deposits: amt,
        amount: amount,
        interest: amount - amt - start,
      });
    }
    return savings;
  };

  switch (action.type) {
    case "SetNumberYears":
      return {
        ...state,
        numberYears: action.years,
        yearSavings: calcSavings(
          action.years,
          state.initialInvestment,
          state.injectionAmount,
          state.injectionFrequency,
          state.rate
        ),
      };
    case "SetInitialInvestment":
      return {
        ...state,
        initialInvestment: action.amount,
        yearSavings: calcSavings(
          state.numberYears,
          action.amount,
          state.injectionAmount,
          state.injectionFrequency,
          state.rate
        ),
      };
    case "SetRate":
      return {
        ...state,
        rate: action.rate,
        yearSavings: calcSavings(
          state.numberYears,
          state.initialInvestment,
          state.injectionAmount,
          state.injectionFrequency,
          action.rate
        ),
      };
    case "SetInjectionAmount":
      return {
        ...state,
        injectionAmount: action.amount,
        yearSavings: calcSavings(
          state.numberYears,
          state.initialInvestment,
          action.amount,
          state.injectionFrequency,
          state.rate
        ),
      };
    case "SetInjectionFrequency":
      return {
        ...state,
        injectionFrequency: action.frequency,
        yearSavings: calcSavings(
          state.numberYears,
          state.initialInvestment,
          state.injectionAmount,
          action.frequency,
          state.rate
        ),
      };
  }
};
