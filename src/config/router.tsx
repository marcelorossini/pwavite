import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import ErrorPage from "@/error-page";
import Produtos from "@/pages/produtos";
import Lista from "@/pages/lista";
import Favoritos from "@/pages/favoritos";
import Galeria from "@/pages/galeria";
import Setores from "@/pages/setores";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lista",
    element: <Lista />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/galeria",
    element: <Galeria />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/produtos/:id",
    element: <Produtos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/setores/:id",
    element: <Setores />,
    errorElement: <ErrorPage />,
  },
]);
