import * as Styled from "./style.js";
import WppButton from "../../buttonWpp/index.jsx";

export default function Exames() {
  const items = [
    {
      id: 1,
      text: "A topografia da córnea analisa a córnea dos olhos, identificando doenças como ceratocone e astigmatismo.",
      title: "TOPOGRAFIA DE CÓRNEA",
    },
    {
      id: 2,
      text: "A retinografia captura imagens da retina para diagnosticar doenças oculares, incluindo glaucoma, degeneração macular, retinopatia hipertensiva e diabética.",
      title: "RETINOGRAFIA (Fundo de olho)",
    },
    {
      id: 3,
      text: "Biometria ultrassônica mede olho e lente para cirurgia de catarata.",
      title: "BIOMETRIA ULTRASSÔNICA",
    },
    {
      id: 4,
      text: "Mede pressão nos olhos para detectar glaucoma.",
      title: "TONOMETRIA",
    },
  ];
  return (
    <Styled.Container>
      <div className="text col">
        <h2>Os Exames Mais Procurados por Nossos Clientes</h2>
        <p>
          Com base em nossa análise interna, identificamos os exames mais
          requisitados e realizados por nossas equipes especializadas.
        </p>
      </div>
      <div className="cardsCont">
        {items.map((item) => (
          <div className="card col" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <WppButton />
    </Styled.Container>
  );
}
