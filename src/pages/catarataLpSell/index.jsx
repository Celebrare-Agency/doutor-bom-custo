// import * as Styled from "./style.js";
import Banner from "../../components/catarataLpSell/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/catarataLpSell/2.callUs/index";
import Price from "../../components/catarataLpSell/3.price";
import Depoiments from "../../components/catarataLpSell/4.depoiments";
import ButtonWpp from "../../components/catarataLpSell/buttonFixed/index";
import Location from "../../components/catarataLpSell/5.location/index";
export default function CatarataLpSell() {
  return (
    <>
      <ButtonWpp style={{ zIndex: 9999999 }} />
      <Header />
      <Banner />
      <Contact />
      <Price />
      <Depoiments />
      <Location />{" "}
    </>
  );
}
