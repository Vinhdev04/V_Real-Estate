
// pages/PropertyDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <button 
        className="mb-4 btn btn-secondary"
        onClick={() => navigate('/properties')}
      >
        ← Quay Lại
      </button>
      
      <h1 className="mb-4">Chi Tiết Bất Động Sản {id}</h1>
      <div className="row">
        <div className="col-lg-8">
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Property" 
            className="mb-4 rounded img-fluid"
          />
          <h3 className="mb-3">Mô Tả</h3>
          <p>Đây là một bất động sản tuyệt vời tại vị trí đắc địa...</p>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thông Tin</h5>
              <p><strong>Giá:</strong> 15 Tỷ VND</p>
              <p><strong>Diện tích:</strong> 200 m²</p>
              <p><strong>Phòng ngủ:</strong> 3</p>
              <button className="btn btn-primary w-100">Liên Hệ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailPage;
