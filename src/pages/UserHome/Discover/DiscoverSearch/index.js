import React, { useState, useEffect } from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container, Row, Col } from "react-bootstrap";
import queryString from "query-string";

import { dataDiscoverSearchResults } from "fakeapi";
import { StyledCardQcasters, StyledCardPopularLarge, StyledButtonSimpleFluid } from "components";
import img_noResult from "assets/images/icons/noResult.png";

const UserHomeDiscoverSearch = (props) => {
  const params = queryString.parse(props.location.search);

  const filterDatas = () => {
    if (params.key.toLowerCase() === "qcast".toLowerCase()) {
      return dataDiscoverSearchResults;
    }
    return { qcasters: [], qcasts: [] };
  }
  const [filterVal, setFilterVal] = useState(filterDatas());

  useEffect(() => {
    setFilterVal(filterDatas());
  }, [params.key])

  return (
    <Container fluid className={css(styles.container)}>
      {filterVal.qcasters.length === 0 ?
        <>
          <div className={css(styles.containerNoResult)}>
            <img
              src={img_noResult}
              alt=""
              className={css(styles.img_noResult)}
            />
            <p className={css(styles.txtNoResultTitle)}>No search result</p>
            <p className={css(styles.txtNoResultContent)}>Search again or go back</p>
          </div>
        </>
        :
        <>
          <p className={css(styles.txtTitleLarge)}> Search Result </p>
          <div className={css(styles.containerFeatured)}>
            <div className={css(styles.containterTitle)}>
              <p className={css(styles.txtTitle)}> Qcasters </p>
              <div className={css(styles.btnViewAll)}>
                <StyledButtonSimpleFluid
                  size={14}
                  value={"View All >"}
                />
              </div>
            </div>

            <Row className={css(styles.cardFeaturedSubRow)}>
              {filterVal.qcasters.map((item, key) =>
                <Col key={key} className={css(styles.cardFeaturedSubCol)}>
                  <StyledCardQcasters
                    txtTitle={item.title}
                    imgsrc={item.imgsrc}
                    viewCount={item.viewCount}
                  />
                </Col>
              )}
            </Row>
          </div>

          <div className={css(styles.containerFeatured)}>
            <div className={css(styles.containterTitle)}>
              <p className={css(styles.txtTitle)}> Qcasts </p>
              <div className={css(styles.btnViewAll)}>
                <StyledButtonSimpleFluid
                  size={14}
                  value={"View All >"}
                />
              </div>
            </div>

            <div className={css(styles.cardPopularSubRow)}>
              {filterVal.qcasts.map((item, key) =>
                <div className={css(styles.cardPopularSubCol)} key={key}>
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
          </div>
        </>
      }
    </Container>
  );
}

export default UserHomeDiscoverSearch;