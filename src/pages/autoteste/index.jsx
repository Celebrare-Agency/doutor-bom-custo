import {
  ContainerAuto,
  Header,
  Cover,
  Ortoce,
  Benefits,
  Who,
  Indication,
  Contact,
  Testimony,
  Map,
} from "./style";
import logo from "../../assets/logoExtendBlue.svg";
import Lens from "../../assets/autoteste/Lens.png";
import Pessoas from "../../assets/autoteste/Peoples.png";
import Maps from "../../assets/autoteste/Maps.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { SlCalender, SlPhone } from "react-icons/sl";
import { FaHeartbeat } from "react-icons/fa";
import MapEmbed from "../../components/autoteste/maps";
import Carousel from "../../components/autoteste/carousel/carousel";
import BtnAds from "../../components/GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../components/modalForm/index.jsx";
const wppLink =
  "https://api.whatsapp.com/send?phone=5511945824194&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20";
const menuItems = [
  { path: "autoteste", label: "Autoteste" },
  { path: wppLink, icon: <SlCalender />, label: "Agendar consulta" },
  {
    path: "tel:+5511950212678",
    icon: <SlPhone />,
    label: "Ligue (11) 95021-2678",
  },
];

export default function AutoTeste() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [animation, setAnimation] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    function handleScroll() {
      setAnimation(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClose = () => {
    setMenuIsVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [path]);

  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  return (
    <>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1" // Você pode passar o modalId se necessário
        />
      )}
      <ContainerAuto>
        <Header isVisible={menuIsVisible} isanimation={animation}>
          <nav className="header">
            <div className="content">
              <Link to="/">
                <div className="logoSide">
                  <img src={logo} alt="logotipo" />
                </div>
              </Link>
              <AiOutlineMenu
                onClick={() => setMenuIsVisible(true)}
                className="menu"
              />
              <AiOutlineClose
                onClick={handleMenuClose}
                className={`menu closeMenu ${menuIsVisible ? "visible" : ""}`}
              />
              <ul className="menuSide">
                {menuItems.map((item) => (
                  <li key={item.path} className="Options">
                    {item.path === wppLink ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon} {item.label}
                      </a>
                    ) : item.path.startsWith("/") ? (
                      <Link to={item.path}>
                        {item.icon} {item.label}
                      </Link>
                    ) : path === "/oftalmo-taboaodaserra" ? (
                      <Link to="/">{item.label}</Link>
                    ) : (
                      <ScrollLink to={item.path} onClick={handleMenuClose}>
                        {item.icon} {item.label}
                      </ScrollLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Header>

        <Cover>
          <div className="texts">
            <h2 data-aos="fade-up">Acorde com uma Visão Clara:</h2>
            <h1 data-aos="fade-up">
              Lentes de Ortoceratologia que Transformam suas Noites e Dias!
            </h1>
            <p data-aos="fade-up">
              Diga adeus às lentes de contato durante o dia e aproveite a
              liberdade de uma visão nítida sem preocupações.
            </p>
           <div data-aos="fade-up">
            <BtnAds
                modalId="1"
                toggleModalVisibility={toggleModalVisibility}
                text="Quero enxergar melhor"
              />
            </div>  
          </div>
        </Cover>

        <Ortoce>
          <div className="Orto">
            <div className="containerOrto">
              <div className="textsOrto">
                <h2 data-aos="fade-right">
                  <div className="line"></div>Liberdade Total Durante o Dia
                </h2>
                <h1 data-aos="fade-right">O Que é Ortoceratologia?</h1>
                <p data-aos="fade-right">
                  A ortoceratologia é uma tecnologia avançada que utiliza lentes
                  de contato especiais para moldar temporariamente a sua córnea
                  enquanto você dorme.{" "}
                </p>
                <p data-aos="fade-right">
                  Ao acordar, sua visão está corrigida, permitindo que você
                  passe o dia inteiro sem a necessidade de óculos ou lentes de
                  contato tradicionais.{" "}
                </p>
                <p data-aos="fade-right">
                  Simples, eficaz e sem dor, essa é a solução para Who busca
                  liberdade visual sem comprometer o conforto.
                </p>
              </div>
              <div className="containerImgOrto" data-aos="fade-left">
                <img src={Lens} alt="Lens" />
              </div>
            </div>
          </div>
        </Ortoce>

        <Benefits>
          <div className="Ben">
            <div className="containerBen">
              <div className="textsBen">
                <h1 data-aos="fade-right">
                  Benefícios que
                  <br /> Você Vai Amar
                </h1>
              </div>
              <div className="containerImgBen">
                <div>
                  <p data-aos="fade-left">
                    <ImCheckboxChecked className="IconChecked" /> Liberdade
                    Total Durante o Dia{" "}
                  </p>
                  <p data-aos="fade-left">
                    <ImCheckboxChecked className="IconChecked" /> Mais Conforto
                    e Menos Preocupações{" "}
                  </p>
                  <p data-aos="fade-left">
                    <ImCheckboxChecked className="IconChecked" /> Tecnologia
                    Segura e Comprovada{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Benefits>

        <Who>
          <div className="Who">
            <div className="containerWho">
              <div className="textsWho">
                <h2 data-aos="fade-right">
                  <div className="line"></div>Essas lente pode ser perfeita para
                  você!
                </h2>
                <h1 data-aos="fade-right">Para quem é Indicada a Lente de Ortoceratologia?</h1>
                <p data-aos="fade-right">
                  I. Quer acordar com visão nítida e sem precisar colocar lentes
                  pela manhã.{" "}
                </p>
                <p data-aos="fade-right">
                  II. Está cansado de lidar com desconforto causado por lentes
                  de contato tradicionais.{" "}
                </p>
                <p data-aos="fade-right">
                  III. Procura uma solução sem cirurgia, mas com resultados
                  comparáveis.{" "}
                </p>
                <p data-aos="fade-right">
                  IV. Leva uma vida ativa e precisa de total liberdade visual ao
                  longo do dia.{" "}
                </p>
                <div data-aos="fade-right">
                  <BtnAds
                    modalId="1"
                    toggleModalVisibility={toggleModalVisibility}
                  />
                </div>
              </div>
              <div className="containerImgWho" data-aos="fade-left">
                <img src={Pessoas} alt="Pessoas" />
              </div>
            </div>
          </div>
        </Who>

        <Indication>
          <div className="containerIndi">
            <h1 data-aos="fade-up">Indicações para o Uso das Lentes Ortoceratológicas</h1>
            <p data-aos="fade-up">
              Recuperar a visão com clareza é mais do que um desejo, é uma
              necessidade para uma vida plena. Veja como a cirurgia Refrativa
              pode transformar sua qualidade de vida:
            </p>
          </div>

          <div className="backgroundBlue">
            <div className="containerIllness" data-aos="zoom-in">
              <div className="iten-illness">
                <div>
                  <FaHeartbeat />
                </div>
                <h1>Miopia</h1>
                <p>Até 8 graus de miopia podem ser corrigidos com segurança.</p>
              </div>
              <div className="iten-illness">
                <div>
                  <FaHeartbeat />
                </div>
                <h1>Astigmatismo</h1>
                <p>Correção eficaz para até 10 graus de astigmatismo.</p>
              </div>
              <div className="iten-illness">
                <div>
                  <FaHeartbeat />
                </div>
                <h1>Hipermetropia</h1>
                <p>Também eficaz para até 4 graus de hipermetropia.</p>
              </div>
            </div>
          </div>
        </Indication>

        <Contact>
          <div className="ContactB" data-aos="fade-up">
            <div className="containerContactB">
              <h1>Não Perca Mais Tempo com Lentes Diurnas</h1>
              <p>
                Experimente a praticidade e o conforto das lentes
                ortoceratológicas. Agende sua consulta e comece a aproveitar uma
                vida sem preocupações com sua visão.
              </p>
              <div>
                <BtnAds
                  modalId="1"
                  toggleModalVisibility={toggleModalVisibility}
                  text="Entre em contato"
                />
                <a>
                  <SlPhone /> 11 94582-4194
                </a>
              </div>
            </div>
          </div>
        </Contact>

        <Testimony>
          <div className="containerDep">
            <p data-aos="fade-up">Depoimentos</p>
            <div className="line" data-aos="fade-up"></div>
            <h1 data-aos="fade-up">Depoimentos de Clientes </h1>
          </div>

          <div data-aos="zoom-in"><Carousel /></div>
        </Testimony>

        <Map>
          <div className="Map">
            <div className="containerTextMap">
              <div className="textMap">
                <h1 data-aos="fade-right">Está Pronto para Transformar Suas Noites e Dias?</h1>
                <p data-aos="fade-right">
                  Entre em contato conosco hoje mesmo para agendar uma consulta
                  e descobrir como as lentes de ortoceratologia podem mudar sua
                  vida. Nossos especialistas estão prontos para ajudar você a
                  aproveitar ao máximo essa tecnologia inovadora.
                </p>
              </div>
              <div className="containerMap" data-aos="fade-left">
                <MapEmbed />
              </div>
            </div>
          </div>
          <div className="containerImgMap" data-aos="fade-down">
            <img src={Maps} alt="map" />
          </div>
        </Map>
      </ContainerAuto>
    </>
  );
}
