import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

// Registrar el service worker para que tu aplicación funcione como una PWA
if (process.env.NODE_ENV === "production") {
  // Registrar el service worker
  import("./service-worker").then((module) => {
    module.register();
  });
} else {
  // En desarrollo, asegúrate de que el service worker esté desactivado
  navigator.serviceWorker?.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister();
    });
  });
}
