import { SurgeryS } from "../../../mock/cirurgiasOftal.js";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
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
              <BtnAds />{" "}
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
