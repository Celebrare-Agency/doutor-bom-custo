import * as Styled from "./style.js";
import { Services } from "../../../mock/servicesOftal.js";
export default function Exames() {
  return (
    <Styled.Container>
      <h2>Exames</h2>
      <div className="containerCard row">
        {Services.map((item) => (
          <div className="card col" key={item.id}>
            <details>
              <summary>{item.title}</summary>
              <p>{item.text}</p>
            </details>
            <div className="btnContainer">
              <a
                href="https://api.whatsapp.com/send?phone=5511950212678&text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
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
