import React from 'react'
import { Link } from 'react-router-dom'

const Adminpage = () => {
  return (
    <div style={{marginLeft:"2rem"}}>
        <div>Adminpage</div>
        <br/>
        <Link to={"./stalls"}>Stalls</Link>
        <br/>
        <Link to={"./overalldata"}>Overall Data</Link>
        <br/>
        <Link to={"./vendorsdata"}>Vendors Requirements</Link>
        <br/>
    </div>
  )
}

export default Adminpage