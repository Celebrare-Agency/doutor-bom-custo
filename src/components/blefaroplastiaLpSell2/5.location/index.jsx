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

export default function Location() {

  return (
    <Styled.Container>
      <div className="container-title">
        <img src={logo} />
        <h3>Acompanhe quantos sonhos foram realizados através da blefaroplastia</h3>
      </div>

      <div className="container-video">        
        <YoutubeEmbed embedId="R6SCGmtHg2w" />  
        <div>
          <h1>Luciane</h1>
          <p>"Com o Dr. eu me senti mais tranquila e confortável"</p>
          <button><FaWhatsapp /> WhatsApp</button>
        </div>
      </div>

      <div className="container-maps">
        <h1>Uma clínica de sonhos e novos olhares. Doutor bom custo é o
        lugar da sua transformação.</h1>

        <div className="maps-street">
          <StreetViewMap />
          <StreetViewMap2 />
        </div>

        <div className="container-location">
          <div className="how-to-get-there">
            <div className="location">Local</div>
            <h1>Como Chegar?</h1>
          </div>

          <div className="location-icons">
            <div className="icons"><FaLocationDot /> <p>Av. Nova Independência, 1087 - Brooklin - São Paulo</p></div>
            <div className="icons"><FaSubway /> <p>Estação de metrô CPTM mais próxima: Vila Olímpia - Linha CPTM</p></div>
          </div>
        </div>

        <div className="maps">
          <Map />
          <div className="information-maps">
            <div className="container-information">
                <p>Não conhece muito bem a cidade? Clique e
                vamos te ajudar!</p>
                <button>Dicas para te ajudar</button>
              </div>

              <div className="container-information">
                <button><SiGooglemaps /> Rotas com Google Maps</button>                
                <button><FaWaze /> Rotas com Waze</button>
              </div>
          </div>
        </div>
      </div>

    </Styled.Container>
  );
}
