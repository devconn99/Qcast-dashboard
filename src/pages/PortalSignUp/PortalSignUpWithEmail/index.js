import React, { useState, useEffect } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import { NavLink, Link, useHistory } from "react-router-dom";
import validator from "validator";

import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";
import img_sendemail from "../../../assets/images/icons/sendmail.png";
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

function PortalSignUpWithEmail(props) {
	const useremail = useFormInput('');
	const [errorEmail, setErrorEmail] = useState(null);
	const [checked, setChecked] = useState(false);
	const [isSentPass, setIsSentPass] = useState(false);
	const history = useHistory();

	useEffect(
		() => window.scrollTo({
			top: 0,
			behavior: 'smooth'
		}),
		[]
	);

	const handleRegister = () => {
		if (useremail.value === null) return;
		if (!validator.isEmail(useremail.value)) {
			setErrorEmail('Incorrect email.');
			return;
		}
		setErrorEmail(null);
		if (!checked) return;
		setIsSentPass(true);
	}
	const handleSignIn = () => {
		history.push(ROUTES.PORTAL_LOGIN);
	}

	return (
		<div className={css(styles.container)}>

			{!isSentPass ?
				<>
					<Container className={css(styles.cardMain)}>

						<NavLink to={ROUTES.HOME}>
							<img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
						</NavLink>

						<form>
							<p className={css([styles.txtEnterEmail])}> Enter your email address to continue </p>

							<StyledSignInput type="email" placeholder={"Email"} {...useremail} />
							{errorEmail === null ?
								null : <div className={css([styles.errorEmail])}>
									<img src={img_error} alt="Error" className={css([styles.imgError])} />
									<p className={css([styles.txtErrorEmail])}> {errorEmail} </p>
								</div>
							}

							<label className={css([styles.txtCheckPolicy])}>
								<input type="checkbox"
									defaultChecked={checked}
									onChange={() => setChecked(!checked)}
								/><span className={css([styles.policyCheckBox])}></span>
								&nbsp; I agree to <Link to="" className={css([styles.policyCheckBoxLink])}>Qcast Terms of Use</Link> and <Link to="" className={css([styles.policyCheckBoxLink])}>Privacy Policy</Link>
							</label>

							<StyledSignButton value="Sign up" onClick={handleRegister} />

						</form>
					</Container>

					<div className={css(styles.cardBottom)}>
						<Container className={css(styles.cardBottomWrap)}>
							<p className={css([styles.txtAccount])}> Already have a Qcast Account? </p>
							<StyledSignButton value="Sign in" onClick={handleSignIn} />
							<p className={css([styles.txtPolicy])}>
								• <span className={css([styles.txtContent])}>GDPR</span> &nbsp;
								• <span className={css([styles.txtContent])}>Privacy Policy</span> &nbsp;
								• <span className={css([styles.txtContent])}>Terms & Conditions</span> </p>
							<p className={css([styles.txtCopyright])}> Copyright 2021 Qcast LTD. </p>
						</Container>
					</div>
				</>
				:
				<>
					<Container className={css(styles.cardMain)}>
						<NavLink to={ROUTES.HOME}>
							<img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
						</NavLink>
						<Container className={css(styles.cardBottomWrap)}>
							<img src={img_sendemail} alt="SendEmail" className={css([styles.imgSendEmail])} />
						</Container>
						<p className={css([styles.txtReset])}> We have sent a confirmation email </p>
						<Container className={css(styles.cardBottomWrap)}>
							<p className={css([styles.txtCheck])}> Almost there! click the link in the email we just sent to verify it's you </p>
						</Container>
					</Container>

					<div className={css(styles.cardBottom)}>
						<Container className={css(styles.cardBottomWrap)}>
							<p className={css([styles.txtPolicy])}>
								• <span className={css([styles.txtContent])}>GDPR</span> &nbsp;
								• <span className={css([styles.txtContent])}>Privacy Policy</span> &nbsp;
								• <span className={css([styles.txtContent])}>Terms & Conditions</span> </p>
							<p className={css([styles.txtCopyright])}> Copyright 2021 Qcast LTD. </p>
						</Container>
					</div>
				</>
			}
		</div >
	);
}

export default PortalSignUpWithEmail;
