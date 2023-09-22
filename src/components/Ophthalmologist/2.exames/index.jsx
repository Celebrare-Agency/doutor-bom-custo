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
          <div
            className="card col"
            key={item.id}
            onClick={() => setAnimation(true)}
            onClose={() => setAnimation(false)}
          >
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
