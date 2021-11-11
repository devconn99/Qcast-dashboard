import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { css } from "aphrodite";

import styles from "./styles";
import { StyledSignButton, StyledSignInput } from "../../../components";
import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";
import img_stripe from "../../../assets/images/icons/stripeButton.png";

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

function PortalSignUpPaymentDetail(props) {
  const valCardName = useFormInput('');
  const valCardNumber = useFormInput('');
  const valExpDate = useFormInput('');
  const valCVV = useFormInput('');
  const valPostCode = useFormInput('');
  const valBilAddress = useFormInput('');

  useEffect(
    () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    []
  );

  const handleMakePlan = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_PAYMENT_FINISH);
  }
  const handleGoBack = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_PAYMENT_REVIEW);
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

          <p className={css([styles.txtDetailTitle])}> Enter your card details to make payment </p>

          <Row className={css([styles.cardDetailSubRow])}>
            <Col md="6" sm="12">
              <p className={css([styles.txtDetailFirst])}> Name on the card </p>
              <StyledSignInput type="text" placeholder={""} {...valCardName} />
            </Col>
            <Col md="6" sm="12">
              <p className={css([styles.txtDetailFirst])}> Card number </p>
              <StyledSignInput type="visa" placeholder={"Enter your Visa card number"} {...valCardNumber} />
            </Col>
          </Row>
          <Row className={css([styles.cardDetailSubRow])}>
            <Col md="6" sm="12">
              <Row >
                <Col md="6" sm="12">
                  <p className={css([styles.txtDetailFirst])}> Expiration date </p>
                  <StyledSignInput type="expdate" placeholder={""} {...valExpDate} />
                </Col>
                <Col md="6" sm="12">
                  <p className={css([styles.txtDetailFirst])}> CVV </p>
                  <StyledSignInput type="cvv" placeholder={""} {...valCVV} />
                </Col>
              </Row>
            </Col>
            <Col md="6" sm="12" className={css([styles.cardDetailSubCol])}>
              <StyledSignInput type="text" placeholder={"Post code"} {...valPostCode} />
            </Col>
          </Row>
          <Row className={css([styles.cardDetailSubRow])}>
            <Col>
              <p className={css([styles.txtDetailFirst])}> Billing address </p>
              <StyledSignInput type="text" placeholder={""} {...valBilAddress} />
            </Col>
          </Row>
          <img src={img_stripe} alt="Logo" className={css([styles.imgStripe])} />
          <p className={css([styles.txtStripeContent])} >Powered by stripe payment solution. Qcast Ltd, does not hold confidential any information.</p>

          <div className={css([styles.cardDetailBtnSub])}>
            <div className={css([styles.cardDetailBtnSubCol])}>
              <StyledSignButton value="Make plan" onClick={handleMakePlan} />
            </div>
            <div className={css([styles.cardDetailBtnSubCol])}>
              <StyledSignButton value="Go back" onClick={handleGoBack} />
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
export default PortalSignUpPaymentDetail;