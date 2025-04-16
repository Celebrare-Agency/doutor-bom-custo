import React from "react";
import * as Styled from "./style";

import img from "../../../assets/newRefrativaLpSell/declaration/imagem.png";

export default function Declaration() {
  return (
    <Styled.Container>
      <div className="container-declaration">
        <img src={img} />
        <div className="texts">
          <p>
            No Brasil, temos quase 24% da população fazendo o uso de óculos ou lentes de contato para 
            corrigir erros de refração como miopia, astigmatismo e hipermetropia, além de outras 
            condições que podem necessitar de óculos. Se essas pessoas tivessem a oportunidade de se 
            libertar dessa dependência, é provável que fariam. <br /><br />

            O Refrativa SP surge com um único propósito: ajudar essas milhares de pessoas que desejam 
            enxergar sem a necessidade de um acessório 24 horas por dia em seu rosto.<br /><br />
            
            Pela primeira vez, o maior evento de liberdade visual já realizado está ao seu alcance!
          </p>
        </div>
      </div>
    </Styled.Container>
  );
}
