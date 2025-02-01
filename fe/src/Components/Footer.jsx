import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container-fluid mt-5">
      <div className="container py-5">
        <div className="footer-content">
          <h3>Nhận ưu đãi và coupon mới nhất</h3>
          <p>Chúng tôi cam kết bảo mật không lộ thông tin của bạn</p>
          <div className="footer-register row">
            <input
              type="text"
              placeholder="Nhập địa chỉ email của bạn"
              className="col-8 col-md-9"
            />
            <button className="btn col-4 col-md-3">Đăng ký</button>
          </div>
          <p>Nhận ngay coupon giảm 15% khi đăng ký ngay</p>

          <div className="row">
            {/* Cột 1: Logo và thông tin công ty */}
            <div className="col-12 col-md-3 mb-4">
              <img
                src="https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/footers2_one_logo.png?1731543625371"
                className="mb-2 footer-logo"
                alt="Logo"
              />
              <p>
                F1GENZ luôn cam kết, đảm bảo bàn giao sản phẩm đạt chất lượng
                tối ưu nhất đến tay người dùng.
              </p>
              <p>
                Mã số thuế: 01234567891 do Sở Kế hoạch và Đầu tư Tp Hà Nội cấp
                ngày 13/02/2024
              </p>
              <div>
                <Link to={"/"}>
                  F1GENZ Model Fashion266 Đội Cấn, P. Liễu Giai, Q. Ba Đình, TP
                  Hà Nội
                </Link>
              </div>
              <div>
                <Link to={"/"}>ankhangit06@gmail.com</Link>
              </div>
              <div>
                <Link to={"/"}>0332 653 96*</Link>
              </div>
            </div>

            {/* Cột 2: Liên hệ */}
            <div className="col-12 col-md-3 mb-4">
              <h3>Liên hệ</h3>
              <p>
                Tư vấn dịch vụ: <span>1800 1805</span>
              </p>
              <p>
                Hỗ trợ sử dụng: <span>1900 1805</span>
              </p>
              <p>
                Hỗ trợ vận chuyển: <span>1900 1805</span>
              </p>
              <p>
                Email: <span>khang@gmail.com</span>
              </p>
              <p>Từ 7h00 – 22h00 các ngày từ thứ 2 đến Chủ nhật</p>
            </div>

            {/* Cột 3: Về chúng tôi */}
            <div className="col-12 col-md-2 mb-4">
              <h3>Về chúng tôi</h3>
              <p>
                <Link to={"/"}>Giới thiệu</Link>
              </p>
              <p>
                <Link to={"/"}>Chính sách bảo mật</Link>
              </p>
              <p>
                <Link to={"/"}>Chính sách đổi trả</Link>
              </p>
              <p>
                <Link to={"/"}>Điều khoản dịch vụ</Link>
              </p>
              <p>
                <Link to={"/"}>Trang chủ</Link>
              </p>
            </div>

            {/* Cột 4: Danh mục */}
            <div className="col-12 col-md-2 mb-4">
              <h3>Danh mục</h3>
              <p>
                <Link to={"/"}>Cocktail Dresses</Link>
              </p>
              <p>
                <Link to={"/"}>Casual Shirts</Link>
              </p>
              <p>
                <Link to={"/"}>Formal Pants</Link>
              </p>
              <p>
                <Link to={"/"}>Casual Jumpsuits</Link>
              </p>
              <p>
                <Link to={"/"}>Knitted Sweaters</Link>
              </p>
            </div>

            {/* Cột 5: Liên hệ với chúng tôi */}
            <div className="col-12 col-md-2 mb-4">
              <h3>Liên hệ với chúng tôi</h3>
              <p>
                Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất
                cả khách hàng của mình.
              </p>
              <div className="row footer-connect">
                {[
                  "https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png",
                  "https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png",
                  "https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png",
                  "https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png",
                  "https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png",
                ].map((icon, index) => (
                  <div className="col-2" key={index}>
                    <img src={icon} alt={`Icon ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="pt-2" />
          <p>
            © 2025 - Bản quyền thuộc về Bùi An Khang. Cung cấp bởi Bùi An Khang
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;