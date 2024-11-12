import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Preloader from "./Components/Preloader/Preloader";
import FinincalHilight from "./Pages/Finincal-Hilights/FinincalHilight";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Home/LandingPage";
import ChairmanMessage from "./Pages/Chairman's/Chairman'sMessage";
import ProductPortfolioMain from "./Pages/ProductProtfoliomain/ProductProtfoliomain";
import Itintregation from "./Pages/It/Itintregation";
import Csr from "./Pages/CSR/Csr";
import ScrollToTop from "./Components/crollToTop";
import People from "./Pages/People/People";
import Patnerships from "./Pages/Patnerships/Patnerships";
import Planet from "./Pages/Planet/Planet";
import RiskAndOpportunities from "./Pages/Governance/RiskAndOpportunities";
import Awards from "./Pages/Awards/Awards";
import SalesAndExports from "./Pages/SalesAndExports/SalesAndExports";
import Footer from "./Components/Footer/Footer";
import Exports from './Pages/SalesAndExports/Exports';
import NutritionAndMilkProducts from './Pages/ProductProtfoliomain/NutritionAndMilkProducts';
import PreparedDishes from "./Pages/ProductProtfoliomain/PreparedDishes";
import Confectoriy from "./Pages/ProductProtfoliomain/Confectoriy";
import PowerdAndBeavrage from './Pages/ProductProtfoliomain/PowerdAndBeavrage';
import OutOfHome from "./Pages/ProductProtfoliomain/OutOfHome";
function App() {
  // Check if content has already been loaded
  const [isLoaded, setIsLoaded] = useState(
    localStorage.getItem("isLoaded") === "true"
  );

  // Function to handle content loading
  const loadContent = () => {
    // Your content loading logic here

    // Set isLoaded to true and store it in localStorage
    setIsLoaded(true);
    localStorage.setItem("isLoaded", "true");
  };

  useEffect(() => {
    // Check if content has already been loaded
    if (!isLoaded) {
      // If not loaded, load content
      loadContent();
    }
  }, [isLoaded]);

  // Render the preloader if content is not loaded
  if (!isLoaded) {
    return <Preloader />;
  }

  // Render the app content once loaded
  return (
    <div className="app-parent max-w-[100vw]">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/finincial-highlights" element={<FinincalHilight />} />
            <Route path="/Chairman's-message" element={<ChairmanMessage />} />
            <Route
              path="/Product-portfolio"
              element={<ProductPortfolioMain />}
            />
            <Route path="/IT-integration" element={<Itintregation />} />
            <Route path="/csr" element={<Csr />} />
            <Route path="/people" element={<People />} />
            <Route path="/partnerships" element={<Patnerships />} />
            <Route path="/Plante" element={<Planet />} />
            <Route
              path="/Risks-and-opportunities"
              element={<RiskAndOpportunities />}
            />
            <Route path="/Awards" element={<Awards />} />
            <Route path="/Sales" element={<SalesAndExports />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/nutrition-and-milk-products" element={<NutritionAndMilkProducts />} />

            <Route path="/prepared-dishes-and-cooking-aids" element={<PreparedDishes />} />
            <Route path="/confectionery" element={<Confectoriy />} />
            <Route path="/Powdered-and-liquid-beverages" element={<PowerdAndBeavrage />} />
            <Route path="/Out-of-Home" element={<OutOfHome />} />
          </Routes>
        </ScrollToTop>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
