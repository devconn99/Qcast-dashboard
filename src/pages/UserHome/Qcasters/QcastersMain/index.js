import React from 'react';
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";

import { StyledCardQcastersMain } from "components"
import { ROUTES } from "../../../../constants";
import { dataQcastersThird } from "fakeapi";

const UserHomeQcastersMain = (props) => {
  const handleOnClickViewProfile = (selectedID) => {
    props.history.push(ROUTES.USER_HOME_QCASTERS_PROFILE + "?id=" + selectedID);
  };
  return (
    <Container fluid className={css(styles.container)}>

      <div className={css(styles.containerFeatured)}>

        <div className={css(styles.cardGrid5)}>
          {dataQcastersThird.map((item, key) =>
            <div key={key} className={css(styles.cardSecondSubCol)}>
              <StyledCardQcastersMain
                txtTitle={item.title}
                imgsrc={item.imgsrc}
                viewCount={item.viewCount}
                buttonValue={"View Profile"}
                buttonOnClick={(e) => handleOnClickViewProfile(item.id)}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default UserHomeQcastersMain;