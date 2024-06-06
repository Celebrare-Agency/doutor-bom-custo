import * as Styled from "./style.js";
import { Services } from "../../../mock/servicesOftal.js";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
export default function Exames() {
  return (
    <Styled.Container id="conversion">
      <h2>Exames</h2>
      <div className="containerCard row">
        {Services.map((item) => (
          <div className="card col" key={item.id}>
            <details>
              <summary>{item.title}</summary>
              <p>{item.text}</p>
            </details>
            <div className="btnContainer">
              <WppButton />
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
