// import * as Styled from "./style.js";
import Banner from "../../components/refrativaLpSell2/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/refrativaLpSell2/2.callUs/index";
import Price from "../../components/refrativaLpSell2/3.price";
import Depoiments from "../../components/refrativaLpSell2/4.depoiments";
import Location from "../../components/refrativaLpSell2/5.location/index";
import ModalComponent from "../../components/GLOBAL/modal-ads-catarata-urgencia/index";
import PromotionModal from "../../components/GLOBAL/Regressive -ads - catarata - count";
import Service from "../../components/refrativaLpSell2/6.cardsProcess";
import Check from "../../components/refrativaLpSell2/7.ChecksPart";
import Slideshow from "../../components/refrativaLpSell2/8.slide";
import Faq from "../../components/1.home/5.faq/index";

export default function RefrativaLpSell2() {
  return (
    <>
      <Header />
      {/* <PromotionModal /> */}
      <Banner />
      <Service />
      <Contact />
      <Price />
      <Check />
      {/* <Depoiments /> */}
      {/* <Faq /> */}
      <Slideshow />
      {/* <ModalComponent /> */}
      <Location /> \{/* <ModalComponent /> */}
    </>
  );
}
