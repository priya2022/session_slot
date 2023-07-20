import React from 'react'
import {useSelector} from 'react-redux'

const Display = () => {
    const user = useSelector(state=> state.user.value)
    if(!user.email){
      return
    }
  return (
    <div>
        <h2>Email:{user.email}</h2>
        <h3>Password:{user.password}</h3>

    </div>
  )
}

export default Display

