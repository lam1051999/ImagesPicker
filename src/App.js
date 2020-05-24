import React, { useState } from "react";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.jpg";
import avatar3 from "./assets/avatar3.png";
import avatar4 from "./assets/avatar4.jpg";
import avatar5 from "./assets/avatar5.jpg";
import avatar6 from "./assets/avatar6.jpg";
import ImageItem from "./ImageItem";

const images = [
  { src: avatar1, id: 0 },
  { src: avatar2, id: 1 },
  { src: avatar3, id: 2 },
  { src: avatar4, id: 3 },
  { src: avatar5, id: 4 },
  { src: avatar6, id: 5 },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div>the id of selected image is {selectedImage}</div>
      <div
        style={{
          display: "flex",
          marginTop: "200px",
          justifyContent: "center",
        }}
      >
        {images.map((item) => (
          <ImageItem
            item={item}
            key={item.id}
            setSelectedImage={setSelectedImage}
            selectedImage={selectedImage}
          />
        ))}
      </div>
    </>
  );
}

export default App;
