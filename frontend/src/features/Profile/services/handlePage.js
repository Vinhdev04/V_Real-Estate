import ProfileOverview from "../components/ProfileOverview";
import EditProfile from "../components/EditProfile";
import Favorites from "../components/Favorites";
import ViewHistory from "../components/ViewHistory";
import Settings from "../components/Settings";
import AccountActions from "../components/AccountActions";
import { useState, useEffect } from "react";

  // Menu items
  export const menuItems = [
    { id: "overview", icon: "👤", label: "Trang cá nhân" },
    { id: "edit", icon: "✏️", label: "Chỉnh sửa" },
    { id: "favorites", icon: "❤️", label: "Yêu thích" },
    { id: "history", icon: "🕐", label: "Lịch sử" },
    { id: "settings", icon: "⚙️", label: "Cài đặt" },
  ];

  // Render content based on activeTab
  export const renderContent = (activeTab) => {
    switch (activeTab) {
      case "overview":
        return <ProfileOverview />;
      case "edit":
        return (
          <>
            <EditProfile />
            <AccountActions />
          </>
        );
      case "favorites":
        return <Favorites />;
      case "history":
        return <ViewHistory />;
      case "settings":
        return <Settings />;
      default:
        return <ProfileOverview />;
    }
  };

