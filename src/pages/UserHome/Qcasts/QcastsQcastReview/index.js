import React, { useEffect, useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import queryString from "query-string";

import img_t from "assets/images/icons/spell_t.png";
import img_earphone from "assets/images/icons/earphone.png";
import img_ep_sw from "assets/images/icons/earphone_sw.png";
import img_star from "assets/images/icons/star.png";
import img_shuffle from "assets/images/icons/shuffle.png";
import img_al from "assets/images/icons/arrow_left.png";
import img_ar from "assets/images/icons/arrow_right.png";
import img_play from "assets/images/icons/play.png";
import img_refresh from "assets/images/icons/refresh.png";

import { dataQcastersQcast, dataQcastsReview } from "fakeapi";

const UserHomeQcastsQcastReview = (props) => {
  const params = queryString.parse(props.location.search);

  const [text, setText] = useState(false);
  const [mute, setMute] = useState(false);
  const [follow, setFollow] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [prev, setPrev] = useState(false);
  const [play, setPlay] = useState(false);
  const [next, setNext] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("params.key: ", params.key);
  }, [params.key])

  const handleOnClickCtrlBtn = (clickedItem) => {
    switch (clickedItem) {
      case "text":
        setText(!text);
        break;
      case "mute":
        setMute(!mute);
        break;
      case "follow":
        setFollow(!follow);
        break;
      case "shuffle":
        setShuffle(!shuffle);
        break;
      case "prev":
        setPrev(!prev);
        break;
      case "play":
        setPlay(!play);
        break;
      case "next":
        setNext(!next);
        break;
      case "refresh":
        setRefresh(!refresh);
        break;
      default:
        break;
    }
  };

  return (

    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerQcasts)}>
        <div className={css(styles.containerQcast)}>
          <div className={css(styles.imgQcast)}>
            <div className={css(styles.imgPopularLarge1)}>
              <img
                src={dataQcastersQcast[0].imgsrc}
                alt={""}
                className={css(styles.imgPopularLarge2)}
              />
            </div>
            <div className={css(styles.containerQcastsButtonMore)}>
              <div className={text === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("text")}>
                <img
                  src={img_t}
                  alt=""
                  className={css(styles.img_20)}
                />
              </div>
            </div>
          </div>
          <div className={css(styles.qcastCtrlBtn)}>
            <div className={mute === false ? css(styles.qcastSWBtn): css(styles.qcastSWBtnActive)} onClick={(e) => handleOnClickCtrlBtn("mute")}>
              {!mute && 
              <img
                src={img_earphone}
                alt=""
                className={css(styles.img_20)}
              />
              }
              <img
                src={img_ep_sw}
                alt=""
                className={css(styles.img_30)}
              />
              {mute && 
              <img
                src={img_earphone}
                alt=""
                className={css(styles.img_20)}
              />
              }
            </div>
            <p className={css(styles.txtQcastContentIcon)}>1 of 12</p>
            <div className={follow === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("follow")}>
              <img
                src={img_star}
                alt=""
                className={css(styles.img_20)}
              />
            </div>
          </div>
          <div className={css(styles.qcastCtrlBtn)}>
            <div className={shuffle === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("shuffle")}>
              <img
                src={img_shuffle}
                alt=""
                className={css(styles.img_20)}
              />
            </div>
            <div className={prev === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("prev")}>
              <img
                src={img_al}
                alt=""
                className={css(styles.img_20)}
              />
            </div>
            <div className={css(styles.qcastPlayBtnDiv)} onClick={(e) => handleOnClickCtrlBtn("play")}>
              <div className={play === false ? css(styles.qcastPlayBtn) : css(styles.qcastPlayBtnActive)}>
                <img
                  src={img_play}
                  alt=""
                  className={css(styles.img_20)}
                />
              </div>
            </div>
            <div className={next === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("next")}>
              <img
                src={img_ar}
                alt=""
                className={css(styles.img_20)}
              />
            </div>
            <div className={refresh === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("refresh")}>
              <img
                src={img_refresh}
                alt=""
                className={css(styles.img_20)}
              />
            </div>
          </div>
          <div className={css(styles.qcastCtrlBtn)}>
            <p className={css(styles.txtQcastTime)}>00:50</p>
          </div>
        </div>
        {text && 
        <div className={css(styles.qcastReviewTexts)}>
        {dataQcastsReview.map((item, key) =>
            <div key={key} className={css(styles.qcastReviewText)}>
              <p className={css(styles.qcastReviewContentNum)}>{key + 1}. </p>
              <p className={css(styles.qcastReviewContent)}>{item.content}</p>
            </div>
          )}
        </div>
        }
      </div>
    </Container>
  );
}

export default UserHomeQcastsQcastReview;