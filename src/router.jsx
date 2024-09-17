import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/GLOBAL/loading/index";

const Home = lazy(() => import("./pages/1.home/index"));
const Autoteste = lazy(() => import("./pages/autoteste/index"));
const RefrativaLpSell = lazy(() => import("./pages/refrativaLpSell/index"));
const Ortoceratologia = lazy(() =>
  import("./pages/ortoceratologiaLpSell/index")
);

const BlefaroplastiaLpSell = lazy(() =>
  import("./pages/blefaroplastiaLpSell/index")
);
const Ophthalmologist = lazy(() => import("./pages/consultaLpSellV1/index"));
const Politica = lazy(() => import("./pages/politica/index"));

const Catarata = lazy(() => import("./pages/Blog/catarata/index"));
const CatarataLpSell = lazy(() => import("./pages/catarataLpSell/index"));
const OphthalmologistParaisopolis = lazy(() =>
  import("./pages/consultaLpSellV1 - Paraisopolis/index")
);

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/development" element={<Home />} />
        <Route path="/blefaroplastia" element={<BlefaroplastiaLpSell />} />
        <Route path="/blog-Catarata" element={<Catarata />} />
        <Route path="/refrativa" element={<RefrativaLpSell />} />
        <Route path="/autoteste" element={<Autoteste />} />
        <Route path="/Catarata" element={<CatarataLpSell />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/Ortoceratologia" element={<Ortoceratologia />} />
        <Route
          path="/paraisopolis-consulta"
          element={<OphthalmologistParaisopolis />}
        />
        <Route path="/taboao-consulta" element={<Ophthalmologist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
