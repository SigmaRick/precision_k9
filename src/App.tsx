import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import EvaluationPage from './pages/EvaluationPage';
import DayTrainingPage from './pages/DayTrainingPage';
import OffLeashTrainingPage from './pages/OffLeashTrainingPage';
import DoggyDaycarePage from './pages/DoggyDaycarePage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <ThemeProvider>
      <div className="font-sans bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollToTop />
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          toggleMenu={toggleMenu} 
          MenuIcon={Menu} 
          XIcon={X} 
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/evaluation" element={<EvaluationPage />} />
            <Route path="/services/day-training" element={<DayTrainingPage />} />
            <Route path="/services/off-leash-training" element={<OffLeashTrainingPage />} />
            <Route path="/services/doggy-daycare" element={<DoggyDaycarePage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;