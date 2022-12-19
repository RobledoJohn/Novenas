import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PasoUno from "./components/pasoUno";
import PasoDos from "./components/pasoDos";
import PasoTres from "./components/pasoTres";
import PasoCuatro from "./components/pasoCuatro";
import PasoCinco from "./components/pasoCinco";
import PasoSeis from "./components/pasoSeis";

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
