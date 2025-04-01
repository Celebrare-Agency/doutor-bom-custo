import * as Styled from "./style.js";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../assets/logoWhite.svg";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

export default function Depoiments() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  const testimonials = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Styled.Container id="conversion">
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div className="container-title">
        <img src={logo} />
        <h3>Antes e depois da Blefaroplastia</h3>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="carousel-slide">
            <div className="container-carousel">
              <div className="profile">
                <img
                  src={testimonial.img}
                  alt="Testimonial"
                  className="testimonial-img"
                />
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="wrapper">
        <BtnAds
          className="schudele"
          modalId="1"
          toggleModalVisibility={toggleModalVisibility}
        />
      </div>
    </Styled.Container>
  );
}
