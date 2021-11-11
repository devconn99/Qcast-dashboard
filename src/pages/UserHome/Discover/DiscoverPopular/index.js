import React from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";

import { dataMostPopularAll } from "fakeapi";
import { StyledImageCircle } from "components"

const UserHomeDiscoverPopular = () => {
  return (
    <Container fluid className={css(styles.container)}>
      <div className={css(styles.containerFeatured)}>
        <p className={css(styles.txtTitle)}> Most Popular </p>

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
          <div className={css(styles.gridColHeaderThird)}>
            LENGTH
          </div>

          {dataMostPopularAll.map((item) => (
            <>
              <div className={css(styles.gridColFirst)}>
                <div className={css(styles.img_avatar)}>
                  <StyledImageCircle size="small" imgSrc={item.imgsrc} />
                </div>
                <p className={css(styles.txtDataFirst)}> {item.title} </p>
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
              <div className={css(styles.gridColThird)}>
                <p className={css(styles.txtDataThird)}> {item.length}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default UserHomeDiscoverPopular;