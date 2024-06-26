// import * as Styled from "./style.js";
import Banner from "../../components/blefaroplastiaLpSell/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/blefaroplastiaLpSell/2.callUs/index";
import Price from "../../components/blefaroplastiaLpSell/3.price";
import Depoiments from "../../components/blefaroplastiaLpSell/4.depoiments";
import Location from "../../components/blefaroplastiaLpSell/5.location/index";
import WhatIs from "../../components/blefaroplastiaLpSell/6.whatIsBlefaroplastia";
import Service from "../../components/blefaroplastiaLpSell/10.cardsProcess";
import CheckBlefaro from "../../components/blefaroplastiaLpSell/7.ChecksPart";
import SlideshowBlefaro from "../../components/blefaroplastiaLpSell/8.slide";
import Faq from "../../components/blefaroplastiaLpSell/9.faq";
// import PromotionModal from "../../components/GLOBAL/Regressive -ads - catarata - count";

export default function BlefaroLpSell() {
  return (
    <>
      <Header />
      {/* <PromotionModal /> */}
      <Banner />
      <Service />
      <WhatIs />
      <Contact />
      <Price />
      <CheckBlefaro />
      <Depoiments />
      <SlideshowBlefaro />
      <Location />
      <Faq />
    </>
  );
}
