import styles from "./Header.module.css";

function Header() {
     return (
          <header>
               <button>menu</button>
               <p>
                    <a href="">logo img</a>
               </p>
               <div className={styles.utility}>
                    <a href="">KOR</a>
                    <button>검색</button>
               </div>
          </header>
     );
}

export default Header;
