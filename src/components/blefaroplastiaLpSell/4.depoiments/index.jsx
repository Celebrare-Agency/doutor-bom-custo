import React, { useState } from "react";
import * as Styled from "./style.js";
import dp1 from "../../../assets/blefaroplastiaLpSell/4.depoiments/dp 01.png";
import dp2 from "../../../assets/blefaroplastiaLpSell/4.depoiments/dp 02.png";
import dp3 from "../../../assets/blefaroplastiaLpSell/4.depoiments/dp 03.png";
export default function Depoiments() {
  const dps = [
    {
      id: 1,
      img: dp1,
    },
    {
      id: 2,
      img: dp2,
    },
    {
      id: 3,
      img: dp3,
    },
  ];
  return (
    <Styled.Container id="conversion">
      <div className="titlePart col">
        <h3>Transformações Reais</h3>
        <p>
          Veja como o procedimento de blefaroplastia pode transformar um olhar
          triste para um olhar empoderado
        </p>
      </div>
      <div className="content row">
        <div className="afterAndBeforeContainer row">
          {dps.map((item) => (
            <>
              <img
                src={item.img}
                alt="antes e depois da cirurgia de blefaroplastia"
              />
            </>
          ))}
        </div>
      </div>
    </Styled.Container>
  );
}
