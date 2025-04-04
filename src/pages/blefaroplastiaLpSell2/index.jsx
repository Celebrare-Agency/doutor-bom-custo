import * as Styled from "./style.js";

import Banner from "../../components/blefaroplastiaLpSell2/1.banner";
import Blepharoplasty from "../../components/blefaroplastiaLpSell2/2.blepharoplasty/index";
import Depoiments from "../../components/blefaroplastiaLpSell2/3.depoiments";
import ClinicalStaff from "../../components/blefaroplastiaLpSell2/4.clinicalstaff/index.jsx";
import Location from "../../components/blefaroplastiaLpSell2/5.location/index";
import WhatsApp from "../../components/blefaroplastiaLpSell2/6.whatsApp";
// import Faq from "../../components/blefaroplastiaLpSell2/7.faq";
import Footer from "../../components/blefaroplastiaLpSell2/8.footer";
import Faq from "../../components/blefaroplastiaLpSell/9.faq";

export default function BlefaroLpSell2() {
  return (
    <Styled.Container>
      <Banner />
      <Blepharoplasty />
      <Depoiments />
      <ClinicalStaff />
      <Location />
      <WhatsApp />
      <Faq />
    </Styled.Container>
  );
}
