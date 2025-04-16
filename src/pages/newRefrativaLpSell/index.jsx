import * as Styled from "./style.js";

import Banner from "../../components/newRefrativaLpSell/banner";
import Declaration from "../../components/newRefrativaLpSell/declaration";
import Solution from "../../components/newRefrativaLpSell/solution/index.jsx";
import Location from "../../components/newRefrativaLpSell/location/index.jsx";
import Questions from "../../components/newRefrativaLpSell/questions";
import Wpp from "../../components/newRefrativaLpSell/wpp/index.jsx";
import Faq from "../../components/blefaroplastiaLpSell/9.faq";

export default function RefrativaLpSell2() {
  return (
    <Styled.Container>
      <Banner />
      <Declaration />
      <Questions /> 
      <Solution />
      <Location /> 
      <Wpp />
      <Faq />
    </Styled.Container>
  );
}
