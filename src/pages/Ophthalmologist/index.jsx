// import * as Styled from "./style.js";

import Banner from "../../components/Ophthalmologist/1.banner";
import Exames from "../../components/Ophthalmologist/2.exames";
import Surgery from "../../components/Ophthalmologist/2.cirurgias";
import ContactUs from "../../components/Ophthalmologist/4.ContactUs";
import Header from "../../components/header";

export default function Ophthalmologist() {
  return (
    <>
      <Header />
      <Banner />
      <Exames />
      <Surgery />
      <ContactUs />
    </>
  );
}
