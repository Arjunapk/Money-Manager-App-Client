import React from "react";

const MoneyManagerContext = React.createContext({
    userDetails: {},
    updateUserDetails: () => {},
    income: 0,
    changeIncome: () => {},
    expenses: 0,
    changeExpenses: () => {}
})

export default MoneyManagerContext