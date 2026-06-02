import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { destinations, packages } from '../data/data';
export default function Dashboard() {
  const { user, logout, wishlist, savedTrips, activities, toggleWishlist } = useApp();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate('/'); };
  const stats = [
    { label: 'Wishlist Items', value: wishlist.length, icon: 'heart-fill', color: '#EA9940', link: null },
    { label: 'Saved Trips', value: savedTrips.length, icon: 'bookmark-fill', color: '#307082', link: null },
    { label: 'Destinations', value: destinations.length, icon: 'globe2', color: '#6CA3A2', link: '/destinations' },
    { label: 'Packages', value: packages.length, icon: 'bag-fill', color: '#12212E', link: '/packages' },
  ];
  return (
    <div className="container py-5">
      {/* Welcome */}
      <div className="rounded-4 p-4 mb-4 text-white"
        style={{ background: 'linear-gradient(135deg, #12212E, #307082)' }}>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h2 className="fw-bold mb-1">Welcome back, {user?.name?.split(' ')[0]}! 👋</h2>
            <p className="opacity-75 mb-0">Ready for your next adventure?</p>
          </div>
          <div className="d-flex gap-2">
            <Link to="/destinations" className="btn btn-orange rounded-pill px-4">
              <i className="bi bi-compass me-2"></i>Explore
            </Link>
            <button className="btn btn-outline-light rounded-pill px-4" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </button>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-4">
        {stats.map(s => (
          <div key={s.label} className="col-6 col-lg-3">
            <div className="card shadow-sm p-3 h-100 text-center">
              <div className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-2"
                style={{ width: 52, height: 52, background: s.color }}>
                <i className={`bi bi-${s.icon} text-white fs-5`}></i>
              </div>
              <div className="fw-bold fs-3">{s.value}</div>
              <div className="text-muted small">{s.label}</div>
              {s.link && <Link to={s.link} className="stretched-link"></Link>}
            </div>
          </div>
        ))}
      </div>
      <div className="row g-4">
        {/* Wishlist */}
        <div className="col-lg-6">
          <div className="card shadow-sm rounded-4 h-100">
            <div className="card-header bg-transparent border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0"><i className="bi bi-heart-fill me-2" style={{ color: '#EA9940' }}></i>My Wishlist</h5>
              <Link to="/destinations" className="btn btn-sm btn-outline-teal rounded-pill">Add More</Link>
            </div>
            <div className="card-body px-4">
              {wishlist.length === 0 ? (
                <div className="text-center py-4">
                  <i className="bi bi-heart fs-1 text-muted"></i>
                  <p className="text-muted mt-2 small">No items in wishlist yet.</p>
                  <Link to="/destinations" className="btn btn-teal btn-sm rounded-pill px-4">Explore Destinations</Link>
                </div>
              ) : (
                wishlist.map(item => {
                  const dest = destinations.find(d => d.id === item.id);
                  return (
                    <div key={item.id} className="d-flex align-items-center gap-3 mb-3 p-2 rounded-3"
                      style={{ background: 'var(--bg-cream)' }}>
                      {dest && <img src={dest.image} alt={dest.name} className="rounded-3"
                        style={{ width: 56, height: 48, objectFit: 'cover' }} />}
                      <div className="flex-grow-1">
                        <div className="fw-semibold small">{item.name}</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>{item.type}</div>
                      </div>
                      <button className="btn btn-sm btn-outline-danger rounded-pill"
                        onClick={() => toggleWishlist(item)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm rounded-4 mb-4">
            <div className="card-header bg-transparent border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0"><i className="bi bi-bookmark-fill me-2" style={{ color: '#307082' }}></i>Saved Trips</h5>
              <Link to="/packages" className="btn btn-sm btn-outline-teal rounded-pill">Browse Packages</Link>
            </div>
            <div className="card-body px-4">
              {savedTrips.length === 0 ? (
                <div className="text-center py-3">
                  <i className="bi bi-bookmark fs-1 text-muted"></i>
                  <p className="text-muted mt-2 small">No saved trips yet.</p>
                </div>
              ) : (
                savedTrips.slice(0, 3).map(trip => {
                  const pkg = packages.find(p => p.id === trip.id);
                  return (
                    <div key={trip.id} className="d-flex align-items-center gap-3 mb-3 p-2 rounded-3"
                      style={{ background: 'var(--bg-cream)' }}>
                      {pkg && <img src={pkg.image} alt={pkg.name} className="rounded-3"
                        style={{ width: 56, height: 48, objectFit: 'cover' }} />}
                      <div>
                        <div className="fw-semibold small">{trip.name}</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>{trip.type}</div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className="card shadow-sm rounded-4">
            <div className="card-header bg-transparent border-0 pt-4 px-4">
              <h5 className="fw-bold mb-0"><i className="bi bi-clock-history me-2" style={{ color: '#6CA3A2' }}></i>Recent Activity</h5>
            </div>
            <div className="card-body px-4">
              {activities.length === 0 ? (
                <p className="text-muted small text-center py-2">No recent activity.</p>
              ) : (
                activities.slice(0, 5).map(act => (
                  <div key={act.id} className="d-flex gap-3 mb-3">
                    <div className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{ width: 32, height: 32, background: 'var(--bg-cream)' }}>
                      <i className="bi bi-activity small" style={{ color: '#307082' }}></i>
                    </div>
                    <div>
                      <div className="small">{act.text}</div>
                      <div className="text-muted" style={{ fontSize: '0.7rem' }}>{act.time}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}