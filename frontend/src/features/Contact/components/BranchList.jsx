// src/components/BranchList.jsx
import BranchCard from './BranchCard';
import '../styles/BranchList.css';
import {branches} from "../services/constants";

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