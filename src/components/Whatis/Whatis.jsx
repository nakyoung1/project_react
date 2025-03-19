import "../Whatis/Whatis.css";

function Whatis() {
     return (
          <div>
               <h3 className="meaning_name">전통주란?</h3>
               <div className="meaning_container">
                    <section className="meaning_box">
                         <article className="meaning_title">
                              <p>법적정의</p>
                              <p>
                                   전통주 등의 산업진흥에 관한 법률'에 따라 다음에 해당하는 술을
                                   말한다.
                              </p>
                         </article>
                         <article className="meaning_content">
                              <ol>
                                   <li>주류부문의 무형문화재 보유자가 제조한 술</li>
                                   <li>대한민국 식품명인이 제조한 술</li>
                                   <li>
                                        농어업경영체 또는 생산자단체가 지역농산물을 주원료로 제조한
                                        술 (지역특산주)
                                   </li>
                              </ol>
                         </article>
                    </section>
                    <section className="meaning_box">
                         <article className="meaning_title">
                              <p>관습적 의미</p>
                         </article>
                         <article className="meaning_content">
                              <p>
                                   한 나라나 지역 등에 과거에서부터 이어져오는 양조법으로 만든 술로,
                                   전통적인 양조법을 계승 및 보존하여 빚는 술을 칭한다.
                              </p>
                              <p>
                                   한국의 정서 및 시대상을 반영하는 술로서 과거의 생활방식, 역사와
                                   문화가 담겨있는 술로 정의할 수 있다.
                              </p>
                         </article>
                    </section>
               </div>
          </div>
     );
}

export default Whatis;
