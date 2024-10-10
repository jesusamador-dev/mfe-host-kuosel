import React, { Suspense, lazy } from "react";
import MainRouter from "@/presentation/routes/Router";
import SafeView from "./helpers/SafeView/SafeView";

const StylesProvider = lazy(
  () => import("mfe_ux_kuosel/providers/StylesProvider")
);

const App: React.FC = () => {
  return (
    <SafeView title="Error al cargar el Home Router">
      <Suspense fallback={<div>Loading...</div>}>
        <StylesProvider>
          <MainRouter />
        </StylesProvider>
      </Suspense>
    </SafeView>
  );
};

export default App;
