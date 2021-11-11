import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { css } from "aphrodite";

import styles from "./styles";
import { StyledSignButton } from "../../../components";
import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";
import img_finishPayment from "../../../assets/images/icons/finishPayment.png";

function PortalSignUpPaymentFinish(props) {
  useEffect(
    () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    []
  );

  const handleFinish = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_FRIEND);
  }

  return (
    <div className={css(styles.main)}>
      <Container className={css(styles.container)}>
        <div className={css(styles.cardMain)}>
          <NavLink to={ROUTES.HOME}>
            <img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
          </NavLink>
          <div className={css(styles.cardSmall)}>
            <img src={img_finishPayment} alt="SendEmail" className={css([styles.imgSendEmail])} />
          </div>
        </div>

        <p className={css([styles.txtReviewFinish])}> Payment successful. <br /> You are subscribed to Pro plan. </p>

        <div className={css(styles.cardSmall)}>
          <StyledSignButton value="Finish setting up" onClick={handleFinish} />
        </div>

        <div className={css(styles.cardBottom)}>
          <p className={css([styles.txtPolicy])}>
            • <span className={css([styles.txtContent])}>GDPR</span> &nbsp;
            • <span className={css([styles.txtContent])}>Privacy Policy</span> &nbsp;
            • <span className={css([styles.txtContent])}>Terms & Conditions</span> </p>
          <p className={css([styles.txtCopyright])}> Copyright 2021 Qcast LTD. </p>
        </div>
      </Container>
    </div >
  );
}

export default PortalSignUpPaymentFinish;
