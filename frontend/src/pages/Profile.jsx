import { useState } from "react";
import Sidebar from "../features/Profile/components/Sidebar";
import ProfileOverview from "../features/Profile/components/ProfileOverview";
import EditProfile from "../features/Profile/components/EditProfile";
import Favorites from "../features/Profile/components/Favorites";
import ViewHistory from "../features/Profile/components/ViewHistory";
import Settings from "../features/Profile/components/Settings";
import AccountActions from "../features/Profile/components/AccountActions";

export default function Profile() {
 const [activeTab, setActiveTab] = useState("overview");

  const renderTab = () => {
    switch (activeTab) {
      case "overview": return <ProfileOverview />;
      case "edit": return (
        <>
          <EditProfile />
          <AccountActions />
        </>
      );
      case "favorites": return <Favorites />;
      case "history": return <ViewHistory />;
      case "settings": return <Settings />;
      default: return <ProfileOverview />;
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Sidebar */}
        <div className="col-lg-3">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Content */}
        <div className="col-lg-9">
          <div className="animate__animated animate__fadeIn">
            {renderTab()}
          </div>
        </div>
      </div>
    </div>
  );
}