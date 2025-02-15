import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/GLOBAL/loading/index";

const Home = lazy(() => import("./pages/1.home/index"));
const OphthalmologistParaisopolisMedicoDosolhos = lazy(() =>
  import("./pages/consultaLpSellV1 - Paraisopolis  Medico dos olhos/index")
);

const Tercol = lazy(() => import("./pages/Blog/terçol/index"));
const Oftalmo = lazy(() => import("./pages/consultaLpSellV1/index"));
const Politica = lazy(() => import("./pages/politica/index"));
const CatarataTks = lazy(() => import("./pages/obrigado-catarata/index"));
const Queimadura = lazy(() => import("./pages/Blog/queimadura-oculares/index"));
const Colirios = lazy(() => import("./pages/Blog/diferença-colirios/index"));
const OphthalmologistGuarulhos = lazy(() =>
  import("./pages/consultaLpSellV1 - Guarulhos/index")
);
const OphthalmologistParaisopolis = lazy(() =>
  import("./pages/consultaLpSellV1 - Paraisopolis/index")
);
const Seller2 = lazy(() => import("./pages/consultaLpSellV2/index"));
const Catarata = lazy(() => import("./pages/Blog/catarata/index"));
const CatarataLpSell = lazy(() => import("./pages/catarataLpSell/index"));
const GuarulhosSeller2 = lazy(() =>
  import("./pages/consultaLpSellV2 - Guarulhos/index")
);

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/queimadura" element={<Queimadura />} />
        <Route path="/colorios" element={<Colirios />} />
        <Route path="/development" element={<Home />} />
        <Route path="/blog-Catarata" element={<Catarata />} />
        <Route path="/Catarata" element={<CatarataLpSell />} />
        <Route path="/obrigado-catarata" element={<CatarataTks />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/Tercol" element={<Tercol />} />
        <Route
          path="/medico-dos-olhos"
          element={<OphthalmologistParaisopolisMedicoDosolhos />}
        />
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
