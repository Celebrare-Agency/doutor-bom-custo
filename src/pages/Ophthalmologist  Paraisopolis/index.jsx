// import * as Styled from "./style.js";

import Banner from "../../components/Ophthalmologist  Paraisopolis/1.banner";
import Exames from "../../components/Ophthalmologist  Paraisopolis/2.exames";
import Surgery from "../../components/Ophthalmologist  Paraisopolis/2.cirurgias";
import ContactUs from "../../components/Ophthalmologist  Paraisopolis/4.ContactUs";
import Header from "../../components/header";
import Skills from "../../components/homepage/3.skills";

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
