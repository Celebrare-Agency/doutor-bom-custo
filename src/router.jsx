import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// const Error = lazy(() => import("./pages/error/index"));
const Home = lazy(() => import("./pages/homePage/index"));
export function Router() {
  return (
    <Suspense fallback={"carregando"}>
      <Routes>
        {/* <Route path="/*" element={<Error />} /> */}

        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
