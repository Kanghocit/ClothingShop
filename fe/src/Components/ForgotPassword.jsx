import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="nameAuth pt-2">Quên mật khẩu</div>
      <div className="text pt-2">Email*</div>
      <div className="pt-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="btn btnAuth text-center mt-2 col-12  pt-2">Gửi</div>
    </>
  );
};

export default ForgotPassword;
