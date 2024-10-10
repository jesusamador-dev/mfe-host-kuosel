import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SafeView from "@/helpers/SafeView/SafeView";

const HomeRouter = lazy(() => import("mfe_home_kuosel/router/HomeRouter"));

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route
              path="/*"
              element={
                <SafeView title="Módulo no disponible">
                  <HomeRouter />
                </SafeView>
              }
            />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRouter;
