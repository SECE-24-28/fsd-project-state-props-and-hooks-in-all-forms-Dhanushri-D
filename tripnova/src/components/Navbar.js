import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
export default function Navbar() {
  const { user, logout, wishlist } = useApp();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/packages', label: 'Packages' },
    { to: '/hotels', label: 'Hotels' },
    { to: '/gallery', label: 'Gallery' },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          Trip<span>Nova</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setExpanded(!expanded)}
          style={{ color: '#fff' }}
        >
          <i className="bi bi-list fs-3"></i>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto gap-1">
            {navLinks.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  className="nav-link px-3"
                  to={to}
                  end={to === '/'}
                  onClick={() => setExpanded(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <Link to="/dashboard" className="btn btn-teal btn-sm rounded-pill px-3" onClick={() => setExpanded(false)}>
                  <i className="bi bi-person-circle me-1"></i>{user.name.split(' ')[0]}
                  {wishlist.length > 0 && (
                    <span className="badge bg-danger ms-1 rounded-pill">{wishlist.length}</span>
                  )}
                </Link>
                <button className="btn btn-outline-light btn-sm rounded-pill px-3" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-orange btn-sm rounded-pill px-4" onClick={() => setExpanded(false)}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}