import {format} from 'date-fns'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavigationBar from '../NavBar'
import './index.css'

const typeList = [
    {id: "INCOME", displayText: "Income"},
    {id: "EXPENSES", displayText: "Expenses"}
]

const AddTransaction = () => {
  const [title, changeTitle] = useState('')
  const [type, changeType] = useState(typeList[0].id)
  const [amount, changeAmount] = useState('')
  const [date, changeDate] = useState('')
  const [description, changeDescription] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken === undefined) {
      navigate('/login')
    }
  })
  console.log(date)

  useEffect(() => {
    changeDate(format(new Date(), 'yyyy-MM-dd'))
  }, [date])

  const onChangeTitle = event => {
    changeTitle(event.target.value)
  }
  
  const onChangeType = event => {
    changeType(event.target.value)
  }
  
  const onChangeAmount = event => {
    changeAmount(event.target.value)
  }

  const onChangeDate = event => {
    changeDate(event.target.value)
  }

  const onChangeDescription = event => {
    changeDescription(event.target.value)
  }

  const onSubmitAddTransaction = async event => {
    event.preventDefault()
    const transactionDetails = {title, type, amount, date, description}
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://money-manager-api-v4pu.onrender.com/transactions'
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(transactionDetails)
    }
    const response = await fetch(url, options)
    await response.json()
    navigate('/history')
  }

  return (
    <>
      <NavigationBar />
      <Container className='add-transaction-card'>
        <form className='add-transactin-form' onSubmit={onSubmitAddTransaction}>
          <p className='h1 add-transaction-heading'>Add Transaction</p>
          <label className='add-transaction-label' htmlFor='title'>TITLE</label>
          <input className='add-transaction-input form-control' id='title' type='text' value={title} onChange={onChangeTitle} placeholder='Title' required />
          <label className='add-transaction-label' htmlFor='type'>TYPE</label>
          <select className='add-transaction-input form-control' id='type' value={type} onChange={onChangeType}>
            {typeList.map(each => (
              <option key={each.id} value={each.id}>{each.displayText}</option>
            ))}
          </select>
          <label className='add-transaction-label' htmlFor='amout'>AMOUNT</label>
          <input className='add-transaction-input form-control' id='amount' type='number' value={amount} onChange={onChangeAmount} placeholder='Amount' required />
          <label className='add-transaction-label' htmlFor='date'>DATE</label>
          <input className='add-transaction-input form-control' id='date' type='date' value={date} onChange={onChangeDate} required />
          <label className='add-transaction-label' htmlFor='description'>DESCRIPTION</label>
          <input className='add-transaction-input form-control' id='description' type='text' value={description} onChange={onChangeDescription} placeholder='Description' required />
          <button type='submit' className='add-transaction-button btn btn-primary'>Add Transaction</button>
        </form>
      </Container>
    </>
  )
}

export default AddTransaction