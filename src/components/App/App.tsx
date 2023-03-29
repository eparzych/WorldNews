import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/" Component={Main} />
          <Route path="/country/:countryCode" Component={Main} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
