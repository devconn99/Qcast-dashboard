import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { css } from "aphrodite";

import styles from "./styles";
import { StyledSignButton, StyledCard } from "../../../components";
import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";

function PortalSignUpPaymentReview(props) {

  useEffect(
    () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    []
  );

  const handleCheckOut = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_PAYMENT_DETAIL);
  }
  const handleChangePlan = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_PAYMENT_PLAN);
  }

  return (
    <div className={css(styles.main)}>
      <Container className={css(styles.container)}>

        <div className={css(styles.cardMain)}>
          <NavLink to={ROUTES.HOME}>
            <img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
          </NavLink>
        </div>
        <div className={css(styles.cardLarge)}>
          <StyledCard>
            <div className={css([styles.cardReviewSub])}>
              <p className={css([styles.txtReviewTitle])}> Review payment </p>
              <div className={css([styles.cardReviewSubCol])}>
                <p className={css([styles.txtReviewDetailFirst])}> Qcast Pro plan </p>
                <p className={css([styles.txtReviewPriceFirst])}> $100.50 </p>
              </div>
              <p className={css([styles.txtReviewDetailSecond])}> 100 users </p>
              <p className={css([styles.txtReviewDetailSecond])}> 28 October, 2021 - 28 October 2022 </p>
              <hr className={css([styles.txtReviewDetailBar])} />
              <div className={css([styles.cardReviewSubCol])}>
                <p className={css([styles.txtReviewDetailThird])}> Tax </p>
                <p className={css([styles.txtReviewDetailThird])}> $10.50 </p>
              </div>
              <div className={css([styles.cardReviewSubCol])}>
                <p className={css([styles.txtReviewDetailFourth])}> Total Due </p>
                <p className={css([styles.txtReviewDetailFourth])}> $110.50 </p>
              </div>
            </div>
          </StyledCard>
          <div className={css([styles.cardReviewBtnSub])}>
            <div className={css([styles.cardReviewBtnSubCol])}>
              <StyledSignButton value="Check out" onClick={handleCheckOut} />
            </div>
            <div className={css([styles.cardReviewBtnSubCol])}>
              <StyledSignButton value="Change plan" onClick={handleChangePlan} />
            </div>
          </div>
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
  )
}
export default PortalSignUpPaymentReview;