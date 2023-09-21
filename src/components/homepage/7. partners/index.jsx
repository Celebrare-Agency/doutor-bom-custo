import * as Styled from "./style.js";
import novavisao from "../../../assets/homepage/partners/nv.svg";
import cirurgiacenter from "../../../assets/homepage/partners/Cc.svg";

export default function Partners() {
  return (
    <Styled.Container>
      <h3>parceiros</h3>
      <div className="partnersContainer row">
        <img src={novavisao} alt="logo nova visão" />
        <img src={cirurgiacenter} alt="logo cirurgia center" />
      </div>
      <hr />
    </Styled.Container>
  );
}
