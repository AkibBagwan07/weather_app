import './App.css';
import HomePage from './homepage/homepage';
import WeatherChart from './weatherChart/weatherChart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weatherReport" element={<WeatherChart />} />       
       </Routes>
      </BrowserRouter> */}
     <HomePage />
    </div>
  );
}

export default App;
