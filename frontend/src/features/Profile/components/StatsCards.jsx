// src/features/Profile/components/StatsCards.jsx
import React from 'react';
import { Heart, Eye, Home, MessageSquare } from 'lucide-react';
import '../styles/statsCards.css';

const StatsCards = ({ stats }) => {
  const statsConfig = [
    { key: 'favorites', label: 'Yêu thích', icon: Heart, color: 'red' },
    { key: 'viewed', label: 'Đã xem', icon: Eye, color: 'blue' },
    { key: 'saved', label: 'Đã lưu', icon: Home, color: 'green' },
    { key: 'messages', label: 'Tin nhắn', icon: MessageSquare, color: 'purple' },
  ];

  return (
    <div className="stats-grid">
      {statsConfig.map(stat => {
        const Icon = stat.icon;
        return (
          <div key={stat.key} className="stat-card">
            <div className={`stat-icon ${stat.color}`}>
              <Icon size={24} />
            </div>
            <div className="stat-number">{stats[stat.key]}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;