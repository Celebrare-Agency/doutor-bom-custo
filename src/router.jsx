import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/GLOBAL/loading/index";

const Home = lazy(() => import("./pages/1.home/index"));
const Oftalmo = lazy(() => import("./pages/consultaLpSellV1/index"));
const OphthalmologistGuarulhos = lazy(() =>
  import("./pages/consultaLpSellV1 - Guarulhos/index")
);
const OphthalmologistParaisopolis = lazy(() =>
  import("./pages/consultaLpSellV1 - Paraisopolis/index")
);
const Seller2 = lazy(() => import("./pages/consultaLpSellV2/index"));
const CatarataLpSell = lazy(() => import("./pages/catarataLpSell/index"));
const GuarulhosSeller2 = lazy(() =>
  import("./pages/consultaLpSellV2 - Guarulhos/index")
);
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/development" element={<Home />} />
        <Route path="/Catarata" element={<CatarataLpSell />} />
        <Route path="/" element={<Home />} />
        <Route path="/oftalmo-taboaodaserra-v2" element={<Seller2 />} />
        <Route path="/oftalmo-guarulhos-v2" element={<GuarulhosSeller2 />} />
        <Route path="/oftalmo-taboaodaserra" element={<Oftalmo />} />
        <Route
          path="/oftalmo-guarulhos"
          element={<OphthalmologistGuarulhos />}
        />{" "}
        <Route
          path="/oftalmo-paraisopolis"
          element={<OphthalmologistParaisopolis />}
        />
      </Routes>
    </Suspense>
  );
}
