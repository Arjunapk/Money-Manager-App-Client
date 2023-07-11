import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavigationBar from '../NavBar'
import Table from 'react-bootstrap/Table'
import MoneyManagerContext from '../../context/MoneyManagerContext'
import './index.css'
import { Container } from 'react-bootstrap'

const History = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken === undefined) {
      navigate('/login')
    }
  })

  const onClickHistory = () => {
    navigate('/history')
  }
  
  const onClickAddTransaction = () => {
    navigate('/add-transaction')
  }

  return (
    <MoneyManagerContext.Consumer>
      {value => {
        const {transactionsList} = value
        let headings
        if (transactionsList[0] !== undefined) {
          headings = Object.keys(transactionsList[0])
        }

        return (
          <>
            <NavigationBar />
            <Container>
              {transactionsList.length > 0 && (
                <>
                  <Table responsive className='history-table'>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        {Array.from(headings.slice(2)).map((item, index) => (
                          <th key={index}>{item.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {transactionsList.map((item, index) => {
                        const activeStyle = item.type === 'INCOME' ? 'income' : 'expenses'
                        return (
                          <tr key={item.transaction_id}>
                            <td className={activeStyle}>{index + 1}</td>
                            <td className={activeStyle}>{item.type}</td>
                            <td className={activeStyle}>{item.title}</td>
                            <td className={activeStyle}>{item.amount}</td>          
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                  <div className='button-card'>
                    <button type='button' className='btn btn-primary' onClick={onClickHistory}>History</button>
                    <button type='button' className='btn btn-primary' onClick={onClickAddTransaction}>Add Transaction</button>
                  </div>
                </>
              )}
              
            </Container>
          </>
        )
      }}
    </MoneyManagerContext.Consumer>
  )
}

export default History