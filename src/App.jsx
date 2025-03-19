import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import FullPage from "./components/Fullpage/Fullpage.jsx";
import Map from "./components/Map/Map.jsx";
import CardNews from "./components/Cardnews/Cardnews.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Whatis from "./components/Whatis/Whatis.jsx";
import "./App.css";

function App() {
     return (
          <Router>
               <Header />
               <main className="fullpage">
                    <Routes>
                         <Route
                              path="/"
                              element={
                                   <>
                                        <FullPage />
                                        <Map />
                                        <CardNews />
                                   </>
                              }
                         />
                         <Route path="/whatis" element={<Whatis />} />
                    </Routes>
               </main>
               <Footer />
          </Router>
     );
}

export default App;
