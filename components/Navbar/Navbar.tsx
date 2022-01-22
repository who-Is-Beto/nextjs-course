import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <Link href="/">
          <a className="navbar__item">Home</a>
        </Link>
      </nav>
    </header>
  )
}
