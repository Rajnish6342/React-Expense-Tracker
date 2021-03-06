import React, { useContext } from 'react'
import { GlobalState } from './../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalState)
  const total = transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
