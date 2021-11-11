// @flow
import { Container } from "react-bootstrap";
import { css } from "aphrodite";
import styles from "./styles";

import { StyledHeader, StyledSidebar } from "../../components";

export default function LayoutUser(props) {
  return (
    <>
      <StyledHeader />
      <div className={css(styles.container)}>
        <div className={css(styles.mainSidebar)}>
          <StyledSidebar />
        </div>
        <div className={css(styles.mainContent)}>
          {props.children}
        </div>
      </div>
    </>);
}