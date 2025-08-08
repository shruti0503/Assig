import React, { useState } from 'react'

const headerOptions = ["ABOUT ME", "PORTFOLIO", "SERVICES", "TESTIMONIALS"]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      width: '100%',
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <nav style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem'
      }}>
        {/* Logo */}
        <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 2 }}>
          MyLogo
        </div>
        {/* Desktop Menu */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }} className="header-menu">
          {headerOptions.map(option => (
            <li key={option} style={{ cursor: 'pointer', fontWeight: 500 }}>
              {option}
            </li>
          ))}
        </ul>
        {/* Hamburger Icon */}
        <button
          className="header-hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: 28,
            cursor: 'pointer'
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          listStyle: 'none',
          margin: 0,
          padding: '1rem',
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }} className="header-mobile-menu">
          {headerOptions.map(option => (
            <li key={option} style={{ cursor: 'pointer', fontWeight: 500 }}>
              {option}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          .header-menu {
            display: none !important;
          }
          .header-hamburger {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .header-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header