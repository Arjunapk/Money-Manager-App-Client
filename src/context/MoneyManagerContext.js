import React from "react";

const MoneyManagerContext = React.createContext({
    transactionsList: [],
    updateTransactionsList: () => {},
    incomeAndExpenses: {income: 0, expenses: 0},
    changeIncomeAndExpenses: () => {}
})

export default MoneyManagerContext