import * as Styled from "./style.js";
import ophitalmologistIcon from "../../../assets/homepage/services/ophitalmologistIcon.svg";
import { Link } from "react-router-dom";
import WppButton from "../../buttonWpp/index.jsx";

export default function Services() {
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
    >
      <path
        d="M24.5398 0.181324C24.4629 0.230759 21.3046 3.77359 17.5256 8.04696C13.7466 12.3203 10.5719 15.8686 10.4785 15.9236C10.3192 16.0224 10.2862 16.0224 10.094 15.951C9.95668 15.9016 9.09432 15.1491 7.47947 13.6825C5.33182 11.7216 5.03521 11.4689 4.66171 11.2932C4.29919 11.1229 4.18934 11.0954 3.72246 11.079C2.88756 11.046 2.35477 11.2383 1.79452 11.771C1.432 12.1171 1.13539 12.6499 1.03103 13.1387C0.904697 13.7594 1.05849 14.5504 1.41003 15.0667C1.49242 15.1875 3.07432 17.143 4.93085 19.417C7.58932 22.6742 8.3583 23.586 8.5835 23.7343C9.01193 24.0199 9.41839 24.1407 9.93471 24.1407C10.6488 24.1407 11.231 23.8991 11.7198 23.3937C11.8681 23.2454 14.5596 18.9611 18.7011 12.2929C22.4086 6.31674 25.501 1.32931 25.5724 1.20847C25.6384 1.08763 25.6988 0.917355 25.6988 0.834963C25.6988 0.598774 25.5395 0.302166 25.3472 0.186817C25.133 0.0549908 24.7321 0.0494976 24.5398 0.181324Z"
        fill="#35D361"
      />
    </svg>
  );
  const NegativeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <path
        d="M8.07701 0.333618L11.776 6.8949H11.9521L15.6951 0.333618H22.5206L15.7832 11.6067L22.7848 22.8797H15.7832L11.9521 16.1864H11.776L7.9449 22.8797H0.987305L7.90086 11.6067L1.20748 0.333618H8.07701Z"
        fill="#F35E5E"
      />
    </svg>
  );
  const items = [
    {
      id: 1,
      icon: <CheckIcon />,
      text: "Parcerias com clínicas de São Paulo",
    },
    {
      id: 2,
      icon: <CheckIcon className="icons" />,
      text: "Tempo de espera excessivo ",
    },
    {
      id: 3,
      icon: <CheckIcon className="icons" />,
      text: "São reconhecidos por terem um auto custo.",
    },
    {
      id: 4,
      icon: <NegativeIcon className="icons" />,
      text: "Parcerias com clínicas de São Paulo",
    },
    {
      id: 5,
      icon: <NegativeIcon className="icons" />,
      text: "Facilidade de agendamento",
    },
    {
      id: 6,
      icon: <NegativeIcon className="icons" />,
      text: "Lugares acessíveis",
    },
    {
      id: 7,
      icon: <NegativeIcon className="icons" />,
      text: "Profissionais altamente capacitados",
    },
    {
      id: 8,
      icon: <NegativeIcon className="icons" />,
      text: "Centro cirúrgico próprio",
    },
  ];

  const items2 = [
    {
      id: 1,
      icon: <CheckIcon />,
      text: "Parcerias com clínicas de São Paulo",
    },
    {
      id: 2,
      icon: <CheckIcon className="icons" />,
      text: "Atendimento rápido",
    },
    {
      id: 3,
      icon: <CheckIcon className="icons" />,
      text: "Intermediadores de baixo custo e de alta qualidade.",
    },
    {
      id: 4,
      icon: <CheckIcon className="icons" />,
      text: "Preço mais acessível de São Paulo!",
    },
    {
      id: 5,
      icon: <CheckIcon className="icons" />,
      text: "Facilidade de agendamento",
    },
    {
      id: 6,
      icon: <CheckIcon className="icons" />,
      text: "Lugares acessíveis",
    },
    {
      id: 7,
      icon: <CheckIcon className="icons" />,
      text: "Profissionais altamente capacitados",
    },
    {
      id: 8,
      icon: <CheckIcon className="icons" />,
      text: "Centro cirúrgico próprio",
    },
  ];
  return (
    <Styled.Container>
      <div className="text col">
        <h3> Ainda em duvida?</h3>
        <p>Você merece o melhor cuidado para os seus olhos!</p>
      </div>
      <div className="comparativeCont row">
        <div className="card col">
          <div className="top col">
            <h3>Concorrentes</h3>
            <hr />
          </div>
          <div className="itemContainer col">
            {items.map((item) => (
              <div className="item row">
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card card2 col">
          <div className="top col">
            <h3>Doutor bom custo</h3>
            <hr />
          </div>
          <div className="itemContainer col">
            {items2.map((item) => (
              <div className="item row">
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WppButton className="button" />
    </Styled.Container>
  );
}
