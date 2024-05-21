import * as Styled from "./style.js";
import Map from "./Map/maps";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
export default function Location() {
  return (
    <Styled.Container id="conversion">
      <div className="titlePart col">
        <h3>Estamos localizados no coração de São Paulo</h3>
        <p>
          Estamos aqui no edifício Itália, no quinto andar, a 5 minutos da
          estação republica.
        </p>
      </div>
      <Map />
      <BtnAds />{" "}
    </Styled.Container>
  );
}
