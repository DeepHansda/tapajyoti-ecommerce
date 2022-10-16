import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import "./slide.css";
import { API } from "../../../Redux/Common/API";
import { ProjectContext } from "../../../App";
import Toast from "../Toast";
const MainSlider = () => {
  const { offset, width, setOpenAlert } = useContext(ProjectContext);

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: true,
  };

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    API.get("/getBanners")
      .then((res) => {
        if (res.data.success == 1) {
          setBanners(res.data.result);
        }
      })
      .catch((err) => {

        err && setOpenAlert({ open: true, message: err.response.data.message, success: false });
      });
  }, []);

  return (
    <div className="main-autoSlide">
      <Toast />
      <Slider {...settings}>
        {banners.map((banner) => {
          return (
            <div className="slide-items">
              <img src={banner.img} alt={banner.public_id} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;
