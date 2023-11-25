import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/context'

const Dashboard = () => {
  const {getAllUsers} = useContext(AuthContext)
  return (
    <>
     <div>Dashboard</div>
     <button onClick={getAllUsers}>کاربران</button>
    </>
  )
}

export default Dashboard