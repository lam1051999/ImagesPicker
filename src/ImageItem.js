import React, { useState } from "react";

export default function ImageItem({ item, setImagesState }) {
  const [show, setShow] = useState(0);
  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        position: "relative",
        borderRadius: "50px",
        cursor: "pointer",
        overflow: "hidden",
        marginLeft: "10px",
        marginRight: "10px",
      }}
      onClick={() => {
        setShow((prevState) => !prevState);
        setImagesState((prevState) => ({
          ...prevState,
          [`${item.id}`]: !prevState[`${item.id}`],
        }));
      }}
    >
      <img
        src={item.src}
        alt="avatar"
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: 0,
          top: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 100,
          width: "100%",
          height: "100%",
          opacity: show ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
          borderRadius: "50px",
        }}
      >
        {/* thay cái này bằng icon V gì đó */}
        <div style={{ color: "white" }}>V</div>
      </div>
    </div>
  );
}
