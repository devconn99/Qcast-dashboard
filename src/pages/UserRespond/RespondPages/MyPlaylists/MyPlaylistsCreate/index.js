import React, { useEffect, useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import {Col, Container, Row} from "react-bootstrap";
import queryString from "query-string";
import {ROUTES} from "../../../../../constants";
import img_add_svg from "../../../../../assets/images/icons/iconAddPlSvg.svg";
import imgPopularSrc1 from "../../../../../assets/images/avatar/mostpopular/1.png";
import {
    dataCreatePlaylist,
    dataMostPopularAll,
    dataMyFavouritesSavedQcasts,
    dataPlaylistCreate
} from "../../../../../fakeapi";
import {StyledCardCreatePlaylist, StyledCardMySaved} from "../../../../../components/BasicComponents/StyledCards";
import {StyledButtonSimpleFluid, StyledImageCircle} from "../../../../../components";
import img_play from "../../../../../assets/images/icons/play.png";
import {StyledButtonPlaysPl} from "../../../../../components/BasicComponents/StyledButtons";

const UserRespondMyPlaylistsCreate = (props) => {
    const params = queryString.parse(props.location.search);

    const handleOnClickRouteAllPage= () => {
        props.history.push(ROUTES.USER_RESPOND_ALL);
    };

    const handleOnClickRouteToPlayer = () => {
        props.history.push(ROUTES.USER_RESPOND_RESPONSES_CONTENT);
    };

    const [play, setPlay] = useState(false);

    useEffect(() => {
    }, [params.key])

    const handleOnClickCtrlBtn = (clickedItem) => {
        switch (clickedItem) {
            case "play":
                setPlay(!play);
                break;
            default:
                break;
        }
    };

    return (





    <Container fluid className={css(styles.container)}>
        <div className={css(styles.containerFeatured)}>
            <div className={css(styles.headerTitle)}>Create Playlist</div>
            <div className={css(styles.searchContainer)}>
                <p className={css(styles.titleSearch)}>Give playlist name</p>
                <div className={css(styles.inputContainer)}><input className={css(styles.inputPlace)} type="text"/>
                    <button className={css(styles.editPlaylist)} onClick={(e) => handleOnClickRouteAllPage()}>
                        Create Playlist
                    </button>
                </div>
            </div>
            <p className={css(styles.txtTitle)}> Add Qcasts </p>

            <hr className={css(styles.gridLineBreak)} />

            <div className={css(styles.gridRow)}>
                <div className={css(styles.gridColHeaderFirst)}>
                    TITLE
                </div>
                <div className={css(styles.gridColHeaderSecond)}>
                    QCASTER
                </div>
                <div className={css(styles.gridColHeaderSecond)}>
                    TOPIC
                </div>
                <div className={css(styles.gridColHeaderSecond)}>
                    QUESTIONS
                </div>
                <div className={css(styles.gridColHeaderSecond)}>
                    LENGTH
                </div>
                <div className={css(styles.gridColHeaderSecond)}>
                    ADD
                </div>

                {dataPlaylistCreate.map((item) => (
                    <>
                        <div className={css(styles.gridColFirst)}>
                            <div className={css(styles.img_avatar)}>
                                <StyledImageCircle size="small" imgSrc={item.imgsrc} />
                            </div>
                            <p className={css(styles.txtDataFirst)}> {item.title}</p>
                        </div>
                        <div className={css(styles.gridColSecond)}>
                            <p className={css(styles.txtDataSecond)}> {item.qcaster}</p>
                        </div>
                        <div className={css(styles.gridColSecond)}>
                            <p className={css(styles.txtDataSecond)}> {item.topic}</p>
                        </div>
                        <div className={css(styles.gridColSecond)}>
                            <p className={css(styles.txtDataThird)}> {item.questions}</p>
                        </div>
                        <div className={css(styles.gridColSecond)}>
                            <p className={css(styles.txtDataSecond)}> {item.length}</p>
                        </div>
                        <StyledButtonPlaysPl
                        />
                    </>
                ))}
            </div>
        </div>
    </Container>
    );
}

export default UserRespondMyPlaylistsCreate;
