import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import About from "./components/About.tsx";
import "./index.css";
import ErrorPage from "./ErrorPage.tsx";
import ProductDetailsScreen from "./pages/ProductDetailsScreen.tsx";
import CartScreen from "./pages/CartScreen.tsx";
import Layout from "./Layout.tsx";
import ContactScreen from "./pages/ContactScreen.tsx";
import SignupScreen from "./pages/SignupScreen.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<App />} />
      <Route
        path="/about"
        element={<About title="About" description="This is the about page" />}
      />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/signup" element={<SignupScreen />} />

      <Route path="/product/:id" element={<ProductDetailsScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
