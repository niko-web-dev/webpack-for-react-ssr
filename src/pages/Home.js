import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </>
  )
}

export default Home