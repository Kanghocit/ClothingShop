import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container-fluid mt-5">
      <div className="container py-5">
        <h3>Nhận ưu đãi và coupon mới nhất</h3>
        <p>Chúng tôi cam kết bảo mật không lộ thông tin của bạn</p>
        <div className="footer-register row">
          <input
            type="text"
            placeholder="Nhập địa chỉ email của bạn"
            className="col-10"
          />
          <button className="btn col-2">Đăng ký</button>
        </div>
        <p>Nhận ngay coupon giảm 15% khi đăng ký ngay</p>

        <div className="footer-content row">
          <div className="col-3">
            <img
              src="https://bizweb.dktcdn.net/100/520/624/themes/974135/assets/footers2_one_logo.png?1731543625371"
              alt=""
            />
            <p>
              F1GENZ luôn cam kết, đảm bảo bàn giao sản phẩm đạt chất lượng tối
              ưu nhất đến tay người dùng.
            </p>
            <p>
              Mã số thuế: 01234567891 do Sở Kế hoạch và Đầu tư Tp Hà Nội cấp
              ngày 13/02/2024
            </p>
            <div>
              <Link to={"/"}>
                F1GENZ Model Fashion266 Đội Cấn, P. Liễu Giai, Q. Ba Đình, TP Hà
                Nội
              </Link>
            </div>
            <div>
              <Link to={"/"}>ankhangit06@gmail.com</Link>
            </div>
            <div>
              <Link to={"/"}>0332 653 96*</Link>
            </div>
          </div>
          <div className="col-2">
            <h3>Liên hệ</h3>
            <p>Tư vấn dịch vụ: 1800 1805</p>
            <p>Hỗ trợ sử dụng: 1900 1805</p>
            <p>Hỗ trợ vận chuyển: 1900 1805</p>
            <p>Email: khang@gmail.com</p>
            <p>Từ 7h00 – 22h00 các ngày từ thứ 2 đến Chủ nhật</p>
          </div>
          <div className="col-2">
            <h3>Về chúng tôi</h3>
            <p><Link to={'/'}>Giới thiệu</Link></p>
            <p><Link to={'/'}>Chính sách bảo mật</Link></p>
            <p><Link to={'/'}>Chính sách đổi trả</Link></p>
            <p><Link to={'/'}>Điều khoản dịch vụ</Link></p>
            <p><Link to={'/'}>Trang chủ</Link></p>
          </div>
          <div className="col-2">
            <h3>Danh mục</h3>
            <p><Link to={'/'}>Cocktail Dresses</Link></p>
            <p><Link to={'/'}>Casual Shirts</Link></p>
            <p><Link to={'/'}>Formal Pants</Link></p>
            <p><Link to={'/'}>Casual Jumpsuits</Link></p>
            <p><Link to={'/'}>Knitted Sweaters</Link></p>
          </div>
          <div className="col-3">
            <h3>Liên hệ với chúng tôi</h3>
            <p>Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất cả khách hàng của mình.</p>
            <div className="row footer-connect">
              <div className="col-2"><img src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png" alt="" /></div>
              <div className="col-2"><img src="https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png" alt="" /></div>
              <div className="col-2"><img src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png" alt="" /></div>
              <div className="col-2"><img src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png" alt="" /></div>
              <div className="col-2"><img src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png" alt="" /></div>
            </div>
          </div>
        </div>
        <hr />
        <p>© 2025 - Bản quyền thuộc về Bùi An Khang. Cung cấp bởi Bùi An Khang</p>
      </div>
    </div>
  );
};

export default Footer;
