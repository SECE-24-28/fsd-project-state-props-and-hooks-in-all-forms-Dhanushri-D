import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';
import { destinations, packages } from '../data/data';
import { heroBg } from '../assets/images/index';
export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };
  const stats = [
    { icon: 'globe2', value: '150+', label: 'Destinations' },
    { icon: 'people-fill', value: '50K+', label: 'Happy Travelers' },
    { icon: 'award', value: '12+', label: 'Years Experience' },
    { icon: 'star-fill', value: '4.9', label: 'Average Rating' },
  ];
  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{ '--hero-bg-url': `url('${heroBg}')` }}>
        <div className="container hero-content text-white text-center py-5">
          <div className="fade-in-up">
            <span className="badge badge-orange px-3 py-2 mb-3 rounded-pill fs-6">
              <i className="bi bi-airplane me-2"></i>Discover the World
            </span>
            <h1 className="display-3 fw-bold mb-3">
              Your Next Adventure<br />
              <span style={{ color: '#EA9940' }}>Starts Here</span>
            </h1>
            <p className="lead mb-5 opacity-75 mx-auto" style={{ maxWidth: 560 }}>
              Explore breathtaking destinations, curated packages, and unforgettable experiences tailored just for you.
            </p>
            <div className="mx-auto" style={{ maxWidth: 560 }}>
              <SearchBar large />
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {['Beach', 'Adventure', 'Culture', 'City'].map(cat => (
                <Link key={cat} to={`/destinations?category=${cat}`}
                  className="btn btn-outline-light btn-sm rounded-pill px-3">
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-4" style={{ background: 'var(--primary-dark)' }}>
        <div className="container">
          <div className="row g-3 text-center text-white">
            {stats.map(s => (
              <div key={s.label} className="col-6 col-md-3">
                <i className={`bi bi-${s.icon} fs-3 mb-1`} style={{ color: '#EA9940' }}></i>
                <div className="fw-bold fs-4">{s.value}</div>
                <div className="small opacity-75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured <span>Destinations</span></h2>
            <div className="section-divider"></div>
            <p className="text-muted">Handpicked destinations for your dream vacation</p>
          </div>
          <div className="row g-4">
            {destinations.slice(0, 4).map(dest => (
              <div key={dest.id} className="col-sm-6 col-lg-3">
                <DestinationCard dest={dest} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/destinations" className="btn btn-outline-teal rounded-pill px-5">
              View All Destinations <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose <span>TripNova</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-4 text-center">
            {[
              { icon: 'shield-check', title: 'Safe & Secure', desc: 'All bookings are protected with our secure payment system.' },
              { icon: 'headset', title: '24/7 Support', desc: 'Our travel experts are available around the clock.' },
              { icon: 'currency-dollar', title: 'Best Price', desc: 'We guarantee the best prices for all our packages.' },
              { icon: 'map', title: 'Expert Guides', desc: 'Local guides who know every hidden gem.' },
            ].map(f => (
              <div key={f.title} className="col-sm-6 col-lg-3">
                <div className="p-4 rounded-4 h-100" style={{ background: 'var(--bg-cream)' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: 64, height: 64, background: 'var(--primary-teal)' }}>
                    <i className={`bi bi-${f.icon} fs-4 text-white`}></i>
                  </div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="text-muted small mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Popular <span>Packages</span></h2>
            <div className="section-divider"></div>
            <p className="text-muted">All-inclusive travel packages for every budget</p>
          </div>
          <div className="row g-4">
            {packages.slice(0, 3).map(pkg => (
              <div key={pkg.id} className="col-md-4">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/packages" className="btn btn-outline-teal rounded-pill px-5">
              View All Packages <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="newsletter-section py-5 text-white">
        <div className="container text-center">
          <i className="bi bi-envelope-heart fs-1 mb-3" style={{ color: '#EA9940' }}></i>
          <h2 className="fw-bold mb-2">Get Travel Inspiration</h2>
          <p className="opacity-75 mb-4">Subscribe to our newsletter for exclusive deals and travel tips.</p>
          {subscribed ? (
            <div className="alert alert-success d-inline-block rounded-pill px-4">
              <i className="bi bi-check-circle me-2"></i>Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="d-flex justify-content-center gap-2 flex-wrap">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ maxWidth: 340 }}
              />
              <button type="submit" className="btn btn-orange rounded-pill px-4">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}