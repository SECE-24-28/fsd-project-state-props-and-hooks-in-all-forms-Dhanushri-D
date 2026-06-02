import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/data';
import { useApp } from '../context/AppContext';
export default function DestinationDetails() {
  const { id } = useParams();
  const dest = destinations.find(d => d.id === parseInt(id));
  const { toggleWishlist, isWishlisted } = useApp();
  if (!dest) return (
    <div className="container py-5 text-center">
      <i className="bi bi-exclamation-circle fs-1 text-muted"></i>
      <h3 className="mt-3">Destination not found</h3>
      <Link to="/destinations" className="btn btn-teal mt-3 rounded-pill px-4">Back to Destinations</Link>
    </div>
  );
  const wishlisted = isWishlisted(dest.id);
  return (
    <>
      <div className="position-relative" style={{ height: 420, overflow: 'hidden' }}>
        <img src={dest.image} alt={dest.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
        <div className="position-absolute inset-0 w-100 h-100 d-flex align-items-end"
          style={{ background: 'linear-gradient(to top, rgba(18,33,46,0.85), transparent)', top: 0 }}>
          <div className="container pb-4 text-white">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/destinations" className="text-white-50">Destinations</Link></li>
                <li className="breadcrumb-item active text-white">{dest.name}</li>
              </ol>
            </nav>
            <h1 className="display-4 fw-bold mb-1">{dest.name}</h1>
            <p className="fs-5 opacity-75"><i className="bi bi-geo-alt me-1"></i>{dest.country}</p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
              <span className="badge badge-teal text-white px-3 py-2">{dest.category}</span>
              <span className="stars"><i className="bi bi-star-fill me-1"></i>{dest.rating} Rating</span>
              <span className="text-muted"><i className="bi bi-clock me-1"></i>{dest.duration}</span>
              <span className="text-muted"><i className="bi bi-sun me-1"></i>Best: {dest.bestTime}</span>
            </div>
            <h4 className="fw-bold mb-3">About {dest.name}</h4>
            <p className="text-muted lh-lg mb-4">{dest.description}</p>
            <p className="text-muted lh-lg">
              Whether you're seeking adventure, relaxation, or cultural immersion, {dest.name} offers an unparalleled experience that will leave you with memories to last a lifetime. From the moment you arrive, you'll be captivated by the beauty and charm of this incredible destination.
            </p>
            <h4 className="fw-bold mt-4 mb-3">Highlights</h4>
            <div className="row g-2">
              {dest.highlights.map(h => (
                <div key={h} className="col-sm-6">
                  <div className="d-flex align-items-center gap-2 p-3 rounded-3" style={{ background: '#fff' }}>
                    <i className="bi bi-check-circle-fill" style={{ color: '#307082' }}></i>
                    <span>{h}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm p-4 rounded-4">
              <h5 className="fw-bold mb-3">Plan Your Trip</h5>
              <div className="mb-3 p-3 rounded-3" style={{ background: 'var(--bg-cream)' }}>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Starting from</span>
                  <span className="fw-bold fs-4" style={{ color: '#EA9940' }}>${dest.price}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Duration</span>
                  <span>{dest.duration}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Best Time</span>
                  <span>{dest.bestTime}</span>
                </div>
              </div>
              <button
                className={`btn w-100 rounded-pill mb-2 ${wishlisted ? 'btn-orange' : 'btn-outline-teal'}`}
                onClick={() => toggleWishlist({ id: dest.id, name: dest.name, type: 'destination' })}
              >
                <i className={`bi bi-heart${wishlisted ? '-fill' : ''} me-2`}></i>
                {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </button>
              <Link to="/packages" className="btn btn-teal w-100 rounded-pill">
                View Packages <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
            <div className="card shadow-sm p-4 rounded-4 mt-3">
              <h6 className="fw-bold mb-3">Similar Destinations</h6>
              {destinations.filter(d => d.category === dest.category && d.id !== dest.id).slice(0, 3).map(d => (
                <Link key={d.id} to={`/destinations/${d.id}`} className="d-flex align-items-center gap-3 mb-3 text-decoration-none text-dark">
                  <img src={d.image} alt={d.name} className="rounded-3" style={{ width: 60, height: 50, objectFit: 'cover' }} />
                  <div>
                    <div className="fw-semibold small">{d.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>{d.country}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}