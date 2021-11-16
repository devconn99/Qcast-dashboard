import React from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col } from "react-bootstrap";
import { StyledCardFeature, StyledCardPopular, StyledCardSubscription, StyledButtonSimpleFluid } from "components"

import { dataFeatured, dataMostPopular, dataSubscription } from "fakeapi";
import { ROUTES } from "../../../../constants";

const UserHomeDiscoverMain = (props) => {

  const handleClickViewAllPopular = () => {
    props.history.push(ROUTES.USER_HOME_DISCOVER_POPULAR);
  }

  return (
    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerFeatured)}>
        <p className={css(styles.txtTitle)}> Featured </p>

        <Row className={css(styles.cardFeaturedSubRow)}>
          {dataFeatured.map((item, key) =>
            <Col xl={3} md={6} key={key} className={css(styles.cardFeaturedSubCol)}>
              <StyledCardFeature
                imgSrc={item.imgsrc}
                txtTitle={item.title}
                txtContent={item.content}
              />
            </Col>
          )}
        </Row>
      </div>

      <div className={css(styles.containerFeatured)}>
        <div style={{ display: "flex" }}>
          <p className={css(styles.txtTitle)}> Most Popular </p>
          <div className={css(styles.btnViewAll)}>
            <StyledButtonSimpleFluid
              size={14}
              value={"View All >"}
              buttonOnClick={handleClickViewAllPopular}
            />
          </div>
        </div>

        <div className={css(styles.cardPopularSubRow)}>
          {dataMostPopular.map((item, key) =>
            <div className={css(styles.cardPopularSubCol)} key={key}>
              <StyledCardPopular
                imgSrc={item.imgsrc}
                txtTitle={item.title}
                txtContent={item.content}
              />
            </div>
          )}
        </div>
      </div>

      <div className={css(styles.containerFeatured)}>
        <div style={{ display: "flex" }}>
          <p className={css(styles.txtTitle)}> New from Subscription </p>
          <div className={css(styles.btnViewAll)}>
            <StyledButtonSimpleFluid size={14} value={"View All >"} />
          </div>
        </div>

        <Row className={css(styles.cardFeaturedSubRow)}>
          {dataSubscription.map((item, key) =>
            <Col xl={3} md={6} key={key} className={css(styles.cardFeaturedSubCol)}>
              <StyledCardSubscription
                imgsrc={item.imgsrc}
                txtTitle={item.title}
                txtContent={item.content}
                txtSubTitle = {item.subTitle}
                txtSubContent={item.subContent}
                viewCount={item.viewCount}
                buttonValue={"+ Add"}
              />
            </Col>
          )}
        </Row>
      </div>
    </Container>
  );
}

export default UserHomeDiscoverMain;