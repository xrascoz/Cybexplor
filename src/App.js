
import './App.css';
import Header from './page/Header';
import HeroSection from './page/HeroSection';
import ServicesSection from './page/services-section/ServicesSection';
import CompanySection from './page/company-section/CompanySection';
import HowWeWork from './page/how-we-work/HowWeWork';
import Achievement from './page/achievement/Achievement';


import { useEffect } from 'react';


import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection/>
      <CompanySection/>
      <HowWeWork/>
      <Achievement/>
    </div>
  );
}

export default App;
