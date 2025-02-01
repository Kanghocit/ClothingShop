import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="bottom-header container-fluid text-center pt-2">
      <ul className="list list-inline ml-auto">
        <li className="list list-inline-item px-2">
          <Link to={"/"}>Trang chủ</Link>
        </li>
        <li className="list list-inline-item px-2 position-relative dropdown-parent">
          <Link to={"/"}>
            Danh mục sản phẩm <FaAngleRight size={"12px"} />
          </Link>
          {/* Dropdown Menu */}
          <div className="dropContainer"></div>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <a href="/collections">Dresses</a>
            </li>
            <li className="dropdown-item">
              <a href="/collections">Jumpsuits</a>
            </li>
            <li className="dropdown-item">
              <a href="/collections">Pants</a>
            </li>
            <li className="dropdown-item">
              <a href="/collections">Sweaters</a>
            </li>
          </ul>
        </li>

        <li className="list list-inline-item px-2 position-relative dropdown-parent">
          <Link to={"/"}>
            Sản phẩm nổi bật <FaAngleRight size={"12px"} />
          </Link>
          {/* Dropdown Menu */}
          <div className="dropContainer"></div>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to={"/danh-muc-1"}>Sản phẩm nổi bật 1</Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/danh-muc-2"}>Sản phẩm nổi bật 2</Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/danh-muc-3"}>Sản phẩm nổi bật 3</Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/danh-muc-4"}>Sản phẩm nổi bật 4</Link>
            </li>
          </ul>
        </li>
        <li className="list list-inline-item px-2">
          <Link to={"/"}>Xu hướng thời trang</Link>
        </li>
        <li className="list list-inline-item px-2">
          <Link to={"/"}>Liên hệ</Link>
        </li>
      </ul>

      {/* CSS */}
    </div>
  );
};

export default HeaderMenu;
