import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Jobs from './components/Jobs';
import Portel from './components/Portel';
import TermsAndCondition from './components/TermsAndCondition';
import JobTable from './components/JobTable';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="router">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/About" element={<About />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Portel" element={<Portel />} />
            <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
            <Route path="/JobTable" element={<JobTable  />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
