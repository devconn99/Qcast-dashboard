import React, { useState, useEffect } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";
import img_error from "../../../assets/images/icons/error.png";
import { StyledSignInput, StyledSignButton } from "../../../components";

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

function PortalResetPass(props) {
  const passOrigin = useFormInput('');
  const passFirst = useFormInput('');
  const passSecond = useFormInput('');
  const [errorPass, setErrorPass] = useState(null);

  useEffect(
    () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    []
  );

  const handleSetPassword = () => {
    if (passOrigin.value.length === 0 || passFirst.value.length === 0 || passSecond.value.length === 0) {
      setErrorPass("Please confirm password");
      return;
    } else if (passFirst.value !== passSecond.value) {
      setErrorPass("Confirm password doesn't match");
      return;
    }
    setErrorPass(null);
    // Finishing Set up new password
  }
  const handleRegister = () => {
    props.history.push(ROUTES.PORTAL_SIGN_UP_WITH_EMAIL);
  }

  return (
    <div className={css(styles.container)}>

      <Container className={css(styles.cardMain)}>

        <NavLink to={ROUTES.HOME}>
          <img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
        </NavLink>

        <form>
          <p className={css([styles.txtEnterEmail])}> Set up new password </p>
          <StyledSignInput type="password" placeholder={"Current password"} {...passOrigin} />
          <StyledSignInput type="password" placeholder={"New password"} {...passFirst} />
          <StyledSignInput type="password" placeholder={"Confirm password"} {...passSecond} />
          {errorPass === null ?
            null : <div className={css([styles.errorEmail])}>
              <img src={img_error} alt="Error" className={css([styles.imgError])} />
              <p className={css([styles.txtErrorEmail])}> {errorPass} </p>
            </div>
          }
          <StyledSignButton value="Set new password" onClick={handleSetPassword} />
        </form>
      </Container>

      <div className={css(styles.cardBottom)}>
        <Container className={css(styles.cardBottomWrap)}>
          <p className={css([styles.txtAccount])}> Don't have a Qcast Account? </p>
          <StyledSignButton value="Sign up" onClick={handleRegister} />
          <p className={css([styles.txtPolicy])}>
            • <span className={css([styles.txtContent])}>GDPR</span> &nbsp;
            • <span className={css([styles.txtContent])}>Privacy Policy</span> &nbsp;
            • <span className={css([styles.txtContent])}>Terms & Conditions</span> </p>
          <p className={css([styles.txtCopyright])}> Copyright 2021 Qcast LTD. </p>
        </Container>
      </div>
    </div>
  );
}

export default PortalResetPass;
