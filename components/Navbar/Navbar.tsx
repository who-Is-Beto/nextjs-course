import React from 'react'
import Link from 'next/link'
import Styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={Styles.navbar}>
      <nav className={Styles.navbar__container}>
        <Link href="/">
          <a className={Styles.navbar__item}>Home</a>
        </Link>

        <Link href="/cart">
          <a className={Styles.navbar__item}>cart</a>
        </Link>
      </nav>
    </header>
  )
}
