import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg" alt="page not found" />
      <h6 className='mt-5'>WE ARE SORRY, LOOK LIKE YOU LOST</h6>
      <p>Page your looking for is not available!!!</p>
      <Link to={'/'} className='btn btn-dark'>Back To Home</Link>
    </div>
  )
}

export default Pnf