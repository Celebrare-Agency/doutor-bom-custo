// import * as Styled from "./style.js";

import Banner from "../../components/consultaLpSellV1 - Paraisopolis/1.banner";
import Exames from "../../components/consultaLpSellV1 - Paraisopolis/2.exames";
import Surgery from "../../components/consultaLpSellV1 - Paraisopolis/2.cirurgias";
import ContactUs from "../../components/consultaLpSellV1 - Paraisopolis/4.ContactUs";
import Header from "../../components/GLOBAL/header";
import Skills from "../../components/1.home/3.skills";

export default function OphthalmologistParaisopolis() {
  const styleObj = {
    textAlign: "Center",
    fontWeight: "500",
    color: "var(--blue)",
  };
  return (
    <>
      <Header />
      <Banner />
      <p style={styleObj}>
        Estão incluídos em todas as nossas consultas; Avaliação do médico,
        autorefrator, exame optométrico, ceratrometria e tonometria.
      </p>
      <Exames />
      <Skills />
      <Surgery />
      <ContactUs />
    </>
  );
}
