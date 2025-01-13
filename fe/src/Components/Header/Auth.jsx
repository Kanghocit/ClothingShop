import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";

const Auth = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [select, setSelect] = useState("login");
  const handleSelect = (action) => {
    setSelect(action);
    console.log("selected", select);
  };
  return (
    <>
      <CiUser className="btnSearch" onClick={handleClickOpen} />

      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <div className="container dialog">
          <div className="row">
            <div className="col-3 bdr p-2">
              <div className="logo2 text-center">
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/520/624/themes/974135/assets/shop_logo_image.png?1731543625371"
                  alt="logo"
                  className="logoImage"
                />
              </div>
              <div
                className={`btn btnAuth pt-3 ${
                  select === "login" ? "selected" : ""
                }`}
                onClick={() => handleSelect("login")}
              >
                Đăng nhập
              </div>
              <div
                className={`btn btnAuth pt-3 ${
                  select === "forgot" ? "selected" : ""
                }`}
                onClick={() => handleSelect("forgot")}
              >
                Quên mật khẩu
              </div>
              <div
                className={`btn btnAuth pt-3 ${
                  select === "register" ? "selected" : ""
                }`}
                onClick={() => handleSelect("register")}
              >
                Đăng ký
              </div>
            </div>
            <div className="col-9">
              {select === "login" && <Login />}
              {select === "register" && <Register />}
              {select === "forgot" && <ForgotPassword />}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Auth;
