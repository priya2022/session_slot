import React from 'react'
import './UserDetails.css'

const Details = () => {
  return (

    <div className="dtUserContainer">

        <div className="dtWelMain">
         <h2 className='dtWel1'>
            Hello, <span className="dthigh">User !</span> 
        </h2 >
        {/* <p className='dtWel2'>Have a nice day!</p> */}
        </div>

        <div className="dttextCenter">
            <div className="dtText">
                <h6  className="dtSession">Balance Session</h6>
                <h2 className="dtDay">04</h2>
                <p className="dtValidity">Valid till August 25</p>
            </div>
        </div> 

    </div>
  )
}

export default Details
