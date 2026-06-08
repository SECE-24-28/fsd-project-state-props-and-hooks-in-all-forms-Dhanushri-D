import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';
import { destinations } from '../data/data';
const CATEGORIES = ['All', 'Beach', 'Adventure', 'Culture', 'City'];
export default function Destinations() {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const cat = searchParams.get('category');
    const q = searchParams.get('search');
    if (cat) setCategory(cat);
    if (q) setSearch(q);
  }, [searchParams]);
  const filtered = destinations.filter(d => {
    const matchCat = category === 'All' || d.category === category;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  return (
    <>
      <div className="py-5 text-white text-center" style={{ background: 'linear-gradient(135deg, #12212E, #307082)' }}>
        <h1 className="fw-bold display-5">Explore Destinations</h1>
        <p className="opacity-75">Find your perfect getaway from our curated collection</p>
      </div>
      <div className="container py-5">
        <div className="filter-bar mb-4">
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <SearchBar />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
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
          </div>
        </div>
        <p className="text-muted mb-3">{filtered.length} destination{filtered.length !== 1 ? 's' : ''} found</p>
        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1 text-muted"></i>
            <p className="mt-3 text-muted">No destinations found. Try a different search.</p>
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map(dest => (
              <div key={dest.id} className="col-sm-6 col-lg-3">
                <DestinationCard dest={dest} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}