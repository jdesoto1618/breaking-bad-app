import React from 'react'
import spinner from '../images/loading-icon.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '20rem', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Spinner
