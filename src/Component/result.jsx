import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = (props) => {
    const { state } = useLocation();
    console.log(state);
    return (
    <div><h1>{`You Have selected ${state.city}, ${state.state}`}</h1></div>
  )
}

export default Result