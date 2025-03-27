import * as Styled from "./style.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../assets/logoWhite.svg";

export default function Depoiments() {
  const testimonials = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia."
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia."
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia."
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
      testimonial: "Blefaroplastia superior, inferior com cantopexia."
    }
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
          dots: true
        }
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
        }
      }
    ]
  };

  return (
    <Styled.Container>
      <div className="container-title">
        <img src={logo} />
        <h3>Antes e depois da Blefaroplastia</h3>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="carousel-slide">
            <div className="container-carousel">
              <div className="profile">
                <img src={testimonial.img} alt="Testimonial" className="testimonial-img" />
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <button className="schedule">Agende a sua avaliação</button>
    </Styled.Container>
  );
}
