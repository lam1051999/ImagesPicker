import React, { useState } from "react";
import avatar from "./assets/avatar.webp";
import ImageItem from "./ImageItem";

const images = [
  { src: avatar, id: 0 },
  { src: avatar, id: 1 },
  { src: avatar, id: 2 },
  { src: avatar, id: 3 },
  { src: avatar, id: 4 },
  { src: avatar, id: 5 },
  { src: avatar, id: 6 },
];

function App() {
  const [imagesState, setImagesState] = useState(() => {
    const imagesStateObject = images.reduce(
      (accum, item) => ({
        ...accum,
        [`${item.id}`]: false,
      }),
      {}
    );
    return imagesStateObject;
  });
  return (
    <>
      <div>
        The id of selected images are{" "}
        {getShownImagesIndexes(imagesState).map((item) => (
          <span> {item},</span>
        ))}{" "}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "200px",
          justifyContent: "center",
        }}
      >
        {images.map((item) => (
          <ImageItem item={item} setImagesState={setImagesState} />
        ))}
      </div>
    </>
  );
}

export default App;

function getShownImagesIndexes(obj) {
  let keysArr = Object.keys(obj);
  let shownIndexesArr = keysArr.filter((item) => obj[`${item}`]);
  return shownIndexesArr;
}
