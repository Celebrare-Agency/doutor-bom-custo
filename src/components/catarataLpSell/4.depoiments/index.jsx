import * as Styled from "./style.js";
import { Link } from "react-router-dom";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Depoiments() {
  return (
    <Styled.Container>
      <div className="titlePart col">
        <h3>excelência</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="content col"></div>
    </Styled.Container>
  );
}
