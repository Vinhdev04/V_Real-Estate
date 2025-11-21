import { User, Edit3, Heart, Clock, Settings, LogOut } from "lucide-react";
import "../styles/profile.css"
export default function Sidebar({ activeTab, setActiveTab }) {
  const menu = [
    { id: "overview", icon: User, label: "Trang cá nhân" },
    { id: "edit", icon: Edit3, label: "Chỉnh sửa hồ sơ" },
    { id: "favorites", icon: Heart, label: "Bất động sản yêu thích" },
    { id: "history", icon: Clock, label: "Lịch sử xem" },
    { id: "settings", icon: Settings, label: "Cài đặt" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-3xl p-4 position-sticky top-4" style={{ height: 'fit-content' }}>
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-100 d-flex align-items-center gap-3 px-4 py-3 rounded-3 mb-2 text-start transition-all ${
            activeTab === item.id
              ? "bg-primary bg-opacity-10 text-primary fw-semibold"
              : "text-dark hover-bg-light"
          }`}
        >
          <item.icon size={22} />
          <span>{item.label}</span>
        </button>
      ))}
      <hr className="my-4" />
      <button className="w-100 d-flex align-items-center gap-3 px-4 py-3 text-danger rounded-3 hover-bg-danger hover-bg-opacity-10">
        <LogOut size={22} />
        <span>Đăng xuất</span>
      </button>
    </div>
  );
}