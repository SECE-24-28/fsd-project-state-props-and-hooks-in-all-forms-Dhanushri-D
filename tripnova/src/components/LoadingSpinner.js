import React from 'react';
export default function LoadingSpinner() {
  return (
    <div className="spinner-overlay">
      <div className="text-center">
        <div className="spinner-border" style={{ color: '#307082', width: '3rem', height: '3rem' }} role="status"></div>
        <p className="mt-3 fw-semibold" style={{ color: '#307082' }}>Loading...</p>
      </div>
    </div>
  );
}