import { Badge } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";

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
        onClick={toggleDrawer(true)}
      >
        <CiHeart className=" btnSearch " />
      </Badge>
      <Drawer open={open} anchor="bottom" onClose={toggleDrawer(false)}>
        <div className="content">hihihi</div>
      </Drawer>
    </>
  );
};

export default LoveProducts;
