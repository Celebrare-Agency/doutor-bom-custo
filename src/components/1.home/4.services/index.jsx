import * as Styled from "./style.js";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <Styled.Container id="services">
      <p>
        Nossos parceiros estão à sua disposição! Projetados para sua segurança e
        comodidade, cada detalhe do centro cirúrgico e das clínicas é pensado
        para proporcionar uma experiência tranquila, com instalações de última
        geração e equipe dedicada, para que você se sinta seguro desde a chegada
        até a recuperação. 
      </p>
      <h3>
        Confira algumas das especialidades disponíveis nas nossas clínicas
        parceiras:
      </h3>
      <div className="formGroup">
        <a
          href="https://api.whatsapp.com/send?phone=5511945824194&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista.%20"
          target="blanked"
        >
          <button className="row">Oftalmologia</button>
        </a>
        <Link to="/catarata">
          <button className="row">Catarata</button>
        </Link>
        <Link to="/blefaroplastia">
          <button className="row">Blefaroplastia</button>
        </Link>
        <Link to="/refrativa">
          <button className="row">Cirurgia Refrativa</button>
        </Link>
      </div>
    </Styled.Container>
  );
}
