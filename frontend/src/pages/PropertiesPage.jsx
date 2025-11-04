
// pages/PropertiesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PropertiesPage() {
  const navigate = useNavigate();

  const properties = [
    { id: 1, name: 'Biệt Thự Thảo Điền', price: '15 Tỷ' },
    { id: 2, name: 'Căn Hộ Cao Cấp Q1', price: '5 Tỷ' },
    { id: 3, name: 'Nhà Phố Bình Thạnh', price: '8 Tỷ' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Danh Sách Bất Động Sản</h1>
      <div className="row g-4">
        {properties.map(property => (
          <div key={property.id} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="text-primary fw-bold fs-5">{property.price}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => navigate(`/properties/${property.id}`)}
                >
                  Xem Chi Tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertiesPage;