import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import CampsitesDirectoryPage from "./pages/ServicesDirectoryPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<ServiceDetailPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
