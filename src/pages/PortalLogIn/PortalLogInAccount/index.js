import React, { useState, useEffect } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import validator from "validator";

import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";
import img_rock from "../../../assets/images/icons/lock.png";
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

function PortalLogInAccount(props) {
  const useremail = useFormInput('');
  const password = useFormInput('');
  const [errorEmail, setErrorEmail] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => props.history.push(ROUTES.USER_HOME_DISCOVER_MAIN), 2000);
  }, []);

  const handleLogin = () => {
    if (useremail.value === null) return;
    if (!validator.isEmail(useremail.value)) {
      setErrorEmail('Incorrect email.');
      return;
    }
    setErrorEmail(null);
    props.history.push(ROUTES.USER_HOME_DISCOVER_MAIN);
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

          <StyledSignInput type="email" placeholder={"Email"} {...useremail} />
          {errorEmail === null ?
            null : <div className={css([styles.errorEmail])}>
              <img src={img_error} alt="Error" className={css([styles.imgError])} />
              <p className={css([styles.txtErrorEmail])}> {errorEmail} </p>
            </div>
          }

          <StyledSignInput type="password" placeholder={"Password"} {...password} />
          <Link to={ROUTES.PORTAL_FORGOTPASS} className={css([styles.txtForgot])}> Forgot password? </Link>
          <StyledSignButton value="Sign in" onClick={handleLogin} />
          <div className={css([styles.loginSaml])}>
            <img src={img_rock} alt="Lock" className={css([styles.imgLock])} />
            <Link to={ROUTES.PORTAL_SSO_LOGIN} className={css([styles.txtSaml])}> Sign in with SAML </Link>
          </div>

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

export default PortalLogInAccount;
