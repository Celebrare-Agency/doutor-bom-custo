import * as Styled from "./style.js";
import React, { useState } from "react";

import logo from "../../../assets/logoWhite.svg";
import YoutubeEmbed from "./embed/YTEMBED.jsx";
import { FaWhatsapp, FaSubway, FaWaze } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

import StreetViewMap from "./maps/StreetView.jsx";
import StreetViewMap2 from "./maps/StreetView2.jsx";
import Map from "./maps/maps.jsx";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

export default function Location() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const depoimentos = [
    {
      embedId: "UmyU1YRVSDo",
      titulo: "Marcos Benador",
      texto: `Um hospital de ponta, com uma equipe maravilhosa. 
            Tudo com um preço de custo!`,
    },

    {
      embedId: "6mIkFEvnEz4",
      titulo: "Irani das Graças",
      texto: `Me senti acolhida e eu adorei,amei demais o resultad!`,
    },
  ];
  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
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
      <div className="container-title" data-aos="fade-up">
        <img src={logo} />
        <h3>
          Acompanhe quantos sonhos foram realizados através da blefaroplastia
        </h3>
      </div>

      <div className="container-videos" data-aos="zoom-in">
        {depoimentos.map((dep, index) => (
          <div className="container-video" key={index}>
            <YoutubeEmbed embedId={dep.embedId} />
            <div className="container-Text">
              <h1>{dep.titulo}</h1>
              <p>{dep.texto}</p>

              <BtnAds
                text="Clique aqui"
                modalId="1"
                toggleModalVisibility={toggleModalVisibility}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container-maps">
        <h1 data-aos="fade-up">
          Uma clínica de sonhos e novos olhares. Doutor bom custo é o lugar da
          sua transformação.
        </h1>

        <div className="maps-street" data-aos="zoom-in">
          <StreetViewMap />
          <StreetViewMap2 />
        </div>

        <div className="container-location">
          <div className="how-to-get-there" data-aos="fade-right">
            <div className="location">Local</div>
            <h1>Como Chegar?</h1>
          </div>

          <div className="location-icons" data-aos="fade-left">
            <div className="icons">
              <FaLocationDot />{" "}
              <p>Av. Ipiranga, 344 - São Paulo - SP, 01046-010</p>
            </div>
            <div className="icons">
              <FaSubway />{" "}
              <p>
                Estação de metrô CPTM mais próxima: República - Linha Amarela
              </p>
            </div>
          </div>
        </div>

        <div className="maps">
          <div data-aos="fade-up"><Map /></div>
          <div className="information-maps">
            {/* <div className="container-information">
              <p>Não conhece muito bem a cidade? Clique e vamos te ajudar!</p>
              <a href="http://">
                <button>Dicas para te ajudar</button>
              </a>
            </div> */}

            <div className="container-information" data-aos="fade-up">
              <a href="https://www.google.com/maps/dir//Av.+Ipiranga,+344+-+Centro+Hist%C3%B3rico+de+S%C3%A3o+Paulo,+S%C3%A3o+Paulo+-+SP,+01046-010/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce584e671fdf25:0x104f0990b9956a4c?sa=X&ved=1t:707&ictx=111">
                <button>
                  <SiGooglemaps /> Rotas com Google Maps
                </button>
              </a>
              <a href="https://ul.waze.com/ul?venue_id=205325852.2053258523.901418&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
                <button>
                  <FaWaze /> Rotas com Waze
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
}
