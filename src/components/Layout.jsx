import React from 'react'
import Loader from './Loader/Loader'

function Layout(props) {
  return (
    <div>
        <Loader />
        {props.children}
    </div>
  )
}

export default Layout