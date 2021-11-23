import React, {useState} from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import {Container, Navbar, Row, Col} from "react-bootstrap";

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
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../../constants";

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

            <Row className={css(styles.containerResponsedAll)}>
                <Row className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <Col className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </Col>
                    )}
                </Row>
                {dataMyFavouritesResponsesResponder.map((item, key) =>
                    <Col xl={4} className={css(styles.cardSavedRow)} key={key}>
                        <StyledCardAllResponses
                            imgSrc={item.imgsrc}
                            imgSmall={item.imgSmall}
                            txtTitle={item.title}
                            txtContent={item.content}
                            buttonValue={"Play"}
                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                        />
                    </Col>
                )}
            </Row>

            <Row className={css(styles.containerResponsedAll)}>
                <Row className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <Col className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </Col>
                    )}
                </Row>
                {dataMyFavouritesResponsesResponder.map((item, key) =>
                    <Col xl={12} className={css(styles.cardSavedRow)} key={key}>
                        <StyledCardAllResponses
                            imgSrc={item.imgsrc}
                            imgSmall={item.imgSmall}
                            txtTitle={item.title}
                            txtContent={item.content}
                            buttonValue={"Play"}
                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                        />
                    </Col>
                )}
            </Row>

            <Row className={css(styles.containerResponsedAll)}>
                <Row className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <Col className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </Col>
                    )}
                </Row>
                {dataMyFavouritesResponsesResponder.map((item, key) =>
                    <Col xl={12} className={css(styles.cardSavedRow)} key={key}>
                        <StyledCardAllResponses
                            imgSrc={item.imgsrc}
                            imgSmall={item.imgSmall}
                            txtTitle={item.title}
                            txtContent={item.content}
                            buttonValue={"Play"}
                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                        />
                    </Col>
                )}
            </Row>

            <Row className={css(styles.containerResponsedAll)}>
                <Row className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <Col className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </Col>
                    )}
                </Row>
                {dataMyFavouritesResponsesResponder.map((item, key) =>
                    <Col xl={12} className={css(styles.cardSavedRow)} key={key}>
                        <StyledCardAllResponses
                            imgSrc={item.imgsrc}
                            imgSmall={item.imgSmall}
                            txtTitle={item.title}
                            txtContent={item.content}
                            buttonValue={"Play"}
                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                        />
                    </Col>
                )}
            </Row>

            <Row className={css(styles.containerResponsedAll)}>
                <Row className={css(styles.cardRespondedRow)}>
                    {dataRespRe.map((item, key) =>
                        <Col className={css(styles.cardPopularSubCol)} key={key}>
                            <StyledResponsedResp
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                viewCount={item.viewCount}
                                txtSubTitle={item.subTitle}
                                txtSubContent={item.subContent}
                            />
                        </Col>
                    )}
                </Row>
                {dataMyFavouritesResponsesResponder.map((item, key) =>
                    <Col xl={12} className={css(styles.cardSavedRow)} key={key}>
                        <StyledCardAllResponses
                            imgSrc={item.imgsrc}
                            imgSmall={item.imgSmall}
                            txtTitle={item.title}
                            txtContent={item.content}
                            buttonValue={"Play"}
                            buttonOnClick={(e) => handleOnClickRouteToPlayer()}
                        />
                    </Col>
                )}
            </Row>

            {/*<div className={css(styles.containerResponsedAll)}>*/}
            {/*    <Row className={css(styles.rowCenter)}>*/}
            {/*        <div className={css(styles.cardRespMain)}>*/}
            {/*            {dataRespRe.map((item, key) =>*/}
            {/*                <Col className={css(styles.cardPopularSubCol)} key={key}>*/}
            {/*                    <StyledResponsedResp*/}
            {/*                        imgSrc={item.imgsrc}*/}
            {/*                        txtTitle={item.title}*/}
            {/*                        txtContent={item.content}*/}
            {/*                        viewCount={item.viewCount}*/}
            {/*                        txtSubTitle={item.subTitle}*/}
            {/*                        txtSubContent={item.subContent}*/}
            {/*                    />*/}
            {/*                </Col>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        {dataMyFavouritesResponsesResponder.map((item, key) =>*/}
            {/*            <Col xl={12} className={css(styles.cardSavedRow)} key={key}>*/}
            {/*                <StyledCardAllResponses*/}
            {/*                    imgSrc={item.imgsrc}*/}
            {/*                    imgSmall={item.imgSmall}*/}
            {/*                    txtTitle={item.title}*/}
            {/*                    txtContent={item.content}*/}
            {/*                    buttonValue={"Play"}*/}
            {/*                    buttonOnClick={(e) => handleOnClickRouteToPlayer()}*/}
            {/*                />*/}
            {/*            </Col>*/}
            {/*        )}*/}
            {/*    </Row>*/}
            {/*</div>*/}
            {/*<div className={css(styles.containerResponsedAll)}>*/}
            {/*    <div className={css(styles.cardRespondedRow)}>*/}
            {/*        <div className={css(styles.cardRespMain)}>*/}
            {/*            {dataRespRe.map((item, key) =>*/}
            {/*                <div className={css(styles.cardPopularSubCol)} key={key}>*/}
            {/*                    <StyledResponsedResp*/}
            {/*                        imgSrc={item.imgsrc}*/}
            {/*                        txtTitle={item.title}*/}
            {/*                        txtContent={item.content}*/}
            {/*                        viewCount={item.viewCount}*/}
            {/*                        txtSubTitle={item.subTitle}*/}
            {/*                        txtSubContent={item.subContent}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        {dataMyFavouritesResponsesResponder.map((item, key) =>*/}
            {/*            <div className={css(styles.cardAllMain)} key={key}>*/}
            {/*                <StyledCardAllResponses*/}
            {/*                    imgSrc={item.imgsrc}*/}
            {/*                    imgSmall={item.imgSmall}*/}
            {/*                    txtTitle={item.title}*/}
            {/*                    txtContent={item.content}*/}
            {/*                    buttonValue={"Play"}*/}
            {/*                    buttonOnClick={(e) => handleOnClickRouteToPlayer()}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={css(styles.containerResponsedAll)}>*/}
            {/*    <div className={css(styles.cardRespondedRow)}>*/}
            {/*        <div className={css(styles.cardRespMain)}>*/}
            {/*            {dataRespRe.map((item, key) =>*/}
            {/*                <div className={css(styles.cardPopularSubCol)} key={key}>*/}
            {/*                    <StyledResponsedResp*/}
            {/*                        imgSrc={item.imgsrc}*/}
            {/*                        txtTitle={item.title}*/}
            {/*                        txtContent={item.content}*/}
            {/*                        viewCount={item.viewCount}*/}
            {/*                        txtSubTitle={item.subTitle}*/}
            {/*                        txtSubContent={item.subContent}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        {dataMyFavouritesResponsesResponder.map((item, key) =>*/}
            {/*            <div className={css(styles.cardAllMain)} key={key}>*/}
            {/*                <StyledCardAllResponses*/}
            {/*                    imgSrc={item.imgsrc}*/}
            {/*                    imgSmall={item.imgSmall}*/}
            {/*                    txtTitle={item.title}*/}
            {/*                    txtContent={item.content}*/}
            {/*                    buttonValue={"Play"}*/}
            {/*                    buttonOnClick={(e) => handleOnClickRouteToPlayer()}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={css(styles.containerResponsedAll)}>*/}
            {/*    <div className={css(styles.cardRespondedRow)}>*/}
            {/*        <div className={css(styles.cardRespMain)}>*/}
            {/*            {dataRespRe.map((item, key) =>*/}
            {/*                <div className={css(styles.cardPopularSubCol)} key={key}>*/}
            {/*                    <StyledResponsedResp*/}
            {/*                        imgSrc={item.imgsrc}*/}
            {/*                        txtTitle={item.title}*/}
            {/*                        txtContent={item.content}*/}
            {/*                        viewCount={item.viewCount}*/}
            {/*                        txtSubTitle={item.subTitle}*/}
            {/*                        txtSubContent={item.subContent}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        {dataMyFavouritesResponsesResponder.map((item, key) =>*/}
            {/*            <div className={css(styles.cardAllMain)} key={key}>*/}
            {/*                <StyledCardAllResponses*/}
            {/*                    imgSrc={item.imgsrc}*/}
            {/*                    imgSmall={item.imgSmall}*/}
            {/*                    txtTitle={item.title}*/}
            {/*                    txtContent={item.content}*/}
            {/*                    buttonValue={"Play"}*/}
            {/*                    buttonOnClick={(e) => handleOnClickRouteToPlayer()}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={css(styles.containerResponsedAll)}>*/}
            {/*    <div className={css(styles.cardRespondedRow)}>*/}
            {/*        <div className={css(styles.cardRespMain)}>*/}
            {/*            {dataRespRe.map((item, key) =>*/}
            {/*                <div className={css(styles.cardPopularSubCol)} key={key}>*/}
            {/*                    <StyledResponsedResp*/}
            {/*                        imgSrc={item.imgsrc}*/}
            {/*                        txtTitle={item.title}*/}
            {/*                        txtContent={item.content}*/}
            {/*                        viewCount={item.viewCount}*/}
            {/*                        txtSubTitle={item.subTitle}*/}
            {/*                        txtSubContent={item.subContent}*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        {dataMyFavouritesResponsesResponder.map((item, key) =>*/}
            {/*            <div className={css(styles.cardAllMain)} key={key}>*/}
            {/*                <StyledCardAllResponses*/}
            {/*                    imgSrc={item.imgsrc}*/}
            {/*                    imgSmall={item.imgSmall}*/}
            {/*                    txtTitle={item.title}*/}
            {/*                    txtContent={item.content}*/}
            {/*                    buttonValue={"Play"}*/}
            {/*                    buttonOnClick={(e) => handleOnClickRouteToPlayer()}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Container>

    );
}

export default UserRespondResponsesResponder;
