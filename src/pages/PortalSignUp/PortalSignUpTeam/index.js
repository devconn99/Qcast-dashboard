import React, { useState, useEffect } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

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

function PortalSignUpTeam(props) {
	const teamname = useFormInput('');
	const [errorTeamName, setErrorTeamName] = useState(null);

	const moveTopSmooth = () => window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});


	useEffect(
		moveTopSmooth,
		[]
	);

	const handleCreateTeam = (e) => {
		if (teamname.value.length === 0) {
			setErrorTeamName("Please enter team name.");
			return;
		}
		setErrorTeamName(null);
		props.history.push(ROUTES.USER_HOME_DISCOVER_MAIN);
	}
	const handleSkipForTeam = (e) => {
		e.preventDefault();
		props.history.push(ROUTES.USER_HOME_DISCOVER_MAIN);
	}

	return (
		<div className={css(styles.container)}>

			<Container className={css(styles.cardMain)}>

				<NavLink to={ROUTES.HOME}>
					<img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
				</NavLink>

				<p className={css([styles.txtEnterEmail])}> Set a team name </p>
				<p className={css([styles.txtEnterSendLarge])}> A team is where you and your friends can create and share Qcasts. Hit: Most people use the name of their organization </p>

				<form>

					<StyledSignInput type="text" placeholder={"Enter team name"} {...teamname} />
					{errorTeamName === null ?
						null : <div className={css([styles.errorEmail])}>
							<img src={img_error} alt="Error" className={css([styles.imgError])} />
							<p className={css([styles.txtErrorEmail])}> {errorTeamName} </p>
						</div>
					}

					<StyledSignButton value="Create team" onClick={handleCreateTeam} />
					<Link to="/portal/register/email" className={css([styles.txtSkipForNow])} onClick={handleSkipForTeam}> Skip for now </Link>

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

export default PortalSignUpTeam;
