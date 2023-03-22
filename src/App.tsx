import React from 'react';
import './App.scss';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
