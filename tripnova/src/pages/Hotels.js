import React, { useState } from 'react';
import HotelCard from '../components/HotelCard';
import { hotels } from '../data/data';
const CATEGORIES = ['All', 'Luxury', 'Boutique', 'Overwater', 'Resort', 'City'];
export default function Hotels() {
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(1);
  const filtered = hotels.filter(h =>
    (category === 'All' || h.category === category) &&
    h.price <= maxPrice &&
    h.rating >= minRating
  );
  return (
    <>
      <div className="py-5 text-white text-center" style={{ background: 'linear-gradient(135deg, #12212E, #307082)' }}>
        <h1 className="fw-bold display-5">Hotels & Stays</h1>
        <p className="opacity-75">Handpicked accommodations for every style and budget</p>
      </div>
      <div className="container py-5">
        <div className="filter-bar mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label small fw-semibold">Category</label>
              <div className="d-flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    className={`btn btn-sm rounded-pill px-3 ${category === cat ? 'btn-teal' : 'btn-outline-secondary'}`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-semibold">
                Max Price: <span style={{ color: '#EA9940' }}>${maxPrice}/night</span>
              </label>
              <input type="range" className="form-range" min={100} max={1000} step={50}
                value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
              <div className="d-flex justify-content-between" style={{ fontSize: '0.75rem', color: '#888' }}>
                <span>$100</span><span>$1,000</span>
              </div>
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-semibold">Min Rating</label>
              <div className="d-flex gap-2">
                {[1, 2, 3, 4, 5].map(r => (
                  <button
                    key={r}
                    className={`btn btn-sm rounded-pill ${minRating === r ? 'btn-orange' : 'btn-outline-secondary'}`}
                    onClick={() => setMinRating(r)}
                  >
                    {r}<i className="bi bi-star-fill ms-1" style={{ fontSize: '0.65rem' }}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted mb-3">{filtered.length} hotel{filtered.length !== 1 ? 's' : ''} found</p>
        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-building-x fs-1 text-muted"></i>
            <p className="mt-3 text-muted">No hotels match your filters.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map(hotel => (
              <div key={hotel.id} className="col-md-6 col-lg-4">
                <HotelCard hotel={hotel} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}