import React from "react";

const Login = () => {
  return (
    <>
      <div className="nameAuth pt-2">Đăng Nhập</div>
      <div className="text pt-2">Email*</div>
      <div className="pt-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="text pt-2">Email*</div>
      <div className="py-1">
        <input type="text" className="col-12 pt-2" />
      </div>
      <div className="btn btnAuth text-center col-12  pt-2">Đăng nhập</div>
      <div className="row pt-2">
        <div className="col-4">Hoặc đăng nhập bằng</div>
        <div className="col-2 btn ">Facebook</div>
        <div className="col-2 btn ">Google</div>
      </div>
    </>
  );
};

export default Login;
