import ggMap from "../../assets/googlemap.png";
import naverMap from "../../assets/navermap.png";
import kkMap from "../../assets/kakaomap.png";
import styles from "../Map/Map.module.css";

function GoToMap({ link, mapImg }) {
     return (
          <a href={link}>
               <div className={styles.mapbtn}>
                    <img src={mapImg} alt="Map" />
               </div>
          </a>
     );
}

function List({ title, maps }) {
     return (
          <li>
               <p>{title}</p>
               <div>
                    {maps.map((item, index) => (
                         <GoToMap key={index} link={item.link} mapImg={item.mapImg} />
                    ))}
               </div>
          </li>
     );
}

export default function Map() {
     const maps = [
          { link: "", mapImg: ggMap },
          { link: "", mapImg: naverMap },
          { link: "", mapImg: kkMap },
     ];
     return (
          <div className={styles.map}>
               <h4>양조장 및 전통주 판매처 위치 안내</h4>
               <ul className={styles.link}>
                    <List title="양조장" maps={maps} />
                    <List title="전통주 판매처" maps={maps} />
                    <List title="전통주점" maps={maps} />
               </ul>
          </div>
     );
}
