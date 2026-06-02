import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/data';
import { aboutTeam } from '../assets/images/index';
export default function About() {
  const values = [
    { icon: 'heart-fill', title: 'Passion', desc: 'We are passionate about travel and creating meaningful experiences.' },
    { icon: 'globe2', title: 'Global Reach', desc: 'Operating in 50+ countries with local expertise everywhere.' },
    { icon: 'people-fill', title: 'Community', desc: 'A community of 50,000+ travelers who trust us.' },
    { icon: 'leaf', title: 'Sustainability', desc: 'Committed to responsible and eco-friendly travel.' },
  ];
  return (
    <>
      <div className="position-relative py-5 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #12212E, #307082)', minHeight: 300, display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <h1 className="fw-bold display-4 mb-3">About TripNova</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: 600 }}>
            We're a team of passionate travelers dedicated to making your dream vacations a reality.
          </p>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <img
                src={aboutTeam}
                alt="Our Team"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6">
              <span className="badge badge-orange text-white px-3 py-2 mb-3">Our Story</span>
              <h2 className="section-title mb-3">Born from a <span>Love of Travel</span></h2>
              <p className="text-muted lh-lg mb-3">
                Founded in 2012, TripNova started as a small travel blog by two friends who wanted to share their adventures with the world. Over the years, we've grown into a full-service travel company serving thousands of travelers annually.
              </p>
              <p className="text-muted lh-lg mb-4">
                Our mission is simple: to make extraordinary travel accessible to everyone. We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.
              </p>
              <div className="row g-3">
                {[['150+', 'Destinations'], ['50K+', 'Happy Clients'], ['12+', 'Years'], ['98%', 'Satisfaction']].map(([val, label]) => (
                  <div key={label} className="col-6">
                    <div className="p-3 rounded-3 text-center" style={{ background: 'var(--bg-cream)' }}>
                      <div className="fw-bold fs-3" style={{ color: '#307082' }}>{val}</div>
                      <div className="text-muted small">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ background: 'var(--primary-dark)', color: '#fff' }}>
                <i className="bi bi-bullseye fs-2 mb-3" style={{ color: '#EA9940' }}></i>
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="opacity-75 lh-lg">
                  To inspire and enable people to explore the world by providing exceptional travel experiences, personalized service, and unbeatable value. We strive to make every journey seamless, memorable, and transformative.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 rounded-4 h-100" style={{ background: 'var(--primary-teal)', color: '#fff' }}>
                <i className="bi bi-eye fs-2 mb-3" style={{ color: '#EA9940' }}></i>
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="opacity-75 lh-lg">
                  To become the world's most trusted travel companion — a platform where every traveler finds their perfect adventure, connects with authentic cultures, and returns home enriched with stories worth telling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our <span>Values</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-4">
            {values.map(v => (
              <div key={v.title} className="col-sm-6 col-lg-3 text-center">
                <div className="p-4 rounded-4 h-100" style={{ background: '#fff' }}>
                  <i className={`bi bi-${v.icon} fs-2 mb-3`} style={{ color: '#307082' }}></i>
                  <h5 className="fw-bold">{v.title}</h5>
                  <p className="text-muted small mb-0">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Meet the <span>Team</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map(member => (
              <div key={member.id} className="col-sm-6 col-lg-3">
                <div className="card text-center p-4 h-100 team-card">
                  <img src={member.image} alt={member.name} className="mx-auto mb-3" />
                  <h5 className="fw-bold mb-1">{member.name}</h5>
                  <p className="small mb-2" style={{ color: '#307082' }}>{member.role}</p>
                  <p className="text-muted small mb-0">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 text-white text-center newsletter-section">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="opacity-75 mb-4">Join thousands of travelers who trust TripNova for their adventures.</p>
          <Link to="/destinations" className="btn btn-orange rounded-pill px-5 py-2 me-3">
            Explore Destinations
          </Link>
          <Link to="/contact" className="btn btn-outline-light rounded-pill px-5 py-2">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}