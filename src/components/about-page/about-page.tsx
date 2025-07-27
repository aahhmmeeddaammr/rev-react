import { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import ImageCard from "../image-card/image-card";
const AboutPage = () => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="main-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1">
        {[img1, img2, img3, img1, img2, img3].map((image, i) => {
          return (
            <ImageCard
              img={image}
              onClick={() => {
                setImage(image);
              }}
              key={i}
            />
          );
        })}
      </div>
      {image ? (
        <div
          onClick={() => {
            setImage(null);
          }}
          className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-40"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-11/12 md:w-1/2">
            <img src={image} className="w-full" alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AboutPage;
