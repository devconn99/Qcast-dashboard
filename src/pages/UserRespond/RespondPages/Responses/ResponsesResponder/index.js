import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Scrollbars } from 'react-custom-scrollbars';

import {
    dataDiscoverSearchResults,
    dataMyFavouritesRespond,
    dataMyFavouritesResponses,
    dataMyFavouritesResponsesResponder, dataRespRe
} from "fakeapi";
import {
    StyledCardAllResponses,
    StyledCardPopularLarge,
    StyledCardResponses, StyledResponsedResp
} from "../../../../../components/BasicComponents/StyledCards";
import queryString from "query-string";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../../constants";
import img_arrow_right from "assets/images/icons/arrow_right-black.png";

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: '#BBCFEA'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
);

const UserRespondResponsesResponder = (props) => {
    const params = queryString.parse(props.location.search);
    const btnStyleActive = css(styles.linkButtonActive);
    const btnStyle = css(styles.linkButton);

    const handleOnClickRouteToPlayer = () => {
        props.history.push(ROUTES.USER_RESPOND_RESPONSES_CONTENT);
    };

    return (
        <Container fluid className={css(styles.container)}>
            <div className={css(styles.containerResponsedAll)}>
                <Navbar className={css(styles.navBar)}>
                    <div>
                        <ul className={css(styles.navBarUl)}>
                            <li>
                                <NavLink
                                    to={ROUTES.USER_RESPOND_RESPONSES_QUESTIONER}
                                    className={params.tab ? btnStyleActive : btnStyle}
                                >
                                    Questioner
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={ROUTES.USER_RESPOND_RESPONSES_RESPONDER}
                                    className={(!params.tab) ? btnStyleActive : btnStyle}
                                >
                                    Responder
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Navbar>
            </div>

            <div className={css(styles.containerResponsedAll)}>
                <div className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <div className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </div>
                    )}
                </div>
                <div className={css(styles.subCardsRow0)}>
                    <CustomScrollbars style={{ height: 220, width: 1100 }}>
                        <div className={css(styles.subCardsRow1)}>
                            {dataMyFavouritesResponsesResponder.map((item, key) =>
                                <div className={css(styles.cardSavedRow)} key={key}>
                                    <div className={css(styles.cardSavedRow1)} key={key}>
                                        <StyledCardAllResponses
                                            imgSrc={item.imgsrc}
                                            imgSmall={item.imgSmall}
                                            txtTitle={item.title}
                                            txtContent={item.content}
                                            buttonValue={"Play"}
                                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </CustomScrollbars>
                    <div className={css(styles.subCardsRow2)}>
                        <div className={css(styles.subCardsRow2)}>
                            <img src={img_arrow_right} className={css(styles.arrow_icon)}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <div className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <div className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </div>
                    )}
                </div>
                <div className={css(styles.subCardsRow0)}>
                    <CustomScrollbars style={{ height: 220, width: 1100 }}>
                        <div className={css(styles.subCardsRow1)}>
                            {dataMyFavouritesResponsesResponder.map((item, key) =>
                                <div className={css(styles.cardSavedRow)} key={key}>
                                    <div className={css(styles.cardSavedRow1)} key={key}>
                                        <StyledCardAllResponses
                                            imgSrc={item.imgsrc}
                                            imgSmall={item.imgSmall}
                                            txtTitle={item.title}
                                            txtContent={item.content}
                                            buttonValue={"Play"}
                                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </CustomScrollbars>
                    <div className={css(styles.subCardsRow2)}>
                        <div className={css(styles.subCardsRow2)}>
                            <img src={img_arrow_right} className={css(styles.arrow_icon)}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <div className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <div className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </div>
                    )}
                </div>
                <div className={css(styles.subCardsRow0)}>
                    <CustomScrollbars style={{ height: 220, width: 1100 }}>
                        <div className={css(styles.subCardsRow1)}>
                            {dataMyFavouritesResponsesResponder.map((item, key) =>
                                <div className={css(styles.cardSavedRow)} key={key}>
                                    <div className={css(styles.cardSavedRow1)} key={key}>
                                        <StyledCardAllResponses
                                            imgSrc={item.imgsrc}
                                            imgSmall={item.imgSmall}
                                            txtTitle={item.title}
                                            txtContent={item.content}
                                            buttonValue={"Play"}
                                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </CustomScrollbars>
                    <div className={css(styles.subCardsRow2)}>
                        <div className={css(styles.subCardsRow2)}>
                            <img src={img_arrow_right} className={css(styles.arrow_icon)}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <div className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <div className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </div>
                    )}
                </div>
                <div className={css(styles.subCardsRow0)}>
                    <CustomScrollbars style={{ height: 220, width: 1100 }}>
                        <div className={css(styles.subCardsRow1)}>
                            {dataMyFavouritesResponsesResponder.map((item, key) =>
                                <div className={css(styles.cardSavedRow)} key={key}>
                                    <div className={css(styles.cardSavedRow1)} key={key}>
                                        <StyledCardAllResponses
                                            imgSrc={item.imgsrc}
                                            imgSmall={item.imgSmall}
                                            txtTitle={item.title}
                                            txtContent={item.content}
                                            buttonValue={"Play"}
                                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </CustomScrollbars>
                    <div className={css(styles.subCardsRow2)}>
                        <div className={css(styles.subCardsRow2)}>
                            <img src={img_arrow_right} className={css(styles.arrow_icon)}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css(styles.containerResponsedAll)}>
                <div className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <div className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </div>
                    )}
                </div>
                <div className={css(styles.subCardsRow0)}>
                    <CustomScrollbars style={{ height: 220, width: 1100 }}>
                        <div className={css(styles.subCardsRow1)}>
                            {dataMyFavouritesResponsesResponder.map((item, key) =>
                                <div className={css(styles.cardSavedRow)} key={key}>
                                    <div className={css(styles.cardSavedRow1)} key={key}>
                                        <StyledCardAllResponses
                                            imgSrc={item.imgsrc}
                                            imgSmall={item.imgSmall}
                                            txtTitle={item.title}
                                            txtContent={item.content}
                                            buttonValue={"Play"}
                                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </CustomScrollbars>
                    <div className={css(styles.subCardsRow2)}>
                        <div className={css(styles.subCardsRow2)}>
                            <img src={img_arrow_right} className={css(styles.arrow_icon)}></img>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
}

export default UserRespondResponsesResponder;
