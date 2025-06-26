import * as Styled from "./style.js";
import { Servicess } from "../../../mock/sellerPageServices.js";
export default function Service() {
  return (
    <Styled.Container>
      <div className="container">
        <div className="topContainer">
          <h2 data-aos="fade-up">Sobre o seu atendimento</h2>
        </div>
        <div className="cards row" data-aos="zoom-in">
          {Servicess.map((item) => (
            <div className="contianerLines row">
              <div className="cardItem col" key={item.id}>
                <img src={item.img} alt="imageteste" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <hr className={item.style} />
            </div>
          ))}
        </div>
      </div>
    </Styled.Container>
  );
}
