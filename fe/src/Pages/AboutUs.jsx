import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about row container-fluid m-5">
      <div className="col-7">
        <div className="aboutHeader row ">
          <Link to={"/"} className="aboutLink col-3">
            Về chúng tôi
          </Link>
          <div className="col-2 d-flex align-items-center justify-content-center">
            <hr className="w-75" />
          </div>
          <div className="subAbout">Artisanal Nomad</div>
        </div>
        <div className="aboutContent">
          <p>
            Chủ đề này khám phá các loại vải sáng tạo, thiết kế tương lai và
            kiểu dáng đẹp mắt lấy cảm hứng từ thời đại kỹ thuật số. Quần áo kết
            hợp các yếu tố công nghệ có thể mặc, điểm nhấn sáng và tính thẩm mỹ
            hiện đại, phản ánh sự kết hợp giữa phong cách và chức năng dành cho
            tín đồ thời trang am hiểu công nghệ.
            <br />
            <br />
            Chủ đề này trưng bày các kết cấu phong phú, các chi tiết trang trí
            xa hoa và bảng màu lấy cảm hứng từ đồ trang sức hoàng gia. Những
            hình bóng toát lên sự tinh tế đồng thời kết hợp các họa tiết ma
            thuật, đưa người mặc đến một thế giới hùng vĩ và quyến rũ.
          </p>
        </div>
        <div className="btn btnAbout mx-2 ms-0">Men <IoBagOutline  className="btnSearch" /></div>
        <div className="btn btnAbout mx-2">Women <IoBagOutline className="btnSearch" /></div>
      </div>

      <img
        src="https://bizweb.dktcdn.net/thumb/grande/100/520/624/themes/974135/assets/home_about_image.jpg?1731543625371"
        className="col-5 aboutImg"
      />
    </div>
  );
};

export default AboutUs;
