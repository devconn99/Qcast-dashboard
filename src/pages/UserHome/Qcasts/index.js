import React, { useState } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col } from "react-bootstrap";

import { StyledCardQcasters, StyledCardSubscription, StyledCardPopularLarge } from "components"

import { dataQcastersFirst, dataQcastersSecond } from "fakeapi";
import { ROUTES } from "constants";

const UserHomeQcasts = () => {
  const filterDatas = () => {

    return dataQcastersFirst;
  }
  const [filterVal, setFilterVal] = useState(filterDatas());

  return (
    <Container fluid className={css(styles.container)}>

      <div className={css(styles.containerFeatured)}>

        <div className={css(styles.cardGrid3)}>
          {dataQcastersFirst.map((item, key) =>
            <div key={key} className={css(styles.cardFirstSubCol)}>
              <StyledCardPopularLarge
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

        <div className={css(styles.cardGrid5)}>
          {dataQcastersSecond.map((item, key) =>
            <div key={key} className={css(styles.cardSecondSubCol)}>
              <StyledCardSubscription
                imgsrc={item.imgsrc}
                txtTitle={item.title}
                txtContent={item.content}
                txtSubTitle = {item.subTitle}
                txtSubContent={item.subContent}
                viewCount={item.viewCount}
                buttonValue={"+ Add"}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default UserHomeQcasts;