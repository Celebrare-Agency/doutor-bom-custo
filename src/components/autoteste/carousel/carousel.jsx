import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousell } from "./style";
import { IoMdStar } from "react-icons/io";

// Exemplos de imagens de pessoas satisfeitas da biblioteca Unsplash
const testimonials = [
  {
    id: 1,
    name: "Laura Mendes",
    job: "Designer Gráfico",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&w=1080&fit=max",
    testimonial:
      "Nunca pensei que poderia deixar os óculos de lado. As lentes de ortoceratologia mudaram minha vida! Acordo com visão clara todos os dias.",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    job: "Engenheiro Civil",
    img: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=entropy&cs=tinysrgb&w=1080&fit=max",
    testimonial:
      "Foi incrível! Uso as lentes enquanto durmo e durante o dia estou livre dos óculos. Recomendo para todos que buscam conforto.",
  },
  {
    id: 3,
    name: "Juliana Castro",
    job: "Empresária",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=1080&fit=max",
    testimonial:
      "Adorei as lentes! O processo de adaptação foi rápido e agora posso viver sem a preocupação de usar óculos ou lentes durante o dia.",
  },
  {
    id: 4,
    name: "Rafael Souza",
    job: "Estudante",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&w=1080&fit=max",
    testimonial:
      "Estava cético no começo, mas a ortoceratologia superou minhas expectativas. Minha visão melhorou muito, e agora posso praticar esportes sem problemas.",
  },
  {
    id: 5,
    name: "Mariana Lima",
    job: "Personal Trainer",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=1080&fit=max",
    testimonial:
      "As lentes são confortáveis e práticas. É maravilhoso acordar com a visão perfeita e não precisar me preocupar com óculos ou lentes durante o dia.",
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
              <div className="containerCarousel">
                <div className="profile">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <div>
                    <h1 className="testimonial-author">{testimonial.name}</h1>
                    <p className="testimonial-job">{testimonial.job}</p>
                  </div>
                </div>
                <div className="assessment">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
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
