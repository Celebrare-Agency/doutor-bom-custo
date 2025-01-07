import * as Styled from "./style.js";
import logo from "../../assets/logoExtendBlue.svg";
export default function Linktree() {
  const links = [
    {
      id: 1,
      href: "https://www.behance.net/tiagosantos67",
      title: "Behance",
      class: "link  behance",
      text: "Site para  trabalhos artísticos",
    },
    {
      id: 2,
      href: "https://github.com/Tigas29",
      title: "Github",
      class: "link  github",
      text: "Site para versionamos código de projetos ",
    },
    {
      id: 3,
      href: "http://www.linkedin.com/in/tigass",
      title: "LinkedIn",
      class: "link  linkedin",
      text: "Onde mostro o que eu ando fazendo",
    },
  ];
  return (
    <Styled.Container>
      <section className="col">
        <div className="introductionContainer col">
          <img src={logo} alt="foto abstrata minha" />
          <h1>Doutor Bom Custo</h1>
        </div>

        <div className="linksContainer ">
          {links.map((item) => (
            <a href={item.href} key={item.id}>
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
