// src/pages/Profile.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { menuItems, renderContent } from "../services/handlePage";
import "../styles/profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");


  // Sync activeTab với URL
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/edit")) setActiveTab("edit");
    else if (path.includes("/favorites")) setActiveTab("favorites");
    else if (path.includes("/history")) setActiveTab("history");
    else if (path.includes("/settings")) setActiveTab("settings");
    else setActiveTab("overview");
  }, [location]);



 const handleTabChange = (tab) => {
    setActiveTab(tab);
    const routes = {
      overview: "/profile",
      edit: "/profile/edit",
      favorites: "/profile/favorites",
      history: "/profile/history",
      settings: "/profile/settings",
    };
    navigate(routes[tab]);
  };

  // Logout handler
 const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };


  return (
    <div className="profile-page">
      <div className="profile-page__container container">
        {/* Mobile & Desktop Tabs */}
        <div className="profile-mobile-tabs">
          <div className="profile-mobile-tabs__scroll">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`profile-mobile-tabs__item ${
                  activeTab === item.id ? "profile-mobile-tabs__item--active" : ""
                }`}
              >
                <span className="profile-mobile-tabs__icon">{item.icon}</span>
                <span className="profile-mobile-tabs__label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {  renderContent(activeTab)}
        </div>
      </div>

      {/* Mobile Logout Button */}
      <div className="d-lg-none profile-mobile-logout">
        <button onClick={handleLogout} className="profile-mobile-logout__btn">
          <span>🚪</span>
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
}
