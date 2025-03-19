import ggMap from "../../assets/googlemap.png";
import naverMap from "../../assets/navermap.png";
import kkMap from "../../assets/kakaomap.png";
import styles from "../Map/Map.module.css";

function GoToMap({ link, mapImg }) {
     return (
          <a href={link} target="_blank" rel="noopener noreferrer">
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

const mapData = [
     {
          title: "양조장",
          maps: [
               { link: "https://www.google.com/maps/@35.7137977,122.5448981,6z", mapImg: ggMap },
               {
                    link: "https://map.naver.com/p/favorite/myPlace/folder/7ebb79ca07914d80816318a5c51504a2/pc",
                    mapImg: naverMap,
               },
               {
                    link: "https://map.kakao.com/?map_type=TYPE_MAP&folderid=14111945&target=other&page=bookmark",
                    mapImg: kkMap,
               },
          ],
     },
     {
          title: "전통주 판매처",
          maps: [
               {
                    link: "https://www.google.com/maps/@/data=!4m3!11m2!2shTJEq4uERViSwjfFZoC2rw!3e3?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D",
                    mapImg: ggMap,
               },
               {
                    link: "https://map.naver.com/p/favorite/myPlace/folder/03d697db98a047d8b6d772aec1d9a360/pc?c=15.00,0,0,0,dh",
                    mapImg: naverMap,
               },
               {
                    link: "https://map.kakao.com/?map_type=TYPE_MAP&folderid=14112365&target=other&page=bookmark",
                    mapImg: kkMap,
               },
          ],
     },
     {
          title: "전통주점",
          maps: [
               {
                    link: "https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2sEkPo4ZROT-WNn4mRM2NXuA!3e3?entry=tts&shorturl=1",
                    mapImg: ggMap,
               },
               {
                    link: "https://map.naver.com/p/favorite/myPlace/folder/50602c9be7a04c82b3da5178289ca6e5/pc?c=15.00,0,0,0,dh",
                    mapImg: naverMap,
               },
               {
                    link: "https://map.kakao.com/?map_type=TYPE_MAP&folderid=14112576&target=other&page=bookmark",
                    mapImg: kkMap,
               },
          ],
     },
];

export default function Map() {
     return (
          <div className={styles.map}>
               <h4>양조장 및 전통주 판매처 위치 안내</h4>
               <ul className={styles.link}>
                    {mapData.map((item, index) => (
                         <List key={index} title={item.title} maps={item.maps} />
                    ))}
               </ul>
          </div>
     );
}
