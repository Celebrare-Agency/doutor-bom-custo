import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// const Error = lazy(() => import("./pages/error/index"));
import Loading from "./components/loading/index";
const Home = lazy(() => import("./pages/homePage/index"));
const Oftalmo = lazy(() => import("./pages/ophthalmologist/index"));
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/development" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/oftalmo" element={<Oftalmo />} />
      </Routes>
    </Suspense>
  );
}
