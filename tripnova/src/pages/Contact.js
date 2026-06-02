import React, { useEffect, useState } from 'react';
import { clearEnquiryDraft, getEnquiryDraft, pushEnquiry, setEnquiryDraft } from '../utils/tnStorage';
const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };
export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };
  useEffect(() => {
    const draft = getEnquiryDraft(initialForm);
    if (draft) setForm(draft);
  }, []);
  useEffect(() => {
    if (submitted) return;
    setEnquiryDraft(form);
  }, [form, submitted]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    pushEnquiry({
      ...form,
      id: Date.now(),
      date: new Date().toLocaleString(),
    });
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
    clearEnquiryDraft();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const contactInfo = [
    { icon: 'geo-alt-fill', title: 'Address', detail: '123 Travel Street, New York, NY 10001' },
    { icon: 'telephone-fill', title: 'Phone', detail: '+1 (555) 123-4567' },
    { icon: 'envelope-fill', title: 'Email', detail: 'hello@tripnova.com' },
    { icon: 'clock-fill', title: 'Hours', detail: 'Mon–Fri: 9AM – 6PM EST' },
  ];
  return (
    <>
      <div className="py-5 text-white text-center" style={{ background: 'linear-gradient(135deg, #12212E, #307082)' }}>
        <h1 className="fw-bold display-5">Contact Us</h1>
        <p className="opacity-75">We'd love to hear from you. Let's plan your next adventure together.</p>
      </div>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="contact-info-card mb-4">
              <h4 className="fw-bold mb-4">Get in Touch</h4>
              {contactInfo.map(info => (
                <div key={info.title} className="d-flex gap-3 mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 44, height: 44, background: '#EA9940' }}>
                    <i className={`bi bi-${info.icon} text-white`}></i>
                  </div>
                  <div>
                    <div className="fw-semibold">{info.title}</div>
                    <div className="opacity-75 small">{info.detail}</div>
                  </div>
                </div>
              ))}
              <div className="d-flex gap-3 mt-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(s => (
                  <a key={s} href="#!" className="text-white fs-5 opacity-75">
                    <i className={`bi bi-${s}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card shadow-sm p-4 rounded-4">
              <h4 className="fw-bold mb-4">Send a Message</h4>
              {submitted && (
                <div className="alert alert-success rounded-3 mb-4">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Your enquiry has been submitted! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Full Name *</label>
                    <input
                      type="text" name="name" className={`form-control rounded-3 ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="John Doe" value={form.name} onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Email Address *</label>
                    <input
                      type="email" name="email" className={`form-control rounded-3 ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="john@example.com" value={form.email} onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Phone Number</label>
                    <input
                      type="tel" name="phone" className="form-control rounded-3"
                      placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Subject *</label>
                    <select
                      name="subject" className={`form-select rounded-3 ${errors.subject ? 'is-invalid' : ''}`}
                      value={form.subject} onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option>Trip Planning</option>
                      <option>Package Inquiry</option>
                      <option>Hotel Booking</option>
                      <option>General Inquiry</option>
                      <option>Feedback</option>
                    </select>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Message *</label>
                    <textarea
                      name="message" rows={5} className={`form-control rounded-3 ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Tell us about your travel plans..." value={form.message} onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-teal rounded-pill px-5 py-2">
                      <i className="bi bi-send me-2"></i>Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}