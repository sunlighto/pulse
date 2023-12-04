import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx"
import TarrifsPage from './pages/TarrifsPage';
import CatalogPage from './pages/CatalogPage';
import QuestionsPage from './pages/QuestionsPage';
import RentCarPage from './pages/RentCarPage';
import RentalConditionsPage from './pages/RentalConditionsPage';
import CarForSalePage from './pages/CarForSalePage';
import PageNotFound from './pages/PageNotFound';
import CarPage from './pages/CarPage';
import RentPage from "./pages/RentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pulse/home",
        element: <Home />,
      },
      {
        path: "pulse",
        element: <Home />,
      },
      {
        path: "tarrifs",
        element: <TarrifsPage />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "questions",
        element: <QuestionsPage />,
      },
      {
        path: "rent-car",
        element: <RentCarPage />,
      },
      {
        path: "rental-conditions",
        element: <RentalConditionsPage />,
      },
      {
        path: "car-for-sale",
        element: <CarForSalePage />,
      },
      {
        path: "car/:id",
        element: <CarPage />,
      },
      {
        path: "rent/:id",
        element: <RentPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Перемістити сторінку вверх при виклику компонента
  }, []);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );


}

export default App;
