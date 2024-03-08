// import * as Styled from "./style.js";
import Header from "../../components/GLOBAL/header/index";
import Service from "../../components/consultaLpSellV2 - Guarulhos/2.service";
import Exames from "../../components/consultaLpSellV2 - Guarulhos/4.exames";
import Comparative from "../../components/consultaLpSellV2 - Guarulhos/5.comparative";
import Check from "../../components/consultaLpSellV2 - Guarulhos/3.ChecksPart";
import Banner from "../../components/consultaLpSellV2 - Guarulhos/1.banner/index";
export default function GuarulhosSeller2() {
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
