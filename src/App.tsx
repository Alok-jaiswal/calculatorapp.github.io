import "./App.css";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import SIPContainer from "./components/SIPContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AgeCalculator from "./components/AgeCalculator";
import CAGRCalculator from "./components/CAGRCalculator";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/calculator" element={<Container />} />
        <Route path="/sipcalculator" element={<SIPContainer />} />
        <Route path="/agecalculator" element={<AgeCalculator/>} />
        <Route path="/cagrcalculator" element={<CAGRCalculator/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
