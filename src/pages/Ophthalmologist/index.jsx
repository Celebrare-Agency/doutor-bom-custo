// import * as Styled from "./style.js";

import Banner from "../../components/Ophthalmologist/1.banner";
import Exames from "../../components/Ophthalmologist/2.exames";
import Surgery from "../../components/Ophthalmologist/2.cirurgias";
import ContactUs from "../../components/Ophthalmologist/4.ContactUs";
import Header from "../../components/header";
import Skills from "../../components/homepage/3.skills";

export default function Ophthalmologist() {
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
