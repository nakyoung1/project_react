import styles from "../Fullpage/Fullpage.module.css";
import img1 from "../../assets/fullpage1.png";
import img2 from "../../assets/fullpage2.png";
import img3 from "../../assets/fullpage3.png";
import img4 from "../../assets/fullpage4.png";

function Title() {
     return (
          <div className={styles.title}>
               <h3>한술담다</h3>
               <p>한 잔의 술에 전통과 이야기를 담다.</p>
               <p>다양한 전통주에 대해 알아보고, 나와 어울리는 전통주를 찾아보세요.</p>
          </div>
     );
}

function List2({ link, title, img }) {
     return (
          <li className={styles.link}>
               <a href={link}>
                    <p>{title}</p>
                    <img src={img} alt="이미지" />
               </a>
          </li>
     );
}
function UList2({ links }) {
     return (
          <ul className={styles.main_page}>
               {links.map((item, index) => (
                    <List2 key={index} link={item.link} title={item.title} img={item.img} />
               ))}
          </ul>
     );
}

export default function Main() {
     const links = [
          { link: "", title: "전통주란?", img: img1 },
          { link: "", title: "전통주 검색하기", img: img2 },
          { link: "", title: "전통주와 어울리는 음식", img: img3 },
          { link: "", title: "이 달의 전통주", img: img4 },
     ];
     return (
          <div>
               <Title />
               <UList2 links={links} />
          </div>
     );
}
