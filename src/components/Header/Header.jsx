import { useEffect, useRef, useState } from "react";
import menuBar from "../../assets/but_toggle.png";
import logoImg from "../../assets/png_logo.png";
import styles from "../Header/Header.module.css";

function List({ link, title }) {
     return (
          <li>
               <a href={link}>{title}</a>
          </li>
     );
}
function UList({ links, className }) {
     return (
          <ul className={className}>
               {links.map((item, index) => (
                    <List key={index} link={item.link} title={item.title} />
               ))}
          </ul>
     );
}

export default function Header() {
     const [isOpen, setIsOpen] = useState(false);
     const handleToggle = () => {
          setIsOpen((prevState) => !prevState); // 상태 반전
     };

     const links = [
          { link: "1", title: "전통주 검색하기" },
          { link: "2", title: "위치 안내" },
          { link: "3", title: "카드 뉴스" },
     ];

     return (
          <header>
               <a href="#" className={styles.toggle} onClick={handleToggle}>
                    <img src={menuBar} alt="Toggle menu" />
               </a>
               <UList
                    className={`${styles.mobile_menu} ${isOpen ? styles.show : ""}`}
                    links={links}
               />
               <p>
                    <a href="">
                         <img src={logoImg} />
                    </a>
               </p>
               <UList className={styles.pc_menu} links={links} />
               <div className={styles.utility}>
                    <a href="">KOR</a>
                    <a href="">ENG</a>
               </div>
          </header>
     );
}
