import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EffectCoverflow, Pagination } from "swiper";
import Image2 from "../../assets/n.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillFacebook } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "swiper/css/navigation";
import "swiper/css/scrollbar";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "90vh",
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(rgba(255, 255, 255,0.9),rgba(255, 255, 255,0.9)),url(${Image2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  item: {
    padding: "10px",
  },
  h1: {
    fontSize: "24px",
    margin: "5px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "rgb(46, 46, 46)",

    "@media (max-width: 1000px)": {
      fontSize: "20px",
    },
  },
  span: {
    fontSize: "42px",
    letterSpacing: "2px",
    fontWeight: "500",
    color: "rgba(107,52,26,255)",
  },
  p: {
    fontSize: "14px",
    margin: "5px",
    letterSpacing: "2px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "rgb(46, 46, 46)",
    "@media (max-width: 1000px)": {
      fontSize: "10px",
    },
  },
});

const Testimonial = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="opinie">
      <h1 className={classes.h1}>
        <span className={classes.span}>Opinie</span>
      </h1>
      <h1 className={classes.h1}>
        Wciąż się wahacie, czy warto nam zaufać? Sprawdźcie, co mówią o nas{" "}
        <span className={classes.span}>nasi klienci!</span>
      </h1>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <p>
              Szczerze i gorąco polecam Best Brothers! Zapewnili oprawę muzyczną
              na naszym weselu i jesteśmy bardzo zadowoleni z ich usług. Co
              więcej, nasi goście również niejednokrotnie podkreślali, że
              przyjęcie było świetnie prowadzone i super się bawili. Chłopaki
              mają ciepłe i życzliwe podejście do klienta, są otwarci na
              indywidualność imprezy i potrafią doskonale zadbać o to, żeby
              przyjęcie było właśnie takie jak chcecie, a instrumenty na żywo
              wprowadzają niezapomniany charakter. Bardzo za wszystko dziękujemy
              i raz jeszcze polecamy! ❤️
            </p>
            <h2>Kamila Rogala</h2>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Nawet nie wiem jakich słów użyć żeby opisać ten dream team 🤩
              Chłopaki wspaniałe poprowadzili wesele, a współpraca z nimi to
              była przyjemność, muzyka idealnie dopasowana do gości, nikt nie
              schodził z parkietu (chyba że grali "idziemy na jednego.." 🙈)
              Akordeon, saksofon, śpiewy.. to wszystko sprawiło że skończyliśmy
              tańcząc na krzesłach 🤣❤ Przesympatyczni faceci którzy robią coś z
              pasją, lubią to co robią i wychodzi im to bardzo dobrze! 🥳🎺
            </p>
            <h2>Basia Smogór - Turek</h2>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Chłopaki robią świetną robotę, bawią gości, dostosowują muzykę,
              śpiewają przy stołach. Bawiliśmy się świetnie!😍 Dodatkowym atutem
              jest to, że grają na instrumentach, więc granie pod domem czy przy
              stołach nie jest dla nich problemem. Pozdrawiamy i dziękujemy 🥰
            </p>
            <h2>Gosia Słapińska</h2>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Best Brothers są po prostu mistrzami świata!!! 😍 Dziękujemy Wam z
              całego serca za to, jak wspaniale poprowadziliście nasze wesele ♥️
              Wszyscy goście byli zachwyceni i pytali, gdzie znaleźliśmy takie
              muzyczne skarby 😍 Podsumowując - jak wesele, to tylko z BEST
              BROTHERS!!! 🥰🥰😍😍
            </p>
            <h2>Iwona Smutek</h2>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Zdarte Buty, odciski na stopach, brak głosu kolejnego DNIA.. Same
              pochwały i słowa zachwytu nad DWÓJKA MŁODYCH MĘŻCZYN, którzy
              sprawili że przyjęcie weselne nie było zwykłą zabawą. PANOWIE
              przesympatyczni, potrafiący wyciągnąc każdego na parkiet! Dla tej
              ekipy brakuje skali ocen!!! SERDECZNIE POLECAM
            </p>
            <h2>Ania Żółkiewska</h2>
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Chłopaki z Best Brothers są pełni profesjonalizmu i bardzo
              utalentowani. Od pierwszego spotkania z nami służyli radą i
              doświadczeniem oraz dbali o to, aby wszystko było na najwyższym
              poziomie. Ponadto są otwarci na indywidualne pomysły i doskonale
              rozkręcają zabawę, nawet osoby sceptycznie podchodzące do tematu
              dj'a na weselu po imprezie z nimi zmieniły zdanie. Bardzo
              serdecznie polecam! 😃
            </p>
            <h2>Karol Wnęk</h2>
          </SwiperSlide>
          ...
        </Swiper>
      </>
      <h1 className={classes.h1}>
        Zobacz wszystkie opinie na naszym profilu na{" "}
        <a
          href="https://www.facebook.com/dj.bestbrothers/reviews/?ref=page_internal"
          target="_blank"
        >
          <AiFillFacebook
            style={{ color: "#3b5998", fontSize: "32px", cursor: "pointer" }}
          />
        </a>
      </h1>
    </div>
  );
};

export default Testimonial;
