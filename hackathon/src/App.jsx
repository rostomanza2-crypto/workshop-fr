import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Features from "./components/features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact";
import GetStarted from "./components/getstarted";
import Footer from "./components/footer";

// Global Scroll to Top Helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <ScrollToTop />
      <div
        className={`${theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"} min-h-screen`}
      >
        <Routes>
          {/* 1. Main Landing Page Route */}
          <Route
            path='/'
            element={
              <>
                <Navbar theme={theme} setTheme={setTheme} />
                <div className='pt-18'>
                  <Hero theme={theme} />
                  <Aboutus theme={theme} />
                  <Features theme={theme} />
                  <Testimonials theme={theme} />
                  <Contact theme={theme} />
                </div>
                <Footer theme={theme} />
              </>
            }
          />

          {/* 2. Isolated Get Started Page Route */}
          <Route path='/get-started' element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
