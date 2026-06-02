import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchBar({ large = false }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/destinations?search=${encodeURIComponent(query.trim())}`);
  };
  if (large) {
    return (
      <form onSubmit={handleSearch} className="search-hero d-flex align-items-center">
        <i className="bi bi-search fs-5 me-2 text-muted"></i>
        <input
          type="text"
          className="form-control border-0 shadow-none bg-transparent"
          placeholder="Search destinations, countries..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ minWidth: 0 }}
        />
        <button type="submit" className="btn btn-orange rounded-pill px-4 py-2 ms-2 flex-shrink-0">
          Search
        </button>
      </form>
    );
  }
  return (
    <form onSubmit={handleSearch} className="d-flex gap-2">
      <input
        type="text"
        className="form-control rounded-pill"
        placeholder="Search destinations..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-teal rounded-pill px-3">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
