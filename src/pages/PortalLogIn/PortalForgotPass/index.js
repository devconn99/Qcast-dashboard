import React, { useState, useEffect } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import validator from "validator";

import { ROUTES } from "../../../constants";
import img_logo from "../../../assets/images/logo/LogoS.png";
import img_mail from "../../../assets/images/icons/mail.png";
import img_error from "../../../assets/images/icons/error.png";
import img_sendemail from "../../../assets/images/icons/sendmail.png";
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

function PortalForgotPass(props) {
	const useremail = useFormInput('');
	const [errorEmail, setErrorEmail] = useState(null);
	const [isSentPass, setIsSentPass] = useState(false);
	const history = useHistory();

	useEffect(
		() => window.scrollTo({
			top: 0,
			behavior: 'smooth'
		}),
		[]
	);

	const handleReset = () => {
		if (useremail.value === null) return;
		if (!validator.isEmail(useremail.value)) {
			setErrorEmail('Incorrect email.');
			return;
		}
		setErrorEmail(null);
		setIsSentPass(true);
	}
	const handleSigin = () => {
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
							<p className={css([styles.txtEnterEmail])}> Please enter your email address </p>
							<p className={css([styles.txtEnterSend])}> We will email you the new password </p>
							<StyledSignInput type="email" placeholder={"Email"} {...useremail} />
							{errorEmail === null ?
								null : <div className={css([styles.errorEmail])}>
									<img src={img_error} alt="Error" className={css([styles.imgError])} />
									<p className={css([styles.txtErrorEmail])}> {errorEmail} </p>
								</div>
							}

							<StyledSignButton value="Reset password" onClick={handleReset} />
							<p className={css([styles.txtNeedHelp])}> Need help? Please contact us at </p>
							<div className={css([styles.sendEmail])}>
								<img src={img_mail} alt="Email" className={css([styles.imgEmail])} />
								<p className={css([styles.txtErrorEmail])}> help@qcast.io </p>
							</div>

						</form>
					</Container>

					<div className={css(styles.cardBottom)}>
						<Container className={css(styles.cardBottomWrap)}>
							<p className={css([styles.txtAccount])}> Already have an Account? </p>
							<StyledSignButton value="Sign in" onClick={handleSigin} />
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
							<p className={css([styles.txtReset])}> Password reset link sent. </p>
							<p className={css([styles.txtCheck])}> Please check your email and follow the instructions to reset your password. </p>
							<StyledSignButton value="Sign in" path={ROUTES.PORTAL_LOGIN} onClick={handleSigin} />
						</Container>
					</Container>
				</>
			}

		</div>
	);
}

export default PortalForgotPass;