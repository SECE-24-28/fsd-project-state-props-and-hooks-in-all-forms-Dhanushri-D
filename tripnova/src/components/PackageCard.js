import React from 'react';
import { useApp } from '../context/AppContext';
export default function PackageCard({ pkg }) {
  const { saveTrip } = useApp();
  return (
    <div className="card h-100 shadow-sm position-relative">
      <span className="ribbon">{pkg.tag}</span>
      <img src={pkg.image} className="card-img-top" alt={pkg.name} />
      <div className="card-body">
        <h5 className="fw-bold mb-1">{pkg.name}</h5>
        <p className="text-muted small mb-2"><i className="bi bi-geo-alt me-1"></i>{pkg.destination}</p>
        <p className="small text-muted mb-3">{pkg.description}</p>
        <div className="d-flex flex-wrap gap-1 mb-3">
          {pkg.includes.map(inc => (
            <span key={inc} className="badge bg-light text-dark border small">{inc}</span>
          ))}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="text-muted small"><i className="bi bi-clock me-1"></i>{pkg.duration} days</span>
            <br />
            <span className="stars small"><i className="bi bi-star-fill"></i> {pkg.rating}</span>
          </div>
          <div className="text-end">
            <div className="fw-bold fs-5" style={{ color: '#EA9940' }}>${pkg.price.toLocaleString()}</div>
            <small className="text-muted">per person</small>
          </div>
        </div>
      </div>
      <div className="card-footer bg-transparent border-0 pb-3 d-flex gap-2">
        <button className="btn btn-teal btn-sm flex-grow-1 rounded-pill" onClick={() => saveTrip({ id: pkg.id, name: pkg.name, type: 'package' })}>
          <i className="bi bi-bookmark me-1"></i>Save Trip
        </button>
        <button className="btn btn-orange btn-sm flex-grow-1 rounded-pill">
          Book Now
        </button>
      </div>
    </div>
  );
}
