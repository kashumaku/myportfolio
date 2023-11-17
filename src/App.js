import Home from "./pages/home";
import { toggleMenuContext } from "./context";
import { useState } from "react";
import Menu from "./components/menu";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="bg-[#111111] text-white relative ">

      <toggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
        <BrowserRouter>
          <span className='hidden lg:block fixed z-20 right-0 top-[20%] text-white m-8'><Menu /></span>
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </BrowserRouter>
      </toggleMenuContext.Provider>

    </div>
  );
}

export default App;
