import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Layout.module.css'

const Layout: React.FC = ({ children }): React.ReactElement => {
  return (
    <div className={Styles.container}>
      <Navbar />
      {children}
      <footer>this is the footer</footer>
    </div>
  )
}

export default Layout
