import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sample from "../../assets/sample.jpeg";
import styles from "../Cardnews/Cardnews.module.css";

function GetImg({ link, img }) {
     return (
          <div>
               <a href={link}>
                    <img
                         src={img}
                         alt="Card News"
                         style={{
                              maxWidth: "90%",
                              minWidth: "80%",
                              objectFit: "contain",
                              borderRadius: "10px",
                         }}
                    />
               </a>
          </div>
     );
}

function ShowImg({ images, settings }) {
     return (
          <Slider {...settings}>
               {images.map((item, index) => (
                    <GetImg key={index} link={item.link} img={item.img} />
               ))}
          </Slider>
     );
}

export default function CardNews() {
     const images = [
          { link: "1", img: sample },
          { link: "2", img: sample },
          { link: "3", img: sample },
          { link: "4", img: sample },
          { link: "5", img: sample },
     ];

     const settings = {
          slidesToShow: 2, // 한 화면에 보이는 슬라이드 개수
          slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
          dots: true, // 하단 네비게이션 표시
          autoplay: true, // 자동 재생
          autoplaySpeed: 3000, // 2초마다 슬라이드 변경
          speed: 1000, // 슬라이드 전환 속도
          infinite: true, // 무한 반복 여부
          centerMode: true, // 가운데 정렬 모드
          arrows: true, // 좌우 화살표 숨김
     };

     return (
          <div className={styles.cardnews}>
               <p>
                    <span>CARD</span>NEWS
               </p>
               <ShowImg images={images} settings={settings} />
          </div>
     );
}
