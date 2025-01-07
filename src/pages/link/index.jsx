import * as Styled from "./style.js";
import logo from "../../assets/logoExtendBlue.svg";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogoLight } from "react-icons/pi";

export default function Linktree() {
  const links = [
    {
      id: 2,
      href: "https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cirurgia%20de%20catarata!",
      title: "Cirurgia de Catarata",
      class: "link catarata",
      text: "Saiba mais sobre a cirurgia de catarata.",
    },
    {
      id: 3,
      href: "https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cirurgia%20refrativa!",
      title: "Cirurgia Refrativa",
      class: "link refrativa",
      text: "Saiba mais sobre a cirurgia refrativa.",
    },
    {
      id: 4,
      href: "https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cirurgia%20de%20blefaroplastia!",
      title: "Cirurgia de Blefaroplastia",
      class: "link blefaroplastia",
      text: "Saiba mais sobre a cirurgia de blefaroplastia.",
    },
    {
      id: 5,
      href: "https://doutorbomcusto.com.br/",
      title: "Site Oficial",
      class: "link site",
      text: "Visite nosso site oficial.",
    },
  ];

  return (
    <Styled.Container>
      <section className="col">
        <div className="introductionContainer col">
          <img src={logo} alt="foto abstrata minha" />
          <h1>Doutor Bom Custo</h1>
        </div>
        <div className="iconRedes row">
          <FiFacebook
            className="icon"
            onClick={() =>
              window.open("https://www.facebook.com/doutorbomcusto/")
            }
          />
          <FaInstagram
            className="icon"
            onClick={() =>
              window.open("https://www.instagram.com/dr_bomcusto/")
            }
          />
          <PiTiktokLogoLight
            className="icon"
            onClick={() => window.open("https://www.tiktok.com/@dr.bomcusto")}
          />
        </div>
        <div className="linksContainer ">
          {links.map((item) => (
            <a
              href={item.href}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={item.class}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Styled.Container>
  );
}
