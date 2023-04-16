import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.scss';
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { NotFound } from "../NotFound/NotFound"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/country/us"/>} />
          <Route path="/country/:countryCode" element={<Main/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
