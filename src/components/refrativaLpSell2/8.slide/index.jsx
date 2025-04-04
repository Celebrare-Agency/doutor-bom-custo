import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import slide1 from "../../../assets/catarataLpSell/5.slide/slide1.png";
import slide2 from "../../../assets/catarataLpSell/5.slide/slide2.png";
import { Container } from "./style";
export default function SlideshowBlefaro() {
  return (
    <Container>
      <div className="containerTitle">
        <a href="#espaco">
          <h3>Nossos Espaços e Nossa Tecnologia</h3>
        </a>
        <hr />
      </div>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={90}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="fotos da clinica" className="imgSlide" />

            <div className="text">
              <div className="title">
                <h1>Nossos Espaços</h1>
              </div>
              <p>
                <b>Ambientes Confortáveis:</b> Nossas clínicas são projetadas
                para proporcionar conforto e tranquilidade aos pacientes durante
                a consulta e o tratamento.
              </p>
              <p>
                <strong>Clínicas Parceiras:</strong> Trabalhamos com várias
                clínicas e hospitais parceiros para garantir que você tenha
                acesso ao melhor atendimento em locais convenientes.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              alt="fotos de uma sala cirurgica"
              className="imgSlide"
            />
            <div className="text">
              <div className="title">
                <h1>Nossa Tecnologia</h1>
              </div>
              <p>
                <b>Equipamentos de Ponta: </b>Utilizamos tecnologia de última
                geração para diagnósticos precisos e tratamentos eficazes.
              </p>
              <p>
                <strong>Cirurgia de Alta Precisão: </strong> Equipamentos
                modernos que garantem segurança e sucesso na cirurgia de
                catarata.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
