import ColoradoSessionsLogo from "/src/assets/ColoradoSessionsLogo.png";
import "./App.css";
import Overview from "/src/components/Overview";
import SandboxNav from "/src/components/SandboxNav";
import Learned from "/src/components/Learned";
import Performances from "/src/components/Performances";
import About from "/src/components/About";
import NotFound from "/src/components/NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <SandboxNav />
      <section className="m-25 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src={ColoradoSessionsLogo}
          className="base col-span-1"
          height="200"
          alt="Colorado Sessions Logo"
        />
        <div className="Content col-span-1 md:col-span-2">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/learned" element={<Learned />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/about" element={<About />} />
            {/* Catch-all route for 404s */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
