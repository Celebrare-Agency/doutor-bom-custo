import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/GLOBAL/loading/index";

const Home = lazy(() => import("./pages/homePage/index"));
const Oftalmo = lazy(() => import("./pages/Ophthalmologist/index"));
const OphthalmologistGuarulhos = lazy(() =>
  import("./pages/Ophthalmologist  Guarulhos/index")
);
const OphthalmologistParaisopolis = lazy(() =>
  import("./pages/Ophthalmologist  Paraisopolis/index")
);
const Seller2 = lazy(() =>
  import("./pages/landing page sell Opthalmologist/index")
);
const GuarulhosSeller2 = lazy(() =>
  import("./pages/GUARULHOS landing page sell Opthalmologist/index")
);
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/development" element={<Home />} />
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
