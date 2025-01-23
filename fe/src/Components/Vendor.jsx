import homeVendorImage1 from "../assets/images/home_vendor_image__1.png";
import homeVendorImage2 from "../assets/images/home_vendor_image__2.png";
import homeVendorImage3 from "../assets/images/home_vendor_image__3.png";
import homeVendorImage4 from "../assets/images/home_vendor_image__4.png";
import homeVendorImage5 from "../assets/images/home_vendor_image__5.png";
import homeVendorImage6 from "../assets/images/home_vendor_image__6.png";
import ZoomImage from "./ZoomImage";

const Vendor = () => {
  const logo = [
    { name: "ssense", img: homeVendorImage1 },
    { name: "burberry", img: homeVendorImage2 },
    { name: "nike", img: homeVendorImage3 },
    { name: "asos", img: homeVendorImage4 },
    { name: "pull", img: homeVendorImage5 },
    { name: "gildan", img: homeVendorImage6 },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <div className="vender">
            <img
              src="https://f599a506.delivery.rocketcdn.me/wp_contents/uploads/2019/08/fashion.jpg"
              className="vender-img w-100"
            />
            <div className="vender-content text-center mt-3">
              <h3>Thương hiệu</h3>
              <hr className="w-50 mx-auto border-3" />
              <span>Các thương hiệu tin dùng của chúng tôi</span>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="row row-cols-3 g-4">
            {logo.map((item, index) => (
              <div key={index} className="col text-center">
                <ZoomImage src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
