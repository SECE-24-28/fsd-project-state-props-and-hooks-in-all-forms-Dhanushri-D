import React, { useState } from 'react';
import { pushEnquiry } from '../utils/tnStorage';
export default function HotelCard({ hotel }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < hotel.rating);
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
      placeType: 'hotel',
      placeId: hotel.id ?? hotel.name,
      placeTitle: hotel.name,
      ...form,
    });
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setTimeout(() => setShowEnquiry(false), 900);
  };
  return (
    <div className="card h-100 shadow-sm">
      <div className="position-relative">
        <img src={hotel.image} className="card-img-top" alt={hotel.name} />
        <span className="badge badge-orange text-white position-absolute top-0 end-0 m-2">{hotel.category}</span>
      </div>
      <div className="card-body">
        <h5 className="fw-bold mb-1">{hotel.name}</h5>
        <p className="text-muted small mb-2"><i className="bi bi-geo-alt me-1"></i>{hotel.location}</p>
        <div className="mb-2">
          {stars.map((filled, i) => (
            <i key={i} className={`bi bi-star${filled ? '-fill' : ''} stars small`}></i>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-1 mb-3">
          {hotel.amenities.slice(0, 4).map(a => (
            <span key={a} className="badge bg-light text-dark border small">
              <i className="bi bi-check-circle me-1" style={{ color: '#307082' }}></i>{a}
            </span>
          ))}
          {hotel.amenities.length > 4 && (
            <span className="badge bg-light text-dark border small">+{hotel.amenities.length - 4} more</span>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="fw-bold fs-5" style={{ color: '#EA9940' }}>${hotel.price}</span>
            <span className="text-muted small"> /night</span>
          </div>
          <button className="btn btn-teal btn-sm rounded-pill px-3" onClick={() => { setSubmitted(false); setErrors({}); setForm({ name: '', email: '', phone: '', message: '' }); setShowEnquiry(true); }}>
            Enquire
          </button>
        </div>
      </div>
      {showEnquiry && (
        <div className="tn-modal-overlay" onClick={() => setShowEnquiry(false)}>
          <div className="tn-modal" onClick={(ev) => ev.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Enquiry: {hotel.name}</h6>
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