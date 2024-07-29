import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/GLOBAL/loading/index";

const Home = lazy(() => import("./pages/1.home/index"));
const RefrativaLpSell = lazy(() => import("./pages/refrativaLpSell/index"));

const BlefaroplastiaLpSell = lazy(() =>
  import("./pages/blefaroplastiaLpSell/index")
);
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
        <Route path="/Catarata" element={<CatarataLpSell />} />
        <Route path="/politica" element={<Politica />} />
        <Route
          path="/paraisopolis-consulta"
          element={<OphthalmologistParaisopolis />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
