import "../Main/Main.css";

function MainLink({ children }) {
     return (
          <li className="mainlink">
               <a href="">
                    <div>
                         <p>{children}</p>
                    </div>
                    <img src="" alt="이미지" />
               </a>
          </li>
     );
}

export default function Main() {
     //     const mainContents = [
     //         { id: "", contents: `뉴스클리핑\n서비스신청`, img: "" },
     //         { id: "", contents: "", img: "" },
     //         { id: "", contents: "", img: "" },
     //         { id: "", contents: "", img: "" },
     //    ];
     const mainContents = { id: "1", contents: "뉴스클리핑\n서비스신청", img: "" };

     return (
          <ul className="main-page">
               <MainLink>{mainContents.contents}</MainLink>
               {/* <li>
                    <a href="">
                         <div>
                              <p>뉴스클리핑</p>
                              <p>서비스신청</p>
                         </div>
                         <img src="" alt="이미지" />
                    </a>
               </li> */}
               <li>
                    <a href="">
                         <div>
                              <p>문자메시지 신청</p>
                              <p>(전통주 정책지원사업 문자 전송)</p>
                         </div>
                         <img src="" alt="이미지" />
                    </a>
               </li>
               <li>
                    <a href="">
                         <div>
                              <p>신상술&프로모션</p>
                              <p>홍보 신청하기</p>
                         </div>
                         <img src="" alt="이미지" />
                    </a>
               </li>
               <li>
                    <a href="">
                         <div>
                              <p>찾아가는 양조장</p>
                              <p>체험 예약하기</p>
                         </div>
                         <img src="" alt="이미지" />
                    </a>
               </li>
          </ul>
     );
}
