import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSettingsContext } from "./hooks/useSettingsContext";

export const AppRoutes = () => {
  const { globalSettings } = useSettingsContext();

  return (
    <>
      <GlobalStyles $settings={globalSettings} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
