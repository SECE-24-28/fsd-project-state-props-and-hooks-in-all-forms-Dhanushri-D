import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getJSON, setJSON } from '../utils/tnStorage';
const DEMO = { email: 'demo@tripnova.com', password: 'demo123', name: 'Alex Johnson' };
export default function Login() {
  const { login, user } = useApp();
  const navigate = useNavigate();
  const [mode, setMode] = useState('signin'); 
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  if (user) { navigate('/dashboard'); return null; }
  const validate = () => {
    const e = {};
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (mode === 'signup') {
      if (!form.name.trim()) e.name = 'Name is required';
    }
    return e;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      if (mode === 'signin') {
        if (form.email === DEMO.email && form.password === DEMO.password) {
          login({ name: DEMO.name, email: DEMO.email });
          navigate('/dashboard');
          return;
        }
        const users = getJSON('tn_users', []);
        const found = users.find(u => u.email.toLowerCase() === form.email.toLowerCase());
        if (found && found.password === form.password) {
          login({ name: found.name, email: found.email });
          navigate('/dashboard');
          return;
        }
        setErrors({ general: 'Invalid credentials. Use demo@tripnova.com / demo123 or create an account.' });
        setLoading(false);
        return;
      }
      const users = getJSON('tn_users', []);
      const exists = users.some(u => u.email.toLowerCase() === form.email.toLowerCase());
      if (exists) {
        setErrors({ general: 'Account already exists for this email.' });
        setLoading(false);
        return;
      }
      const newUser = { name: form.name.trim(), email: form.email.trim(), password: form.password };
      users.push(newUser);
      setJSON('tn_users', users);
      login({ name: newUser.name, email: newUser.email });
      navigate('/dashboard');
    }, 800);
  };
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };
  return (
    <div className="min-vh-100 d-flex align-items-center py-5"
      style={{ background: 'linear-gradient(135deg, #12212E 0%, #307082 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="text-center mb-4 text-white">
              <Link to="/" className="text-white text-decoration-none">
                <h2 className="fw-bold">Trip<span style={{ color: '#EA9940' }}>Nova</span></h2>
              </Link>
              <p className="opacity-75">Sign in to access your travel dashboard</p>
            </div>
            <div className="card shadow-lg rounded-4 p-4">
              <h4 className="fw-bold mb-1">Welcome Back</h4>
              <p className="text-muted small mb-4">Enter your credentials to continue</p>
              {errors.general && (
                <div className="alert alert-danger rounded-3 small">{errors.general}</div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button
                    type="button"
                    className={`btn btn-sm rounded-pill px-4 ${mode === 'signin' ? 'btn-teal' : 'btn-outline-secondary'}`}
                    onClick={() => { setMode('signin'); setErrors({}); setForm({ name: '', email: '', password: '' }); }}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className={`btn btn-sm rounded-pill px-4 ${mode === 'signup' ? 'btn-teal' : 'btn-outline-secondary'}`}
                    onClick={() => { setMode('signup'); setErrors({}); setForm({ name: '', email: '', password: '' }); }}
                  >
                    Sign Up
                  </button>
                </div>
                {mode === 'signup' && (
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-person"></i></span>
                      <input
                        type="text" name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Alex Johnson"
                        value={form.name} onChange={handleChange}
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input
                      type="email" name="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="demo@tripnova.com"
                      value={form.email} onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-semibold">Password</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock"></i></span>
                    <input
                      type={showPass ? 'text' : 'password'} name="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder={mode === 'signup' ? 'Create a password' : 'demo123'}
                      value={form.password} onChange={handleChange}
                    />
                    <button type="button" className="input-group-text" onClick={() => setShowPass(!showPass)}>
                      <i className={`bi bi-eye${showPass ? '-slash' : ''}`}></i>
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </div>
                <button type="submit" className="btn btn-teal w-100 rounded-pill py-2 mb-3" disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className={`bi ${mode === 'signup' ? 'bi-person-plus' : 'bi-box-arrow-in-right'} me-2`}></i>}
                  {loading ? (mode === 'signup' ? 'Creating...' : 'Signing in...') : (mode === 'signup' ? 'Create Account' : 'Sign In')}
                </button>
              </form>
              <div className="text-center">
                <div className="p-3 rounded-3 small" style={{ background: 'var(--bg-cream)' }}>
                  <strong>Demo Credentials:</strong><br />
                  Email: demo@tripnova.com<br />
                  Password: demo123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}