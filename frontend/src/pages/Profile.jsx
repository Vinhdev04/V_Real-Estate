// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileHeader from '../features/Profile/components/ProfileHeader';
import ProfileNavTabs from '../features/Profile/components/ProfileNavTabs';
import OverviewTab from '../features/Profile/components/OverviewTab';
import FavoritesTab from '../features/Profile/components/FavoritesTab';
import HistoryTab from '../features/Profile/components/HistoryTab';
import EditProfileTab from '../features/Profile/components/EditProfileTab';
import SettingsPage from '../features/Profile/components/SettingsPage';
import { mockUserData, mockStats, mockProperties, mockViewHistory } from '../features/Profile/services/mockData';
import '../features/Profile/styles/profileBase.css';
import '../features/Profile/styles/profileHeader.css';
import '../features/Profile/styles/profileNav.css';
import '../features/Profile/styles/statsCards.css';
import '../features/Profile/styles/propertyCard.css';
import '../features/Profile/styles/profileTabs.css';
import '../features/Profile/styles/editProfile.css';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(mockUserData);
  const [properties, setProperties] = useState(mockProperties);
  const [viewHistory, setViewHistory] = useState(mockViewHistory);

  // Xác định tab dựa trên URL
  const getTabFromPath = () => {
    const path = location.pathname;
    if (path === '/profile' || path === '/profile/overview') return 'overview';
    if (path === '/profile/favorites') return 'favorites';
    if (path === '/profile/history') return 'history';
    if (path === '/profile/edit') return 'edit';
    if (path === '/profile/settings') return 'settings';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath());

  // Cập nhật tab khi URL thay đổi
  useEffect(() => {
    setActiveTab(getTabFromPath());
  }, [location.pathname]);

  // Hàm thay đổi tab và cập nhật URL
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'overview') {
      navigate('/profile');
    } else {
      navigate(`/profile/${tab}`);
    }
  };

  const handleEditClick = () => {
    handleTabChange('edit');
  };

  const handleSettingsClick = () => {
    handleTabChange('settings');
  };

  const handleSaveProfile = () => {
    console.log('Saving profile:', userData);
    alert('Thông tin đã được lưu thành công!');
    handleTabChange('overview');
  };

  const handleCancelEdit = () => {
    setUserData(mockUserData);
    handleTabChange('overview');
  };

  const handleDeleteFavorite = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa bất động sản này khỏi danh sách yêu thích?')) {
      setProperties(prev => prev.filter(prop => prop.id !== id));
    }
  };

  const handleDeleteHistory = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa mục này khỏi lịch sử?')) {
      setViewHistory(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleClearAllHistory = () => {
    if (window.confirm('Bạn có chắc muốn xóa toàn bộ lịch sử xem?')) {
      setViewHistory([]);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <ProfileHeader 
          userData={userData}
          onEditClick={handleEditClick}
          onSettingsClick={handleSettingsClick}
        />

        <ProfileNavTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {activeTab === 'overview' && (
          <OverviewTab 
            stats={mockStats}
            recentProperties={properties.slice(0, 2)}
          />
        )}

        {activeTab === 'favorites' && (
          <FavoritesTab 
            properties={properties}
            onDelete={handleDeleteFavorite}
          />
        )}

        {activeTab === 'history' && (
          <HistoryTab 
            viewHistory={viewHistory}
            onDelete={handleDeleteHistory}
            onClearAll={handleClearAllHistory}
          />
        )}

        {activeTab === 'edit' && (
          <EditProfileTab 
            userData={userData}
            setUserData={setUserData}
            onSave={handleSaveProfile}
            onCancel={handleCancelEdit}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsPage />
        )}
      </div>
    </div>
  );
};

export default Profile;