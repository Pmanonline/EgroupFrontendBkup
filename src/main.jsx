// import React from "react";
// import { createRoot } from "react-dom";
// import { Provider } from "react-redux";
// import ToastProvider from "./components/tools/toastProvider.jsx";
// import App from "./App.jsx";
// import store from "./store.js";
// import "./index.css";

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   createRoot(rootElement).render(
//     <Provider store={store}>
//       <ToastProvider>
//         <App />
//       </ToastProvider>
//     </Provider>
//   );
// } else {
//   console.error("Element with id 'root' not found");
// }
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store, persistor } from "./store.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
