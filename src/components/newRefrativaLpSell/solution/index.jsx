import React, { useState } from "react";

import * as Styled from "./style";

import img from "../../../assets/newRefrativaLpSell/solution/imagem.png";
import img2 from "../../../assets/newRefrativaLpSell/solution/imagem2.png";
import img3 from "../../../assets/newRefrativaLpSell/solution/imagem3.png";
import img4 from "../../../assets/newRefrativaLpSell/solution/imagem4.png";
import Button from "../../GLOBAL/buttons";
import { useLocation } from "react-router-dom";

export default function Solutionn() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [ticketType, setTicketType] = useState(null); // Armazena o tipo de ingresso
  const location = useLocation();

  const toggleModalVisibility = (modalId, type) => {
    setModalVisibility(!isModalVisible);
    setTicketType(type); // Define o tipo de ingresso (on ou vip)
  };
  return (
    <Styled.Container>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
          ticketType={ticketType} // Passa o tipo de ingresso para o modal
        />
      )}
      <div className="container-solution">
        <div className="container-initial">
          <h1>O QUE VOCÊ VAI ENCONTRAR NO REFRATIVA SP</h1>

          <div className="container-img">
            <p>
              O maior evento de liberdade visual conta com uma estrutura
              completa para garantir excelência em cada etapa do atendimento.{" "}
              <br />
              <br />
              São 20 médicos especialistas em cirurgia refrativa prontos para
              oferecer um cuidado técnico e individualizado. O evento será
              realizado em um ambiente hospitalar premium, com 10 salas
              cirúrgicas equipadas com tecnologia de ponta. <br />
              <br />
              Aqui, você receberá um atendimento rápido, eficiente e totalmente
              personalizado para o seu caso, desde a triagem até o
              pós-operatório.
            </p>
            <img src={img} />
          </div>

          <h1>Como participar</h1>

          <div className="container-img img-cont">
            <p>
              O primeiro passo é realizar uma consulta de avaliação com os
              nossos médicos especialistas, para entenderem o seu caso e
              verificar se sua saúde ocular está nas condições ideiais para o
              procedimento.
              <br />
              <br />
              Após isso, estando tudo certo, vamos realizar alguns exames que
              são essenciais para você entrar no centro cirúrgico. <br />
              <br />
              Enfim, quando os resultados estiverem disponiveis, você já pode
              realizar a tão aguardada cirurgia refrativa! muito.
            </p>
            <img src={img2} />
          </div>

          <h1>
            ATENÇÃO: ATENDIMENTO LIMITADO. PARTICIPAÇÃO <br /> POR ORDEM DE
            INTERESSE!
          </h1>

          <div className="container-img">
            <p>
              No Refrativa SP, priorizamos um atendimento exclusivo e sem
              sobrecargas, nossa agenda de consultas é limitada e os horários
              são preenchidos rapidamente. <br />
              <br />
              As consultas e cirurgias serão agendadas por ordem de interesse,
              respeitando o limite da equipe médica e da estrutura hospitalar.
            </p>
            <img src={img3} />
          </div>

          <h1>Após o procedimento, o que muda?</h1>

          <div className="container-img img-cont">
            <p>
              Tudo muda! Você vai enxergar com nitidez, sem depender de óculos
              ou lentes. Vai ganhar mais liberdade e autonomia para trabalhar,
              dirigir, praticar esportes e realizar tarefas do dia a dia com
              conforto. Sua autoestima melhora, assim como sua qualidade de
              vida. Tudo isso com segurança, tecnologia avançada e resultados de
              excelência.
            </p>
            <img src={img4} />
          </div>
        </div>

        <h1>
          Realize a sua consulta de avaliação e garanta a cirurgia refrativa
          pelo <br /> preço mais acessível da cidade:
        </h1>

        <Button
          className="btn"
          text="Quero garantir a minha cirurgia "
          display="none"
          onClick={() => toggleModalVisibility("1", "vip")}
        />
      </div>
    </Styled.Container>
  );
}
