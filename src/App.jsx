import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
/* import SplashCursor from "./components/SplashCursor"; */
/* import Waves from "./components/Waves"; */

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3.5]">
          <Home />
          <Experience />
          <Project />
          <Contact />
          <Footer />
          {/*     <SplashCursor /> */}
        </main>
      </div>
    </>
  );
}

export default App;
