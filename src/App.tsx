// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Components from './pages/Components/Components';
import Utilities from './pages/Utilities';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples/Examples';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

import Footer from './components/Footer/Footer';

import Button from './components/Button/Button';
import NavbarSection from './components/NavbarSection/NavbarSection';
import CardSection from './components/CardSection/CardSection';
import AboutPage from './components/AboutPage/AboutPage';
import AboutPage1 from './components/AboutPage/AboutPage1';
import AboutPage2 from './components/AboutPage/AboutPage2';
import AboutPage3 from './components/AboutPage/AboutPage3';
import LoginPage from './components/LoginPage/LoginPage';
import LoginPage1 from './components/LoginPage/LoginPage1';
import LoginPage2 from './components/LoginPage/LoginPage2';
import LoginPage3 from './components/LoginPage/LoginPage3';
import PricingPage from './components/PricingPage/PricingPage';
import PricingPage1 from './components/PricingPage/PricingPage1';
import PricingPage2 from './components/PricingPage/PricingPage2';
import FeatureSection from './components/FeatureSection/FeatureSection';
import FeatureSection1 from './components/FeatureSection/FeatureSection1';
import FeatureSection2 from './components/FeatureSection/FeatureSection2';
import FeatureSection3 from './components/FeatureSection/FeatureSection3';
import CTASection from './components/CTASection/CTASection';
import CTASection1 from './components/CTASection/CTASection1';
import CTASection2 from './components/CTASection/CTASection2';
import CTASection3 from './components/CTASection/CTASection3';
import HeroSection from './components/HeroSection/HeroSection';
import HeroSection1 from './components/HeroSection/HeroSection1';
import HeroSection2 from './components/HeroSection/HeroSection2';
import ContactPage from './components/ContactPage/ContactPage';
//import HeroSection3 from './components/HeroSection/HeroSection3';
import Template1 from './pages/Examples/Template1/Template1';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/button" element={<Button/>} />
          <Route path="/navbarsection" element={<NavbarSection/>} />
          <Route path="/cardsection" element={<CardSection/>} />
          <Route path="/aboutpage" element={<AboutPage/>} />
          <Route path="/aboutpage1" element={<AboutPage1/>} />
          <Route path="/aboutpage2" element={<AboutPage2/>} />
          <Route path="/aboutpage3" element={<AboutPage3/>} />
          <Route path="/loginpage" element={<LoginPage/>} />
          <Route path="/loginpage1" element={<LoginPage1/>} />
          <Route path="/loginpage2" element={<LoginPage2/>} />
          <Route path="/loginpage3" element={<LoginPage3/>} />
          <Route path="/pricingpage" element={<PricingPage/>} />
          <Route path="/pricingpage1" element={<PricingPage1/>} />
          <Route path="/pricingpage2" element={<PricingPage2/>} />
          <Route path="/featuresection" element={<FeatureSection/>} />
          <Route path="/featuresection1" element={<FeatureSection1/>} />
          <Route path="/featuresection2" element={<FeatureSection2/>} />
          <Route path="/featuresection3" element={<FeatureSection3/>} />
          <Route path="/ctasection" element={<CTASection/>} />
          <Route path="/ctasection1" element={<CTASection1/>} />
          <Route path="/ctasection2" element={<CTASection2/>} />
          <Route path="/ctasection3" element={<CTASection3/>} />
          <Route path="/herosection" element={<HeroSection />} />
          <Route path="/herosection1" element={<HeroSection1 />} />
          <Route path="/herosection2" element={<HeroSection2 />} />
          <Route path="/examples/template1" element={<Template1 />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
};

export default App;
