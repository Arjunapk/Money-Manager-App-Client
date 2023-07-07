import React from "react";

const MoneyManagerContext = React.createContext({
    income: 0,
    changeIncome: () => {},
    expenses: 0,
    changeExpenses: () => {}
})

export default MoneyManagerContext