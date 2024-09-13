import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import ToastProvider from "./components/tools/toastProvider.jsx";
import App from "./App.jsx";
import store from "./store.js";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  );
} else {
  console.error("Element with id 'root' not found");
}
