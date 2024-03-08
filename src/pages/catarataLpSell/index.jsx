// import * as Styled from "./style.js";
import Banner from "../../components/catarataLpSell/1.banner";
import Header from "../../components/GLOBAL/header";
import Contact from "../../components/catarataLpSell/2.callUs/index";
import Price from "../../components/catarataLpSell/3.price";
import Depoiments from "../../components/catarataLpSell/4.depoiments";
export default function CatarataLpSell() {
  const styleObj = {
    textAlign: "Center",
    fontWeight: "500",
    color: "var(--blue)",
  };
  return (
    <>
      <Header />
      <Banner />
      <Contact />
      <Price />
      <Depoiments />
    </>
  );
}
