import React, { useState } from 'react';
import {Container, Row} from "react-bootstrap";
import {css} from "aphrodite";
import styles from "../All/styles";
import {dataJessicaRespond, dataMyFavouritesRespond} from "../../../../fakeapi";
import {StyledCardPopular, StyledImageCircle} from "../../../../components";
import {StyledCardSavedQcasts} from "../../../../components/BasicComponents/StyledCards";

const UserRespondSavedQcasts = (props) => {
    return (
        <Container fluid className={css(styles.container)}>
            <div className={css(styles.containerResponsedAll)}>
                <div style={{ display: "flex" }}>
                    <p className={css(styles.txtTitle)}> Subscribed Qcasters </p>
                </div>

                <Row>
                    {dataJessicaRespond.map((item) =>
                        <div className={css(styles.gridColFirst)}>
                            <div className={css(styles.imgSrc)}>
                                <StyledImageCircle imgSrc={item.imgsrc} />
                            </div>
                            <p className={css(styles.txtDataFirst)}> {item.title} </p>
                        </div>
                    )}
                </Row>
            </div>

            <div className={css(styles.containerResponsedAll)}>
                <div style={{ display: "flex" }}>
                    <p className={css(styles.txtTitle)}> Saved Qcasts </p>
                </div>

                <div className={css(styles.cardRespondedRow)}>
                    {dataMyFavouritesRespond.map((item, key) =>{
                        return (<div className={css(styles.cardMyFavorites)} key={key}>
                            <StyledCardSavedQcasts
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                                buttonValue={"Load Qcast"}
                            />
                        </div>)

                    })}
                </div>
            </div>

            <div className={css(styles.containerResponsedAll)}>
                <div style={{ display: "flex" }}>
                    <p className={css(styles.txtTitle)}> My Favourites </p>
                </div>

                <div className={css(styles.cardRespondedRow)}>
                    {dataMyFavouritesRespond.map((item, key) =>
                        <div className={css(styles.cardAllMain)} key={key}>
                            <StyledCardPopular
                                imgSrc={item.imgsrc}
                                txtTitle={item.title}
                                txtContent={item.content}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default UserRespondSavedQcasts;
