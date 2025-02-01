import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const Choice = () => {
  const choice = [
    {
      name: "Thương hiệu sản phẩm",
      options: ["CHACOAL", "GRAY", "RIBBON", "ROSY"],
    },
    { name: "Loại sản phẩm", options: ["Áo", "Đầm", "Váy"] },
    {
      name: "Kích thước",
      options: ["33x40cm", "40x30cm", "100x30cm", "50x30cm"],
    },
    {
      name: "Màu sắc",
      options: ["Xanh", "Đỏ", "Đen", "Hồng", "Vàng"],
    },
    {
      name: "Giá sản phẩm",
      options: [
        "Dưới 1.000.000₫",
        "Từ 1.000.000₫ - 3.000.000₫",
        "Từ 3.000.000₫ - 5.000.000₫",
        "Từ 5.000.000₫ - 10.000.000₫",
        "Trên 10.000.000₫",
      ],
    },
  ];
  return (
    <>
      {choice.map((item, index) => (
        <>
          <div className="brand" key={index}>
            <div className="fw-bold my-2">{item.name}</div>
            {item.options.map((option, index) => (
              <div className="choice">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={option}
                  key={index}
                  sx={{
                    ".MuiFormControlLabel-label": {
                      fontSize: "12px", // Adjust font size
                    },
                  }}
                />
              </div>
            ))}
          </div>
          <hr className="w-75" />
        </>
      ))}
    </>
  );
};

export default Choice;
