import * as Styled from "./style.js";
import { Servicess } from "../../../mock/sellerPageServices.js";
export default function Service() {
  return (
    <Styled.Container>
      <div className="container">
        <div className="cards row">
          {Servicess.map((item) => (
            <div className="contianerLines row">
              <div className="cardItem col" key={item.id}>
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
