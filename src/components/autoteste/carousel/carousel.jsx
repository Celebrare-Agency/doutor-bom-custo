import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousell } from "./style";
import Photo from '../../../assets/autoteste/Profile.png'; 
import { IoMdStar } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Emma Brianna Chloe",
    job: "Finance Manager at Braba Company",
    img: Photo,
    testimonial: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
  },
  {
    id: 2,
    name: "Maria Oliveira", 
    job: "Finance Manager at Braba Company",
    img: Photo,
    testimonial: "A experiência foi fantástica. Recomendo a todos os meus amigos.",
  },
  {
    id: 3,
    name: "Pedro Santos", 
    job: "Finance Manager at Braba Company",
    img: Photo,
    testimonial: "Ótimo serviço! Muito satisfeito com a compra e o suporte oferecido.",
  },
  {
    id: 4,
    name: "Ana Costa", 
    job: "Finance Manager at Braba Company",
    img: Photo,
    testimonial: "Produto de alta qualidade. Atendimento ao cliente excepcional.",
  },
  {
    id: 5,
    name: "Marcos Silva", 
    job: "Finance Manager at Braba Company",
    img: Photo,
    testimonial: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        },
      },
    ],
  };

  return (
    <Carousell>
        <div>

        <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="carousel-slide">
            <div className='containerCarousel'>
                <div className='profile'>
                    <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                    <div>
                        <h1 className="testimonial-author">{testimonial.name}</h1>
                        <p className="testimonial-job">{testimonial.job}</p>   
                    </div>
                </div> 
                <div className='assessment'>
                    <IoMdStar  />
                    <IoMdStar  />
                    <IoMdStar  />
                    <IoMdStar  />
                    <IoMdStar  />
                </div>        
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
            </div>            
          </div>
        ))}
      </Slider>
        </div>
    </Carousell>
  );
};

export default Carousel;
