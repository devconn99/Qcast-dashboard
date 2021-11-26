import React from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import ScrollContainer from 'react-indiana-drag-scroll'

import {
    dataJessicaRespond,
    dataMyFavouritesRespond,
    dataMyFavouritesResponses,
    dataMyFavouritesSavedQcasts, jacobRespond
} from "fakeapi";
import {
    StyledCardAllResponses,
    StyledCardMyFavourites, StyledCardMySaved,
} from "../../../../components/BasicComponents/StyledCards";
import {
    StyledImageCirclePlaylists,
    StyledImageCircleRespAll
} from "../../../../components/BasicComponents/StyledImages";
import {
    StyledButtonSimplePlaylist,
} from "../../../../components/BasicComponents/StyledButtons";
import { ROUTES } from "../../../../constants";
import queryString from "query-string";
import { NavLink } from "react-router-dom";

const UserRespondAll = (props) => {
    const params = queryString.parse(props.location.search);
    const btnStyleActive = css(styles.linkButtonActive);
    const btnStyle = css(styles.linkButton);

    const handleOnClickRouteCreatePlaylist = () => {
        props.history.push(ROUTES.USER_RESPOND_MY_PLAYLISTS_CREATE);
    };

    const handleOnClickRoutePlayPlaylist = () => {
        props.history.push(ROUTES.USER_RESPOND_MY_PLAYLISTS_PLAY);
    };

    const handleOnClickRouteToPlayer = () => {
        props.history.push(ROUTES.USER_RESPOND_RESPONSES_CONTENT);
    };


    return (
        <Container fluid className={css(styles.container)}>
            <div>
                <p className={css(styles.txtTitle)}> Subscribed Qcasters </p>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <ScrollContainer style={{ height: 220, width: "80vw", cursor: "grab", }}>
                    <div className={css(styles.subCardsRow1)}>
                        {dataJessicaRespond.map((item, key) =>
                            <Col xl={1} lg={4} md={5} sm={7} key={key} className={css(styles.cardRespondedRow)}>
                                <div style={{ display: "flex", width: 200, flexDirection: "column", alignItems: "center" }}>
                                    <StyledImageCircleRespAll imgSrc={item.imgsrc} />
                                    <p className={css(styles.txtDataFirst)}> {item.title} </p></div>
                            </Col>
                        )}
                    </div>
                </ScrollContainer>
            </div>
            <div>
                <p className={css(styles.txtTitle)}> Saved Qcasts </p>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <ScrollContainer style={{ height: 160, width: "80vw", cursor: "grab", }}>
                    <div className={css(styles.subCardsRow1)}>
                        {dataMyFavouritesSavedQcasts.map((item, key) =>
                            <Col xl={1} lg={4} md={5} sm={7} key={key} className={css(styles.cardRespondedRow1)}>
                                <div className={css(styles.cardPopularSubCol)} key={key}>
                                    <StyledCardMySaved
                                        imgSrc={item.imgsrc}
                                        txtTitle={item.title}
                                        txtContent={item.content}
                                        buttonValue={"Load Qcast"}
                                    />
                                </div>
                            </Col>

                        )}
                    </div>
                </ScrollContainer>
            </div>

            <div>
                <p className={css(styles.txtTitle)}> My Favourites </p>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <ScrollContainer style={{ height: 130, width: "80vw", cursor: "grab", }}>
                    <div className={css(styles.subCardsRow1)}>
                        {dataMyFavouritesRespond.map((item, key) =>
                            <Col xl={1} lg={4} md={5} sm={7} key={key} className={css(styles.cardRespondedRow2)}>
                                <div className={css(styles.cardPopularSubCol1)} key={key}>
                                    <StyledCardMyFavourites
                                        imgSrc={item.imgsrc}
                                        txtTitle={item.title}
                                        txtNum={"2 of 10"}
                                        txtContent={item.content}
                                    />
                                </div>
                            </Col>

                        )}
                    </div>
                </ScrollContainer>
            </div>

            <div className={css(styles.containerResponsedAll)}>
                <div>
                    <p className={css(styles.txtTitle)}> Responses </p>
                </div>

                <Navbar className={css(styles.navBar)}>
                    <div>
                        <ul className={css(styles.navBarUl)}>
                            <li>
                                <NavLink
                                    to={ROUTES.USER_RESPOND_ALL}
                                    className={!params.tab ? btnStyleActive : btnStyle}
                                >
                                    Questioner
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={ROUTES.USER_RESPOND_ALL + "?tab=1"}
                                    className={(params.tab && params.tab == 1) ? btnStyleActive : btnStyle}
                                >
                                    Responder
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Navbar>
                <div className={css(styles.containerResponsedAll)}>
                    <ScrollContainer style={{ height: 160, width: "80vw", cursor: "grab", }}>
                        <div className={css(styles.subCardsRow1)}>
                            {dataMyFavouritesResponses.map((item, key) =>
                                <Col xl={1} lg={4} md={5} sm={7} key={key} className={css(styles.cardRespondedRow1)}>
                                    <div className={css(styles.cardPopularSubCol)} key={key}>
                                        <StyledCardAllResponses
                                            imgSrc={item.imgsrc}
                                            imgSmall={item.imgSmall}
                                            txtTitle={item.title}
                                            txtContent={item.content}
                                            buttonValue={"Play"}
                                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                                        />
                                    </div>
                                </Col>

                            )}
                        </div>
                    </ScrollContainer>
                </div>
            </div>

            <div className={css(styles.containerResponsedAll)}>
                <Col xl={12} md={8} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <p className={css(styles.txtTitle)}> My Playlists </p>
                    <div className={css(styles.switchBtnPl)} onClick={(e) => handleOnClickRouteCreatePlaylist()}>
                        <StyledButtonSimplePlaylist value={""} />
                    </div>
                </Col>

                <div style={{ display: "flex", justifyContent: "start", flexDirection: "row" }}>
                    {jacobRespond.map((item) =>
                        <div style={{ cursor: "pointer" }} onClick={(e) => handleOnClickRoutePlayPlaylist()}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className={css(styles.imgSrcPl)}>
                                    <StyledImageCirclePlaylists imgSrc={item.imgsrc} />
                                </div>
                                <p className={css(styles.txtDataFirst)}> {item.title} </p></div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default UserRespondAll;
