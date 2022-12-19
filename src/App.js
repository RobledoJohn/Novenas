import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PasoUno from "./components/pasoUno";
import PasoDos from "./components/pasoUno";



import PasoTres from "./components/pasoUno";
import PasoCuatro from "./components/pasoUno";
import PasoCinco from "./components/pasoUno";
import PasoSeis from "./components/pasoUno";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/horacion-para-todos-los-dias"
          element={
            <PasoUno />
          }
        />
        <Route
          path="/dias"
          element={
            <PasoDos />
          }
        />
        <Route
          path="/horacion-a-la-santisima-virgen"
          element={
            <PasoTres />
          }
        />
        <Route
          path="/horacion-a-san-jose"
          element={
            <PasoCuatro />
          }
        />
        <Route
          path="/gozos"
          element={
            <PasoCinco />
          }
        />
        <Route
          path="/horacion-al-niño-jesus"
          element={
            <PasoSeis />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
