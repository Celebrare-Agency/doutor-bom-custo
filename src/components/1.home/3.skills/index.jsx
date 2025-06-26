import * as Styled from "./style.js";
import { Skill } from "../../../mock/skillsItemns.js";
import doctor from "../../../assets/1.home/skills/photoDoctor.png";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

export default function Skills() {
  return (
    <Styled.Container id="conversion">
      <div className="imgContainer row" data-aos="fade-right">
        <img src={doctor} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
      <div className="skillSideContainer col">
        <a href="#diferenciais">
          <h2 data-aos="fade-left">
            Nossos Diferenciais <br />
            em Saúde Acessível
          </h2>
        </a>
        {Skill.map((item) => (
          <div key={item.id} className="itemsContainer col" data-aos="fade-left">
            <img src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
        <div data-aos="fade-left">
          <WppButton style={{ color: "black" }} />
        </div>
      </div>
    </Styled.Container>
  );
}
