import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { css } from "aphrodite";

import styles from "./styles";
import { StyledCardSimple, StyledSignButton, StyledCheckButtonSimple, StyledCheckPlanDate } from "../../../components";
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
  const valCount = useFormInput('');
  const [isMonthly, setIsMonthly] = useState(true);

  const strPlans = [
    ["Profile Page", true, true, true],
    ["Team Workspace", false, false, true],
    ["Webcam Feature", false, true, true],
    ["Instant video editing", "In App only", true, true],
    ["Video Title", false, false, false],
    ["Channel Permissions", false, false, true],
    ["Ban and report", true, true, true],
    ["Private to the Workspace", false, false, true],
    ["Single Sign On (SSO + SAML)", false, false, true],
    ["Account Transfer and ownership of content (Admin, Contributor, View)", false, false, true],
    ["Telephone Based Support", false, false, true],
    ["Live Chat", true, true, true],
    ["Dedicated Account Manager", false, false, true],
    ["Qcast Plugin Feature", false, false, true]
  ];

  useEffect(
    () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    []
  );

  const handleSelect = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_PAYMENT_REVIEW);
  }

  return (
    <div className={css(styles.main)}>
      <Container className={css(styles.container)}>

        <div className={css(styles.cardPlanFirst)}>
          <div className={css(styles.cardMain)}>
            <NavLink to={ROUTES.HOME}>
              <img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
            </NavLink>
          </div>
          <p className={css([styles.txtPlanSelectTitle])}> Select pricing model </p>
        </div>

        <div className={css(styles.cardPlanSecond)}>
          <div className={css(styles.cardPlanSelectBtn)}>
            <StyledCheckPlanDate value="Monthly" checked={isMonthly} onClick={() => setIsMonthly(true)} />
          </div>
          <div className={css(styles.cardPlanSelectBtn)}>
            <StyledCheckPlanDate value="Yearly" checked={!isMonthly} onClick={() => setIsMonthly(false)} />
          </div>
          <p className={css([styles.txtPlanSelectContent])}> How many users will use Qcast? </p>
          <div>
            <input type="text" className={css([styles.textInput])} placeholder={""} {...valCount} />
          </div>
        </div>

        <div className={css(styles.cardPlanMain)}>
          <div className={css([styles.cardPlanRow])}>
            <div className={css([styles.cardPlanColFirst])}>
              {strPlans.map((val, idx) => {
                if (idx === 9) {
                  return (
                    <div className={css([styles.cardPlanColItems3])}> {val[0]}</div>);
                }
                else return (
                  <div className={css([styles.cardPlanColItems1])}> {val[0]}</div>);
              })}
            </div>
            <Row className={css([styles.cardPlanSubRow])}>
              <Col lg="4" md="12" className={css([styles.cardPlanSubCol])}>
                <StyledCardSimple>
                  <div className={css([styles.cardItemContainer])}>
                    <p className={css([styles.txtPlanItemTitle])}> Basic </p>
                    <div className={css([styles.txtPrice])}>
                      <p className={css([styles.txtPriceV])}> $0 </p>
                      <p className={css([styles.txtPriceD])}> / Month</p>
                    </div>
                    <p className={css([styles.txtPlanItemContentFirst])}> For individuals just <br /> getting started </p>

                    <StyledSignButton value="Select" onClick={handleSelect} />

                    <div className={css([styles.cardCheckItems])}>
                      {strPlans.map((val, idx) => {
                        if (idx === 9) {
                          return (
                            <div className={css([styles.cardPlanColItems3])}>
                              <StyledCheckButtonSimple checkState={val[1]} />
                            </div>);
                        }
                        else return (
                          <div className={css([styles.cardPlanColItems1])}>
                            <StyledCheckButtonSimple checkState={val[1]} />
                          </div>);
                      })}
                    </div>

                    <StyledSignButton value="Select" onClick={handleSelect} />
                  </div>
                </StyledCardSimple>
              </Col>
              <Col lg="4" md="12" className={css([styles.cardPlanSubCol])}>
                <StyledCardSimple>
                  <div className={css([styles.cardItemContainer])}>
                    <p className={css([styles.txtPlanItemTitle])}> Premium </p>
                    <div className={css([styles.txtPrice])}>
                      <p className={css([styles.txtPriceV])}> $0 </p>
                      <p className={css([styles.txtPriceD])}> / Month</p>
                    </div>
                    <p className={css([styles.txtPlanItemContentFirst])}> For individuals just <br /> getting started </p>

                    <StyledSignButton value="Select" onClick={handleSelect} />

                    <div className={css([styles.cardCheckItems])}>
                      {strPlans.map((val, idx) => {
                        if (idx === 9) {
                          return (
                            <div className={css([styles.cardPlanColItems3])}>
                              <StyledCheckButtonSimple checkState={val[2]} />
                            </div>);
                        }
                        else return (
                          <div className={css([styles.cardPlanColItems1])}>
                            <StyledCheckButtonSimple checkState={val[2]} />
                          </div>);
                      })}
                    </div>

                    <StyledSignButton value="Select" onClick={handleSelect} />
                  </div>
                </StyledCardSimple>
              </Col>
              <Col lg="4" md="12" className={css([styles.cardPlanSubCol])}>
                <StyledCardSimple>
                  <div className={css([styles.cardItemContainer])}>
                    <p className={css([styles.txtPlanItemTitle])}> Business </p>
                    <div className={css([styles.txtPrice])}>
                      <p className={css([styles.txtPriceV])}> $0 </p>
                      <p className={css([styles.txtPriceD])}> / Month</p>
                    </div>
                    <p className={css([styles.txtPlanItemContentFirst])}> For individuals just <br /> getting started </p>

                    <StyledSignButton value="Select" onClick={handleSelect} />

                    <div className={css([styles.cardCheckItems])}>
                      {strPlans.map((val, idx) => {
                        if (idx === 9) {
                          return (
                            <div className={css([styles.cardPlanColItems3])}>
                              <StyledCheckButtonSimple checkState={val[3]} />
                            </div>);
                        }
                        else return (
                          <div className={css([styles.cardPlanColItems1])}>
                            <StyledCheckButtonSimple checkState={val[3]} />
                          </div>);
                      })}
                    </div>

                    <StyledSignButton value="Select" onClick={handleSelect} />
                  </div>
                </StyledCardSimple>
              </Col>
            </Row>
          </div>
        </div>

        <div className={css(styles.cardBottom)}>
          <p className={css([styles.txtPolicy])}>
            • <span className={css([styles.txtContent])}>GDPR</span> &nbsp;
            • <span className={css([styles.txtContent])}>Privacy Policy</span> &nbsp;
            • <span className={css([styles.txtContent])}>Terms & Conditions</span> </p>
          <p className={css([styles.txtCopyright])}> Copyright 2021 Qcast LTD. </p>
        </div>
      </Container >
    </div >
  )
}
export default PortalSignUpPaymentDetail;