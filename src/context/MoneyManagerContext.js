import React from "react";

const MoneyManagerContext = React.createContext({
    transactionsList: [],
    updateTransactionsList: () => {},
    income: 0,
    changeIncome: () => {},
    expenses: 0,
    changeExpenses: () => {}
})

export default MoneyManagerContext