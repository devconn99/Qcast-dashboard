import React, { useEffect, useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import queryString from "query-string";

import img_al from "assets/images/icons/arrow_left.png";
import img_ar from "assets/images/icons/arrow_right.png";
import img_play from "assets/images/icons/play.png";
import img_pause from "assets/images/icons/pause1.png";

import {dataDavidJacob, dataQcastersQcast, dataQcastsReview} from "fakeapi";

const UserRespondResponsesContent = (props) => {
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
                        <div className={css(styles.imgRespLarge1)}>
                            <img
                                src={dataQcastersQcast[0].imgsrc}
                                alt={""}
                                className={css(styles.imgRespLarge2)}
                            />

                            <img
                                src={dataDavidJacob[0].logo}
                                alt={""}
                                className={css(styles.imgSmall)}
                            />
                        </div>
                    </div>
                    <div className={css(styles.titleTextBotton)}>
                        <div>12 Questions to ask yourself when raising</div>
                        <div>more than one child</div>
                    </div>

                    <div className={css(styles.buttonsCotainer)}>
                        <div className={prev === false ? css(styles.qcastImgBtn): css(styles.qcastImgBtnActive)} onClick={(e) => handleOnClickCtrlBtn("prev")}>
                            <img
                                src={img_al}
                                alt=""
                                className={css(styles.img_20)}
                            />
                        </div>
                        <div className={css(styles.respContentPlayBtnDiv)} onClick={(e) => handleOnClickCtrlBtn("play")}>
                            <div className={play === false ? css(styles.qcastPlayBtnActive) : css(styles.nonePlayBtn)}>
                                <img
                                    src={img_play}
                                    alt=""
                                    className={css(styles.img_20)}
                                />
                            </div>
                            <div className={play === true ? css(styles.qcastPlayBtnActive) : css(styles.nonePlayBtn)}>
                                <img
                                    src={img_pause}
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
                    </div>
                    <div className={css(styles.qcastCtrlBtn)}>
                        <p className={css(styles.txtQcastContentIcon)}>1 of 12</p>
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

export default UserRespondResponsesContent;
