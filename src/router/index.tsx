import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Motoristas } from "../pages/Motoristas";
import { Veiculos } from "../pages/Veiculos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/motoristas",
    element: <Motoristas/>,
  },
  {
    path: "/veiculos",
    element: <Veiculos/>,
  },
]);