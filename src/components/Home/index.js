import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavigationBar from '../NavBar'
import MoneyManagerContext from '../../context/MoneyManagerContext'
import './index.css'
import { Container } from 'react-bootstrap'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken === undefined) {
      navigate('/login')
    }
  })
  console.log('home')

  return (
  <MoneyManagerContext.Consumer>
  {value => {
    const {incomeAndExpenses} = value
    const {income, expenses} = incomeAndExpenses
    const userDetails = JSON.parse(localStorage.getItem('user_details'))

    return (
      <>
        <NavigationBar />
        <Container>
          <Row>
            <Col xs={12}>
              <header>
                <h1 className='heading'>{`Hi, ${userDetails === null ? '' : userDetails.name}`}</h1>
                <p className='description'>Welcome back to your <span>Money Manager</span></p>
              </header>
            </Col>
            <Col xs={12} md={4}>
              <div className='money-card balance-card'>
                <img className='money-card-image' src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png' alt='' />
                <div className='money-card-content'>
                  <p className='money-card-title'>Your Balance</p>
                  <p className='money-card-amount'>Rs {income - expenses}</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='money-card income-card'>
                <img className='money-card-image' src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png' alt='' />
                <div className='money-card-content'>
                  <p className='money-card-title'>Your Income</p>
                  <p className='money-card-amount'>Rs {income}</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='money-card expenses-card'>
                <img className='money-card-image' src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png' alt='' />
                <div className='money-card-content'>
                  <p className='money-card-title'>Your Expenses</p>
                  <p className='money-card-amount'>Rs {expenses}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }}
  </MoneyManagerContext.Consumer>
  )
}

export default Home