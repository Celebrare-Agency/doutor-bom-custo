import * as Styled from "./style.js";
import { Services } from "../../../mock/servicesOftal.js";
import { useEffect, useState } from "react";
export default function Exames() {
  const [animation, setAnimation] = useState(false);
  return (
    <Styled.Container isanimation={animation}>
      <h2>Exames</h2>
      <div className="containerCard row">
        {Services.map((item) => (
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
