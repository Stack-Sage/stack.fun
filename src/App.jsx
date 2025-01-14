import React from "react";
import Stack from "./components/Stack";
import { Head } from "./components/Head";
import { Routes, Route } from "react-router-dom"; 
import Contact from "./components/Contact";
import About from "./components/About";
import LinesComponent from "./components/Line"; 
import Footer from "./components/Footer";




const App = () => {
  return (
    <div className="flex flex-col relative text-black text-2xl bg-gradient-to-br from-blue-950 to-black w-full h-full">
      
      <div className="relative top-0 w-full h-[10px]">
        <Head />
      </div>

      
      <div className="pt-[50px] w-full h-full  z-20">
        <Routes>
          <Route path="/" element={<Stack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Lines component placed below main content with opacity */}
      <div className="fixed  top-0 scale-150  w-full z-10 opacity-50 blur-md ">
          <LinesComponent/>
      </div>

      <div className=" z-30  opacity-90 w-full">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
