import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer-custom pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h4 className="text-white fw-bold mb-3">Trip<span style={{ color: '#EA9940' }}>Nova</span></h4>
            <p className="small">Your trusted travel companion for unforgettable journeys around the world. Discover, plan, and explore with confidence.</p>
            <div className="d-flex gap-3 mt-3">
              {['facebook', 'twitter', 'instagram', 'youtube'].map(s => (
                <a key={s} href="#!" className="fs-5"><i className={`bi bi-${s}`}></i></a>
              ))}
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <h6 className="text-white mb-3">Explore</h6>
            <ul className="list-unstyled small">
              {[['/', 'Home'], ['/destinations', 'Destinations'], ['/packages', 'Packages'], ['/hotels', 'Hotels']].map(([to, label]) => (
                <li key={to} className="mb-2"><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <h6 className="text-white mb-3">Company</h6>
            <ul className="list-unstyled small">
              {[['/about', 'About Us'], ['/contact', 'Contact'], ['/gallery', 'Gallery'], ['/login', 'Login'], ['/dashboard', 'Dashboard']].map(([to, label]) => (
                <li key={to} className="mb-2"><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><i className="bi bi-geo-alt me-2" style={{ color: '#EA9940' }}></i>123 Travel Street, NY 10001</li>
              <li className="mb-2"><i className="bi bi-telephone me-2" style={{ color: '#EA9940' }}></i>+1 (555) 123-4567</li>
              <li className="mb-2"><i className="bi bi-envelope me-2" style={{ color: '#EA9940' }}></i>hello@tripnova.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary mt-4" />
        <div className="text-center small">
          <p className="mb-0">© 2025 TripNova. All rights reserved. Made with <i className="bi bi-heart-fill text-danger"></i> for travelers.</p>
        </div>
      </div>
    </footer>
  );
}
