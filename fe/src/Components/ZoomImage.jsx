import React from "react";
import "../App.css";

const ZoomImage = ({ src, layer, content }) => {
  console.log("content:", content);

  return (
    <div className="zoom-container">
      {layer ? (
        <>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <div key={index} className="zoom-layer">
                <img className="zoom-image h-100" src={src} alt="Zoom" />
                <div className="layer-content">
                  <h3>{item.header}</h3>
                  <hr className="w-25" />
                  <span>{item.sub}</span>
                </div>
              </div>
            ))
          ) : (
            <>
              <img className="zoom-image h-100" src={src} alt="Zoom" />
              <div className="zoom-layer">
                <div className="layer-content">
                  <h3>{content?.header}</h3>
                  <hr className="w-25" />
                  <span>{content?.sub}</span>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <img className="zoom-image h-100" src={src} alt="Zoom" />
      )}
    </div>
  );
};

export default ZoomImage;
