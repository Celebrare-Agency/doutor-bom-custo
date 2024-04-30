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
              <a
                href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20um%20m%C3%A9dico%20oftalmologista%20em%20Parais%C3%B3polis."
                target="blanked"
              >
                <button>Entrar em contato</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
