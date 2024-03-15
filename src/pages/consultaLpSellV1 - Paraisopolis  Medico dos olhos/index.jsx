// import * as Styled from "./style.js";

import Banner from "../../components/consultaLpSellV1 - Paraisopolis  Medico dos olhos/1.banner";
import Exames from "../../components/consultaLpSellV1 - Paraisopolis  Medico dos olhos/2.exames";
import ContactUs from "../../components/consultaLpSellV1 - Paraisopolis  Medico dos olhos/4.ContactUs";
import Header from "../../components/GLOBAL/header";
import Skills from "../../components/consultaLpSellV1 - Paraisopolis  Medico dos olhos/3.skills";

export default function OphthalmologistParaisopolisMedicoDosolhos() {
  const styleObj = {
    textAlign: "Center",
    fontWeight: "500",
    color: "var(--blue)",
  };
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <Exames />
      <ContactUs />
    </>
  );
}
