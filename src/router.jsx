import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// const Error = lazy(() => import("./pages/error/index"));
import Loading from "./components/loading/index";

const Home = lazy(() => import("./pages/homePage/index"));
const Ophthalmologist = lazy(() => import("./pages/Ophthalmologist/index"));
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* <Route path="/*" element={<Error />} /> */}
        <Route path="/development" element={<Home />} />
        <Route path="/oftalmo" element={<Ophthalmologist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
