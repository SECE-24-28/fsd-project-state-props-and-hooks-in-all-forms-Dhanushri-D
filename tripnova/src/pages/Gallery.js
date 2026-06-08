import React, { useState } from 'react';
import { galleryImages } from '../data/data'
const CATEGORIES = ['All', 'Beach', 'Adventure', 'Culture', 'City', 'Nature'];
export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const filtered = category === 'All' ? galleryImages : galleryImages.filter(img => img.category === category);
  return (
    <>
      <div className="py-5 text-white text-center" style={{ background: 'linear-gradient(135deg, #12212E, #307082)' }}>
        <h1 className="fw-bold display-5">Travel Gallery</h1>
        <p className="opacity-75">A visual journey through the world's most stunning destinations</p>
      </div>
      <div className="container py-5">
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`btn rounded-pill px-4 ${category === cat ? 'btn-teal' : 'btn-outline-secondary'}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="row g-3">
          {filtered.map((img, idx) => (
            <div key={img.id} className={`col-6 col-md-4 ${idx % 5 === 0 ? 'col-lg-6' : 'col-lg-3'}`}>
              <div className="gallery-item" onClick={() => setLightbox(img)}>
                <img src={img.url} alt={img.caption} />
                <div className="p-2 bg-white">
                  <small className="text-muted fw-semibold">{img.caption}</small>
                  <span className="badge badge-teal text-white ms-2 small">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="text-center" onClick={e => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.caption} />
            <div className="text-white mt-3">
              <h5>{lightbox.caption}</h5>
              <span className="badge badge-teal">{lightbox.category}</span>
            </div>
            <button className="btn btn-light rounded-pill mt-3 px-4" onClick={() => setLightbox(null)}>
              <i className="bi bi-x-lg me-2"></i>Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}