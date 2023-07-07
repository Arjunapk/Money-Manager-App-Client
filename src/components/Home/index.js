import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './index.css'
import MoneyManagerContext from '../../context/MoneyManagerContext'

const Home = () => {
return (
<MoneyManagerContext.Consumer>
{value => {
  const {income, expenses} = value

  return (
      <Row>
        <Col xs={12}>
          <header>
            <h1 className='heading'>Hi, Richard</h1>
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
              <p className='money-card-title'>Your Balance</p>
              <p className='money-card-amount'>Rs {income}</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className='money-card expenses-card'>
            <img className='money-card-image' src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png' alt='' />
            <div className='money-card-content'>
              <p className='money-card-title'>Your Balance</p>
              <p className='money-card-amount'>Rs {expenses}</p>
            </div>
          </div>
        </Col>
      </Row>
  )
}}
</MoneyManagerContext.Consumer>
)
}

export default Home