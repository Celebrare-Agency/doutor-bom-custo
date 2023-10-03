import * as Styled from "./style.js";
import { Skill } from "../../../mock/skillsItemns.js";
import doctor from "../../../assets/homepage/skills/photoDoctor.png";
import WppButton from "../../buttonWpp/index.jsx";

export default function Skills() {
  return (
    <Styled.Container>
      <div className="imgContainer row">
        <img src={doctor} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
      <div className="skillSideContainer col">
        <h2>
          Nossos Diferenciais <br />
          em Saúde Acessível
        </h2>
        {Skill.map((item) => (
          <div key={item.id} className="itemsContainer col">
            <img src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
        <WppButton />
      </div>
    </Styled.Container>
  );
}
