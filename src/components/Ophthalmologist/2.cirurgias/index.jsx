import { SurgeryS } from "../../../mock/cirurgiasOftal.js";
import * as Styled from "./style.js";
export default function Surgery() {
  return (
    <Styled.Container>
      <h2>Cirurgias</h2>
      <div className="containerCard row">
        {SurgeryS.map((item) => (
          <div className="card col" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="btnContainer">
              <button>Entrar em contato</button>
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
