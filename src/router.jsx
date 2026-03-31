import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/GLOBAL/loading/index";

const Linktree = lazy(() => import("./pages/link/index"));
const Home = lazy(() => import("./pages/1.home/index"));
const Autoteste = lazy(() => import("./pages/autoteste/index"));
const RefrativaLpSell = lazy(() => import("./pages/refrativa2026/index"));
const RefrativaLpSell2 = lazy(() => import("./pages/refrativaLpSell2/index"));
const Ortoceratologia = lazy(() =>
  import("./pages/ortoceratologiaLpSell/index")
);

const BlefaroplastiaLpSell = lazy(() =>
  import("./pages/blefaroplastiaLpSell/index")
);
const BlefaroplastiaLpSell2 = lazy(() =>
  import("./pages/blefaroplastiaLpSell2/index")
);
const Ophthalmologist = lazy(() => import("./pages/consultaLpSellV1/index"));
const Politica = lazy(() => import("./pages/politica/index"));

const Catarata = lazy(() => import("./pages/Blog/catarata/index"));
const CatarataLpSell = lazy(() => import("./pages/catarataLpSell/index"));
const OphthalmologistParaisopolis = lazy(() =>
  import("./pages/consultaLpSellV1 - Paraisopolis/index")
);

const Adesve = lazy(() => import("./pages/newRefrativaLpSell"));

const BlefaroForm = lazy(() =>
  import("./components/PagesForm/blefaroplastia form/index")
);
const CatarataForm = lazy(() =>
  import("./components/PagesForm/catarata form/index")
);
const RefrativaForm = lazy(() =>
  import("./components/PagesForm/refrativa form/index")
);
const LiftingForm = lazy(() => import("./components/PagesForm/LiftingFacial"));
const RefrativaLpSell3 = lazy(() => import("./pages/newRefrativaLpSell/index"));
const FormsTeste = lazy(() => import("./components/Forms/RD Forms/index"));
const RefrativaTypeform = lazy(() =>
  import("./components/typeform/refrativa/index")
);

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/development" element={<Home />} />
        <Route path="/links" element={<Linktree />} />
        <Route path="/blefaroplastia2" element={<BlefaroplastiaLpSell />} />
        <Route path="/blefaroplastia" element={<BlefaroplastiaLpSell2 />} />
        <Route path="/blog-Catarata" element={<Catarata />} />
        <Route path="/refrativa" element={<RefrativaLpSell />} />
        <Route path="/refrativa2" element={<RefrativaLpSell2 />} />
        <Route path="/autoteste" element={<Autoteste />} />
        <Route path="/Catarata" element={<CatarataLpSell />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/refrativa3" element={<RefrativaLpSell3 />} />
        <Route path="/Ortoceratologia" element={<Ortoceratologia />} />
        <Route path="/BlefaroForm" element={<BlefaroForm />} />
        <Route path="/LiftingForm" element={<LiftingForm />} />
        <Route path="/CatarataForm" element={<CatarataForm />} />
        <Route path="/RefrativaForm" element={<RefrativaForm />} />
        <Route
          path="/paraisopolis-consulta"
          element={<OphthalmologistParaisopolis />}
        />
        <Route path="/taboao-consulta" element={<Ophthalmologist />} />
        <Route path="/forms-rd" element={<FormsTeste />} />
        <Route path="/RefrativaQuiz" element={<RefrativaTypeform />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
