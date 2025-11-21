
 import "../styles/profile.css"
 function EditProfile() {
  return (
    <div className="bg-white rounded-4 shadow p-5">
      <h4 className="mb-4">Chỉnh sửa hồ sơ</h4>
      <div className="text-center mb-5">
        <div className="avatar bg-primary text-white fs-1 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width:120,height:120}}>
          NV
        </div>
        <button className="btn btn-outline-primary btn-sm rounded-pill">Tải ảnh lên</button>
      </div>

      <div className="row g-4">
        <div className="col-md-6"><input type="text" className="form-control form-control-lg" defaultValue="Nguyễn Văn A" placeholder="Họ và tên" /></div>
        <div className="col-md-6"><input type="email" className="form-control form-control-lg" defaultValue="pcv.fed@gmail.com" /></div>
        <div className="col-md-6"><input type="text" className="form-control form-control-lg" defaultValue="0123456789" /></div>
        <div className="col-md-6"><input type="date" className="form-control form-control-lg" defaultValue="1990-01-15" /></div>
        <div className="col-md-6">
          <select className="form-select form-select-lg"><option>Nam</option><option>Nữ</option></select>
        </div>
        <div className="col-md-6"><input type="text" className="form-control form-control-lg" defaultValue="Hà Nội, Việt Nam" /></div>
        <div className="col-12">
          <textarea className="form-control" rows="4" placeholder="Giới thiệu bản thân">Tôi đang tìm kiếm căn hộ cao cấp tại khu vực trung tâm thành phố.</textarea>
        </div>
      </div>

      <div className="d-flex gap-3 mt-5">
        <button className="btn btn-primary btn-lg px-5 rounded-pill">Lưu thay đổi</button>
        <button className="btn btn-outline-secondary btn-lg rounded-pill">Hủy</button>
      </div>
    </div>
  );
}

export default EditProfile;