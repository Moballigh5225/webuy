import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/AboutScreen.tsx";
import "./index.css";
import ErrorPage from "./ErrorPage.tsx";
import ProductDetailsScreen from "./pages/ProductDetailsScreen.tsx";
import CartScreen from "./pages/CartScreen.tsx";
import Layout from "./Layout.tsx";
import ContactScreen from "./pages/ContactScreen.tsx";
import SignupScreen from "./pages/SignupScreen.tsx";
import { RecoilRoot } from "recoil";
import HomeScreen from "./pages/HomeScreen.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<HomeScreen />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/signup" element={<SignupScreen />} />

      <Route path="/productDetails/:id" element={<ProductDetailsScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
