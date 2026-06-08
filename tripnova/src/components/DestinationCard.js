import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { pushEnquiry } from '../utils/tnStorage';
export default function DestinationCard({ dest }) {
  const { toggleWishlist, isWishlisted } = useApp();
  const wishlisted = isWishlisted(dest.id);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    pushEnquiry({
      id: Date.now(),
      date: new Date().toLocaleString(),
      placeType: 'destination',
      placeId: dest.id,
      placeTitle: dest.name,
      ...form,
    });
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setTimeout(() => setShowEnquiry(false), 900);
  };
  return (
    <div className="card h-100 shadow-sm position-relative">
      <button
        className={`wishlist-btn ${wishlisted ? 'active' : ''}`}
        onClick={() => toggleWishlist({ id: dest.id, name: dest.name, type: 'destination' })}
      >
        <i className={`bi bi-heart${wishlisted ? '-fill' : ''}`}></i>
      </button>
      <img src={dest.image} className="card-img-top" alt={dest.name} />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <h5 className="card-title mb-0 fw-bold">{dest.name}</h5>
          <span className="badge badge-teal text-white">{dest.category}</span>
        </div>
        <p className="text-muted small mb-2"><i className="bi bi-geo-alt me-1"></i>{dest.country}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="stars small"><i className="bi bi-star-fill"></i> {dest.rating}</span>
          <span className="fw-bold" style={{ color: '#307082' }}>From ${dest.price}</span>
        </div>
      </div>
      <div className="card-footer bg-transparent border-0 pb-3">
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-outline-teal btn-sm w-100 rounded-pill"
            onClick={() => { setSubmitted(false); setErrors({}); setForm({ name: '', email: '', phone: '', message: '' }); setShowEnquiry(true); }}
          >
            Enquire <i className="bi bi-chat-left-text ms-1"></i>
          </button>
          <Link to={`/destinations/${dest.id}`} className="btn btn-teal btn-sm w-100 rounded-pill">
            Explore <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
      {showEnquiry && (
        <div className="tn-modal-overlay" onClick={() => setShowEnquiry(false)}>
          <div className="tn-modal" onClick={(ev) => ev.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Enquiry: {dest.name}</h6>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowEnquiry(false)}></button>
            </div>
            {submitted ? (
              <div className="alert alert-success small rounded-3 mb-0">
                <i className="bi bi-check-circle-fill me-2"></i>Enquiry submitted!
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Full Name *</label>
                    <input
                      type="text" name="name"
                      className={`form-control rounded-3 ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="John Doe" value={form.name} onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Email Address *</label>
                    <input
                      type="email" name="email"
                      className={`form-control rounded-3 ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="john@example.com" value={form.email} onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Phone</label>
                    <input
                      type="tel" name="phone"
                      className="form-control rounded-3"
                      placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Message *</label>
                    <textarea
                      name="message" rows={4}
                      className={`form-control rounded-3 ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell us about your enquiry..." value={form.message} onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-teal w-100 rounded-pill">
                      <i className="bi bi-send me-2"></i>Send Enquiry
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}