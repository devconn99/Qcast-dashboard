import React, { useState, useEffect } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import validator from "validator";

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

function PortalSignUpFriend(props) {
	const useremail = useFormInput('');
	const [errorEmail, setErrorEmail] = useState(null);

	const moveTopSmooth = () => window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});


	useEffect(
		moveTopSmooth,
		[]
	);

	const handleInviteMembers = () => {
		if (useremail.value === null) return;
		if (!validator.isEmail(useremail.value)) {
			setErrorEmail('Incorrect email.');
			return;
		}
		setErrorEmail(null);
		props.history.push(ROUTES.PORTAL_SIGN_UP_TEAM);
		moveTopSmooth();
	}
	const handleImportCSV = () => {
		// Upload CSV file
		props.history.push(ROUTES.PORTAL_SIGN_UP_TEAM);
	}
	const handleSkipForInvite = (e) => {
		e.preventDefault();
		props.history.push(ROUTES.PORTAL_SIGN_UP_TEAM);
	}

	return (
		<div className={css(styles.container)}>
			<Container className={css(styles.cardMain)}>

				<NavLink to={ROUTES.HOME}>
					<img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
				</NavLink>

				<p className={css([styles.txtEnterEmail])}> Qcast is better with friends </p>
				<p className={css([styles.txtEnterSendLarge])}> Invite your teammates to collaborate. You can add as many as you'd like and manage permissions later on. </p>

				<form>

					<StyledSignInput type="email" placeholder={"Enter email address (separate with commas)"} {...useremail} />
					{errorEmail === null ?
						null : <div className={css([styles.errorEmail])}>
							<img src={img_error} alt="Error" className={css([styles.imgError])} />
							<p className={css([styles.txtErrorEmail])}> {errorEmail} </p>
						</div>
					}

					<StyledSignButton value="Invite members" onClick={handleInviteMembers} />
					<p className={css([styles.txtOR])}> OR </p>
					<StyledSignButton value="Import CSV" onClick={handleImportCSV} />
					<Link to="/portal/register/email" className={css([styles.txtSkipForNow])} onClick={handleSkipForInvite}> Skip for now </Link>

				</form>
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
		</div >
	);
}

export default PortalSignUpFriend;
