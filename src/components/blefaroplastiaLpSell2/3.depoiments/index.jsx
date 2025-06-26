import * as Styled from "./style.js";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../assets/logoWhite.svg";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import img1 from "./images/blefaropalstia-inferior.webp";
import img2 from "./images/blefaroplastia-superior-e-inferior.webp";
import img3 from "./images/blefaroplastia-superior-e-inferior-5-olhos-fechados.jpg";
import img4 from "./images/blefaroplastia-inferior-3.webp";
import img5 from "./images/blefaroplastia-inferior-4.png";
import img6 from "./images/blefaroplastia-inferior-5.png";
import img7 from "./images/blefaroplastia-superior.png";
import img8 from "./images/blefaroplastia-superior2.png";
import img9 from "./images/blefaroplastia-superior-e inferior-2.webp";
import img10 from "./images/blefaroplastia-superior-e inferior-3.webp";
import img11 from "./images/blefaroplastia-superior-e inferior-4.jpg";
import img12 from "./images/blefaroplastia-superior-e inferior-6.jpg";
import img13 from "./images/blefaroplastia-superior-e-inferior-7.png";

export default function Depoiments() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  const testimonials = [
    { id: 1, img: img1, testimonial: "Blefaroplastia inferior" },
    { id: 2, img: img2, testimonial: "Blefaroplastia superior e inferior" },
    {
      id: 3,
      img: img3,
      testimonial: "Blefaroplastia superior e inferior",
    },
    { id: 4, img: img4, testimonial: "Blefaroplastia inferior" },
    { id: 5, img: img5, testimonial: "Blefaroplastia inferior" },
    { id: 6, img: img6, testimonial: "Blefaroplastia inferior" },
    { id: 7, img: img7, testimonial: "Blefaroplastia superior" },
    { id: 8, img: img8, testimonial: "Blefaroplastia superior" },
    { id: 9, img: img9, testimonial: "Blefaroplastia superior e inferior" },
    { id: 10, img: img10, testimonial: "Blefaroplastia superior e inferior " },
    { id: 11, img: img11, testimonial: "Blefaroplastia superior e inferior " },
    { id: 12, img: img12, testimonial: "Blefaroplastia superior e inferior " },
    { id: 13, img: img13, testimonial: "Blefaroplastia superior e inferior" },
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
      <div className="container-title" data-aos="fade-right">
        <img src={logo} />
        <h3>Antes e depois da Blefaroplastia</h3>
      </div>

      <div data-aos="zoom-in">
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
      </div>
      
      <div className="wrapper" data-aos="fade-up">
        <BtnAds
          className="schudele"
          modalId="1"
          toggleModalVisibility={toggleModalVisibility}
        />
      </div>
    </Styled.Container>
  );
}
