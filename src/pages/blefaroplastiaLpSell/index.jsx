// import * as Styled from "./style.js";
import Banner from "../../components/blefaroplastiaLpSell/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/blefaroplastiaLpSell/2.callUs/index";
import Price from "../../components/blefaroplastiaLpSell/3.price";
import Depoiments from "../../components/blefaroplastiaLpSell/4.depoiments";
import Location from "../../components/blefaroplastiaLpSell/5.location/index";
import ModalComponent from "../../components/GLOBAL/modal-ads-catarata-urgencia/index";

export default function BlefaroplastiaLpSell() {
  return (
    <>
      <Header />
      <Banner />
      <Contact />
      <Price />
      <Depoiments />
      <Location /> <ModalComponent />
    </>
  );
}
