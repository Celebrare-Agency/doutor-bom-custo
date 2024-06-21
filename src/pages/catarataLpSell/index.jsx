// import * as Styled from "./style.js";
import Banner from "../../components/catarataLpSell/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/catarataLpSell/2.callUs/index";
import Price from "../../components/catarataLpSell/3.price";
import Depoiments from "../../components/catarataLpSell/4.depoiments";
import Location from "../../components/catarataLpSell/5.location/index";
import ModalComponent from "../../components/GLOBAL/modal-ads-catarata-urgencia/index";
import PromotionModal from "../../components/GLOBAL/Regressive -ads - catarata - count";
import Service from "../../components/catarataLpSell/6.cardsProcess";
import Check from "../../components/catarataLpSell/7.ChecksPart";
import Slideshow from "../../components/catarataLpSell/8.slide";
import Faq from "./../../components/1.home/5.faq/index";

export default function CatarataLpSell() {
  return (
    <>
      <Header />
      {/* <PromotionModal /> */}
      <Banner />
      <Service />
      <Contact />
      <Price />
      <Check />
      <Depoiments />
      {/* <Faq /> */}
      <Location />
      <Slideshow />
      <ModalComponent />
    </>
  );
}
