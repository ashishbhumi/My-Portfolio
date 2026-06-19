import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-32">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
