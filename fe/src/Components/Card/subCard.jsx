import React from "react";

const subCard = ({ imgSend }) => {
  const subImg = [
    "https://bizweb.dktcdn.net/100/520/624/products/4cfd72dd3496e4c8fc321089865c8dc3-fc6c0c62cc97407694f9e1779733e094-4708e838827f483caf158848465c1d33.jpg?v=1720423442500",
    "https://bizweb.dktcdn.net/100/520/624/products/adf9e2b08a5a6215605d38e8d56d8502-b8884d5f0ae8497b8c48fc9be0adf717-51eb4f9b44f344939e2e9d46cb971d3f.jpg?v=1720423442500",
    "https://bizweb.dktcdn.net/100/520/624/products/93e8ecac1ba5ab545446f0081d69ec89-adb49cfd4f934449aee9d661c830b0f0-1e669fbccfa04cf592ee765c987a800f.jpg?v=1720423442500",
    "https://bizweb.dktcdn.net/thumb/large/100/520/624/products/4c3b0df54321e4e9375151e390e815d1.jpg?v=1720423442500",
  ];
  const sendImg = (item) => {
    imgSend(item);
  };
  return (
    <div className="d-flex">
      {subImg.map((item, index) => (
        <img
          src={item}
          key={index}
          alt=""
          className="sub-card-img mx-1"
          onClick={() => sendImg(item)}
        />
      ))}
    </div>
  );
};

export default subCard;
