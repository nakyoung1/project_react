import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
     return (
          <div className="container">
               <Header />
               <main id="fullpage">
                    <section>
                         <div class="title">
                              <h3>더술닷컴</h3>
                              <p>
                                   농림축산식품부와 한국농수산식품유통공사가 전통주의 우수성과
                                   가치를 알리기 위해 운영하는 우리술 종합정보사이트입니다.
                              </p>
                              <Main />
                         </div>

                         <div class="map">
                              <h4>양조장 및 전통주 판매처 위치 안내</h4>
                              <ul class="link">
                                   <li>
                                        <p>양조장</p>
                                        <div>
                                             <button class="mapbtn">구글</button>
                                             <button class="mapbtn">네이버</button>
                                             <button class="mapbtn">카카오</button>
                                        </div>
                                   </li>
                                   <li>
                                        <p>전통주 판매처</p>
                                        <div>
                                             <button class="mapbtn">구글</button>
                                             <button class="mapbtn">네이버</button>
                                             <button class="mapbtn">카카오</button>
                                        </div>
                                   </li>
                                   <li>
                                        <p>전통주점</p>
                                        <div>
                                             <button class="mapbtn">구글</button>
                                             <button class="mapbtn">네이버</button>
                                             <button class="mapbtn">카카오</button>
                                        </div>
                                   </li>
                              </ul>
                         </div>
                         <div class="cardnews">
                              <p>
                                   <span>CARD</span>NEWS
                              </p>
                              <ul id="cardnews_image" class="slider">
                                   <li>
                                        <a href="">
                                             <img src="./img/sample.jpeg" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="">
                                             <img src="./img/sample.jpeg" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="">
                                             <img src="./img/sample.jpeg" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="">
                                             <img src="./img/sample.jpeg" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="">
                                             <img src="./img/sample.jpeg" />
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </section>
               </main>
          </div>
     );
}

export default App;
