import React from "react";
import { css } from "aphrodite";

import styles from "./styles";
import { StyledImageFluid } from "components";
import { ROUTES } from "../../../../constants";
import { dataTopics } from "fakeapi";

const UserHomeTopicsMain = (props) => {
  const handleClick = (key) => {
    console.log("clicked", key);
    props.history.push(ROUTES.USER_HOME_TOPICS_COUNSELLING + "?key=" + key);
  };

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.containerFeatured)}>
        <div className={css(styles.topicRow)}>
          {dataTopics.map((item, key) =>
            <div key={key} className={css(styles.topicCol)}>
              <div onClick={() => handleClick(key)} className={css(styles.img_avatar)}>
                <StyledImageFluid imgSrc={item.imgsrc} />
              </div>
              <div className={css(styles.topicDetails)}>
                <p className={css(styles.txtTitle)}> {item.title} </p>
                <p className={css(styles.txtContent)}> {item.content} </p>
              </div>
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default UserHomeTopicsMain;