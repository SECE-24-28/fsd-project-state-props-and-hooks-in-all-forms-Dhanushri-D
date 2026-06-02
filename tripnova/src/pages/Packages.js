import React, { useState } from 'react';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/data';
export default function Packages() {
  const [maxPrice, setMaxPrice] = useState(5000);
  const [maxDuration, setMaxDuration] = useState(14);
  const [search, setSearch] = useState('');
  const filtered = packages.filter(p =>
    p.price <= maxPrice &&
    p.duration <= maxDuration &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.destination.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <>
      <div className="py-5 text-white text-center" style={{ background: 'linear-gradient(135deg, #12212E, #307082)' }}>
        <h1 className="fw-bold display-5">Tour Packages</h1>
        <p className="opacity-75">All-inclusive packages for every type of traveler</p>
      </div>
      <div className="container py-5">
        <div className="filter-bar mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label small fw-semibold">Search Packages</label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search by name or destination..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-semibold">
                Max Price: <span style={{ color: '#EA9940' }}>${maxPrice.toLocaleString()}</span>
              </label>
              <input
                type="range" className="form-range"
                min={500} max={5000} step={100}
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between" style={{ fontSize: '0.75rem', color: '#888' }}>
                <span>$500</span><span>$5,000</span>
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-semibold">
                Max Duration: <span style={{ color: '#EA9940' }}>{maxDuration} days</span>
              </label>
              <input
                type="range" className="form-range"
                min={3} max={14} step={1}
                value={maxDuration}
                onChange={e => setMaxDuration(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between" style={{ fontSize: '0.75rem', color: '#888' }}>
                <span>3 days</span><span>14 days</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted mb-3">{filtered.length} package{filtered.length !== 1 ? 's' : ''} found</p>
        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-bag-x fs-1 text-muted"></i>
            <p className="mt-3 text-muted">No packages match your filters.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map(pkg => (
              <div key={pkg.id} className="col-md-6 col-lg-4">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
