// import * as Styled from "./style.js";
import Header from "../../components/GLOBAL/header/index";
import Service from "../../components/consultaLpSellV2/2.service";
import Exames from "../../components/consultaLpSellV2/4.exames";
import Comparative from "../../components/consultaLpSellV2/5.comparative";
import Check from "../../components/consultaLpSellV2/3.ChecksPart";
import Banner from "../../components/consultaLpSellV2/1.banner/index";
export default function Seller2() {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Check />
      <Exames />
      <Comparative />
    </>
  );
}
