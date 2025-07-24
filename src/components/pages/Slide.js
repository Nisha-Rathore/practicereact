import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Responsive } from "../../utils/data";

const sliderImageUrl = [
  //First image url
  {
    url: "https://blog.g3fashion.com/wp-content/uploads/2021/06/ethnic-wear-e1624093120626.jpg",
  },
  {
    url: "https://imgeng.jagran.com/webstories/66837/sonakshi-sinha-ethnic-wear-for-wedding-season-1698042927.jpeg",
  },
  {
    url: "https://blog.g3fashion.com/wp-content/uploads/2021/06/ethnic-wear-e1624093120626.jpg",
  },
  {
    url: "https://imgeng.jagran.com/webstories/66837/sonakshi-sinha-ethnic-wear-for-wedding-season-1698042927.jpeg",
  },
  {
    url: "https://blog.g3fashion.com/wp-content/uploads/2021/06/ethnic-wear-e1624093120626.jpg",
  },
  {
    url: "https://imgeng.jagran.com/webstories/66837/sonakshi-sinha-ethnic-wear-for-wedding-season-1698042927.jpeg",
  },
  {
    url: "https://blog.g3fashion.com/wp-content/uploads/2021/06/ethnic-wear-e1624093120626.jpg",
  },
  {
    url: "https://imgeng.jagran.com/webstories/66837/sonakshi-sinha-ethnic-wear-for-wedding-season-1698042927.jpeg",
  },
  {
    url: "https://blog.g3fashion.com/wp-content/uploads/2021/06/ethnic-wear-e1624093120626.jpg",
  },
  {
    url: "https://imgeng.jagran.com/webstories/66837/sonakshi-sinha-ethnic-wear-for-wedding-season-1698042927.jpeg",
  },
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={Responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
