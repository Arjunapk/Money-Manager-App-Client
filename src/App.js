import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddTransaction from './components/AddTransaction'
import History from './components/History'
import MoneyManagerContext from './context/MoneyManagerContext'
import './App.css'
import Cookies from 'js-cookie'

function App() {
  const [transactionsList, updateTransactionsList] = useState([])
  const [income, changeIncome] = useState(0)
  const [expenses, changeExpenses] = useState(0)

  const updateIncomeAndExpenses = data => {
    let incomeValue = 0
    let expensesValue = 0
    data.forEach(each => {
      if (each.type === 'INCOME') {
        incomeValue += parseInt(each.amount)
      } else if (each.type === 'EXPENSES') {
        expensesValue += parseInt(each.amount)
      }
    })
    changeIncome(incomeValue)
    changeExpenses(expensesValue)
  }

  useEffect(() => {
    const url = 'https://money-manager-api-v4pu.onrender.com/transactions'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`
      }
    }
    
    fetch(url, options)
      .then(data => data.json())
      .then(data => {
        updateTransactionsList(data)
        if (jwtToken !== undefined) {
          updateIncomeAndExpenses(data)
        }
      });
  })

  return (
    <MoneyManagerContext.Provider value={{transactionsList, updateTransactionsList, income, changeIncome, expenses, changeExpenses}}>
      <Container fluid>
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add-transaction' element={<AddTransaction />} />
          <Route exact path='/history' element={<History />} />
        </Routes>
      </Container>
    </MoneyManagerContext.Provider>
  );
}

export default App;
