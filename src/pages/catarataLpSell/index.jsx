// import * as Styled from "./style.js";
import Banner from "../../components/catarataLpSell/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/catarataLpSell/2.callUs/index";
import Price from "../../components/catarataLpSell/3.price";
import Depoiments from "../../components/catarataLpSell/4.depoiments";
import Location from "../../components/catarataLpSell/5.location/index";
import Modal from "../../components/GLOBAL/modal-ads-catarata-urgencia/index";
import PromotionModal from "../../components/GLOBAL/Regressive -ads - catarata - count";

export default function CatarataLpSell() {
  return (
    <>
      <Header style={{ display: "none" }} />
      {/* <PromotionModal /> */}
      <Modal />
      <Banner />
      <Contact />
      <Price />
      <Depoiments />
      <Location />{" "}
    </>
  );
}
