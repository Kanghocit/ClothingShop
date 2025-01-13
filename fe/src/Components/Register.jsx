import React from "react";

const Register = () => {
  return (
    <>
      <div className="nameAuth pt-2">Đăng Ký</div>
      <div className="text pt-2">Họ của bạn*</div>
      <div className="pt-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="text pt-2">Tên của bạn*</div>
      <div className="pt-2">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="text pt-2">Số điện thoại*</div>
      <div className="pt-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="text pt-2">Email*</div>
      <div className="pt-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="text pt-2">Mật khẩu*</div>
      <div className="px-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="btn btnAuth text-center col-12 pt-2 my-1">Đăng Ký</div>
      
    </>
  );
};

export default Register;
