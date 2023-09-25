import { SurgeryS } from "../../../mock/cirurgiasOftal.js";
import * as Styled from "./style.js";
export default function Surgery() {
  return (
    <Styled.Container>
      <h2>Cirurgias</h2>
      <div className="containerCard row">
        {SurgeryS.map((item) => (
          <div className="card col" key={item.id}>
            <details>
              <summary>{item.title}</summary>
              <p>{item.text}</p>
            </details>
            <div className="btnContainer">
              <a href="">
                <button>Entrar em contato</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
