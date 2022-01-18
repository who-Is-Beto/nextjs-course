import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <Navbar />
      {children}
      <footer>this is the footer</footer>
    </>
  )
}

export default Layout
