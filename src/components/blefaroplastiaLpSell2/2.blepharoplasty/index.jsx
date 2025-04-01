import * as Styled from "./style.js";
import React, { useState } from "react";
import visao from "../../../assets/blefaroplastiaLpSell2/2.blepharoplasty/Image.png";
import blu from "../../../assets/blefaroplastiaLpSell2/2.blepharoplasty/Blur.png";
import olho from "../../../assets/blefaroplastiaLpSell2/2.blepharoplasty/Olho.png";
import olho2 from "../../../assets/blefaroplastiaLpSell2/2.blepharoplasty/Olho2.png";
import olho3 from "../../../assets/blefaroplastiaLpSell2/2.blepharoplasty/Olho3.png";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

export default function blepharoplasty() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  return (
    <Styled.Container id="conversion">
      {" "}
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div>
        <div className="squares">
          <div className="squares-container">
            <div className="squares">
              <p className="miniTitle">
                O que é a <br />
                <b>blefaroplastia?</b>
              </p>
            </div>

            <div className="texts">
              <p>
                A Blefaroplastia, também conhecida como cirurgia das pálpebras,
                é a porta de entrada para uma{" "}
                <span>aparência renovada e uma perspectiva rejuvenescida.</span>{" "}
              </p>

              <p>
                Com uma abordagem cirúrgica delicada, trabalhamos para{" "}
                <span>
                  eliminar o excesso de pele que pode criar a aparência de
                  pálpebras caídas.
                </span>{" "}
                É hora de desfazer os sinais do tempo e recuperar a vitalidade
                do seu olhar.
              </p>
            </div>
          </div>

          <div className="squares-container2">
            <img src={visao} />

            <div className="squares2">
              <p className="miniTitle">
                Encontre uma <br />
                <b>nova visão</b>
                <br />
                de si mesmo
              </p>
            </div>
          </div>

          <div className="squares-container3">
            <div>
              <p>
                Para além das preocupações estéticas,{" "}
                <span>
                  a flacidez nas pálpebras pode obscurecer a visão periférica
                </span>
                , prejudicando até mesmo a forma como você enxerga o mundo.
                Sensações de peso e cansaço nos olhos podem se tornar parte do
                seu dia a dia. A Blefaroplastia vai além da estética,
                <span>
                  trabalhando para restaurar a harmonia das pálpebras, melhorar
                  a visão e trazer de volta o conforto que você merece.
                </span>
              </p>

              <p>
                Nossa abordagem à Blefaroplastia abraça duas dimensões
                fundamentais. Primeiramente, buscamos resolver{" "}
                <span>questões funcionais</span>, onde o excesso de pele
                compromete sua visão e causa desconforto. Em segundo lugar,
                oferecemos uma <span>transformação estética</span>, destinada a
                reacender a sua autoestima e rejuvenescer o seu rosto.{" "}
                <span>
                  É uma combinação de cuidado funcional e artístico que oferece
                  resultados excepcionais.
                </span>
              </p>
            </div>
          </div>

          <div className="squares-container4">
            <img src={blu} />

            <div className="classe">
              <div className="squares4">
                <p>
                  Estamos comprometidos em oferecer a você a oportunidade de
                  realizar a cirurgia de blefaroplastia a um{" "}
                  <b>valor justo, mais acessível do que nunca. </b>
                </p>
              </div>
              <BtnAds
                modalId="1"
                toggleModalVisibility={toggleModalVisibility}
              />
            </div>
          </div>
        </div>

        <div className="container-type-blepha">
          <h1>
            Conheça os <span>tipos de Blefaroplastia</span>
          </h1>
          <p>Existem 3 diferentes tipos de cirurgia de blefaroplastia</p>

          <div className="container-blepha">
            <div className="blepha">
              <img src={olho} />
              <h1>
                Blefaroplastia <br />
                superior
              </h1>
              <p>
                O oftalmologista faz a retirada do excesso de pele e, quando há
                necessidade, de músculo e gordura apenas na pálpebra superior.
              </p>
            </div>

            <div className="blepha">
              <img src={olho2} />
              <h1>
                Blefaroplastia <br />
                inferior
              </h1>
              <p>
                Similar ao tipo anterior, neste caso o procedimento é feito
                apenas para retirada do excesso de pele e gordura da pálpebra
                inferior.
              </p>
            </div>

            <div className="blepha">
              <img src={olho3} />
              <h1>
                Blefaroplastia <br />
                completa
              </h1>
              <p>
                Esta é a união dos dois tipos anteriores. O paciente passa pela
                retirada de pele nas pálpebras superiores e inferiores.
              </p>
            </div>
          </div>

          <p>
            Se o excesso de pele e as bolsas de gordura nas pálpebras incomodam
            você, agende <br />
            uma avalição com os nossos médicos especialistas.
          </p>
          <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
        </div>
      </div>
    </Styled.Container>
  );
}
