import React from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import {Container, Navbar, Row, Col} from "react-bootstrap";

import {dataMyFavouritesResponses} from "fakeapi";
import {StyledCardAllResponses} from "../../../../../components/BasicComponents/StyledCards";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../../constants";
import queryString from "query-string";

const UserRespondResponsesQuestioner = (props) => {

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
                                className={!params.tab ? btnStyleActive : btnStyle}
                            >
                                Questioner
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.USER_RESPOND_RESPONSES_RESPONDER}
                                className={(params.tab) ? btnStyleActive : btnStyle}
                            >
                                Responder
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Navbar>



          </div>

            <Row className={css(styles.rowCenter)}>
                <div className={css(styles.cardPlRow)}>
                    {dataMyFavouritesResponses.map((item, key) =>
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
                    )}
                </div>
            </Row>
            <Row className={css(styles.rowCenter)}>
                <div className={css(styles.cardPlRow)}>
                    {dataMyFavouritesResponses.map((item, key) =>
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
                    )}
                </div>
            </Row>
            <Row className={css(styles.rowCenter)}>
                <div className={css(styles.cardPlRow)}>
                    {dataMyFavouritesResponses.map((item, key) =>
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
                    )}
                </div>
            </Row>
            <Row className={css(styles.rowCenter)}>
                <div className={css(styles.cardPlRow)}>
                    {dataMyFavouritesResponses.map((item, key) =>
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
                    )}
                </div>
            </Row>
        </Container>

    );
}

export default UserRespondResponsesQuestioner;
