import { useState } from "react";

export default function Carousel(props) {
  const imagesArray = [
    "https://primefaces.org/cdn/primereact/images/product/black-watch.jpg",
    "https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg",
    "https://primefaces.org/cdn/primereact/images/product/blue-band.jpg",
  ];

  // useState(
  //   "https://primefaces.org/cdn/primereact/images/product/black-watch.jpg"
  // );
  // const [imageUrl, setImageUrl] = useState(imagesArray[0]);
  // setImageUrl(imagesArray[imagesArray.findIndex(()=>{}) + 1])

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  // setCurrentImgIndex(currentImgIndex + 1);

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => {
          setCurrentImgIndex(currentImgIndex - 1);
        }}
      >
        {"<"}
      </button>
      <div style={{ display: "flex" }}>
        <img
          width={200}
          src={imagesArray[currentImgIndex]}
          alt="No image found"
        />
      </div>
      <button
        onClick={() => {
          setCurrentImgIndex(currentImgIndex + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
}
