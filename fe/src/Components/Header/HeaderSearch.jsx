import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const HeaderSearch = () => {
  const [placeholder, setPlaceholder] = useState("");
  const texts = ["Tìm kiếm sản phẩm...", "Nhập tên sản phẩm....", "Bạn cần tìm gì...?"];
  let currentTextIndex = 0;
  let index = 0;
  let forward = true;

  useEffect(() => {
    // Hàm setInterval để cập nhật placeholder theo chiều đi và ngược lại
    const typingEffect = setInterval(() => {
      const currentText = texts[currentTextIndex]; 

      if (forward) {
        // Đi lên
        setPlaceholder((prev) => currentText.slice(0, index + 1));
        index++;
        if (index === currentText.length) {
          forward = false; 
        }
      } else {
        // Đi ngược lại
        setPlaceholder((prev) => currentText.slice(0, index));
        index--;
        if (index === 0) {
          forward = true; // Quay về đầu
          currentTextIndex++; // Chuyển qua từ tiếp theo
          if (currentTextIndex === texts.length) {
            currentTextIndex = 0; // Nếu hết chuỗi, lặp lại
          }
        }
      }
    }, 100); 
    // Dọn dẹp interval khi component unmount
    return () => clearInterval(typingEffect);
  }, []); 

  return (
    <div className="headerSearch top-left col-sm-4 pt-3 px-5 ">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
      />
      <button className="btn btnSearch">
        <CiSearch />
      </button>
    </div>
  );
};

export default HeaderSearch;
