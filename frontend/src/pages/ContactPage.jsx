import React from 'react';

function ContactPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Liên Hệ Với Chúng Tôi</h1>
      <div className="row">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Tên" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Tin nhắn"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;