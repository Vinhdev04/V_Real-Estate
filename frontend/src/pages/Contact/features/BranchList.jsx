// src/components/BranchList.jsx
import BranchCard from './BranchCard';
import '../styles/BranchList.css';
import img_01 from "../../../assets/images/head-offiece-01.jpg"
import img_02 from "../../../assets/images/head-offiece-02.jpg"
const branches = [
  {
    id: 1,
    district: 'Quận 1',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    phone: '0123 456 789',
    email: 'q1@realestate.com',
    image: img_01
  },
  {
    id: 2,
    district: 'Quận 7',
    address: '456 Nguyễn Thị Thập, Quận 7, TP.HCM',
    phone: '0123 456 790',
    email: 'q7@realestate.com',
    image: img_02
  },
  {
    id: 3,
    district: 'Thủ Đức',
    address: '789 Võ Văn Ngân, TP. Thủ Đức, TP.HCM',
    phone: '0123 456 791',
    email: 'thuduc@realestate.com',
    image: img_01
  },
];
function BranchList() {
  return (
    <section className="branch-section">
      <div className="container">
        <h2 className="section-title">Hệ Thống Chi Nhánh</h2>
        <p className="section-subtitle">
          Chúng tôi có mặt tại nhiều khu vực để phục vụ bạn tốt nhất
        </p>
        <div className="branch-grid">
          {branches.map((branch) => (
            <BranchCard key={branch.id} {...branch} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BranchList;