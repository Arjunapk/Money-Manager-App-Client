import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddTransaction from './components/AddTransaction'
import MoneyManagerContext from './context/MoneyManagerContext'
import './App.css'

function App() {
  const [userDetails, updateUserDetails] = useState({})
  const [income, changeIncome] = useState(0)
  const [expenses, changeExpenses] = useState(0)

  return (
    <MoneyManagerContext.Provider value={{userDetails, updateUserDetails, income, changeIncome, expenses, changeExpenses}}>
      <Container fluid>
        <Routes>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add-transaction' element={<AddTransaction />} />
        </Routes>
      </Container>
    </MoneyManagerContext.Provider>
  );
}

export default App;
