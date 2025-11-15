// src/features/Profile/components/HistoryTab.jsx
import React, { useState } from 'react';
import { Clock, Trash2 } from 'lucide-react';
import HistoryCard from './HistoryCard';
import '../styles/profileTabs.css';

const HistoryTab = ({ viewHistory, onDelete, onClearAll }) => {
  const [timeFilter, setTimeFilter] = useState('all');

  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Lịch sử xem ({viewHistory.length})</h2>
        <div className="filters">
          <select 
            className="filter-select"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="all">Tất cả thời gian</option>
            <option value="today">Hôm nay</option>
            <option value="week">7 ngày qua</option>
            <option value="month">30 ngày qua</option>
          </select>
          <button 
            className="btn btn-secondary btn-small"
            onClick={onClearAll}
          >
            <Trash2 size={16} />
            Xóa tất cả
          </button>
        </div>
      </div>
      {viewHistory.length > 0 ? (
        <div className="property-grid">
          {viewHistory.map(property => (
            <HistoryCard 
              key={property.id} 
              property={property}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Clock size={64} />
          <h3>Chưa có lịch sử xem</h3>
          <p>Bắt đầu khám phá các bất động sản</p>
        </div>
      )}
    </div>
  );
};

export default HistoryTab;