import { Badge, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const LoveProducts = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Badge
        badgeContent={4}
        color="primary"
        className="badgeColor mx-2"
        onClick={toggleDrawer(true)} // Mở Drawer khi click vào Badge
      >
        <CiHeart className="btnSearch" />
      </Badge>

      <Drawer open={open} anchor="bottom" onClose={toggleDrawer(false)}>
        <div className="content">
          <div className="nameLoveText row">
            <div className="col-11">Danh mục sản phẩm yêu thích</div>

            {/* Đóng Drawer */}

            <IoClose
              className="closeButton col-1 text-end"
              onClick={toggleDrawer(false)}
            />
          </div>

          <div className="productsLove text-center p-5">
            Chưa có sản phẩm nào trong danh sách
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LoveProducts;
