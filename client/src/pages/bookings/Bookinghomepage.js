import React from 'react'
import { Link } from 'react-router-dom'

const Bookinghomepage = () => {
  return (
    <div style={{marginTop:"13vh" , fontSize:"1.5rem"}}>
        <h2>Stall Booking Platform</h2>
        <br/>
        <Link to={'./vendorsfeed'}>Fill Vendors Requirements Form</Link>
        <br/>
        <Link to={'./bookingstall'}>Click Here To Book Stalls</Link>
    </div>
  )
}

export default Bookinghomepage