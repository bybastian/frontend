import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home"
import MisCitas from "../pages/MisCitas"
import CrearCitas from "../pages/CrearCitas"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/mis-citas",
        element: <MisCitas />,
    },
    {
        path: "/crear-citas",
        element: <CrearCitas />
    }
]);