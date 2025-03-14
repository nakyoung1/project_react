import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import FullPage from "./components/Fullpage/Fullpage.jsx";
import Map from "./components/Map/Map.jsx";
import CardNews from "./components/Cardnews/Cardnews.jsx";
import "./App.css";

function App() {
     return (
          <div>
               <Header />
               <main class="fullpage">
                    <FullPage />
                    <Map />
                    <CardNews />
               </main>
               <footer>푸터</footer>
          </div>
     );
}

export default App;
