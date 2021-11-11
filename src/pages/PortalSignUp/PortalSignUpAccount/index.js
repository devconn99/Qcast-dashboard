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

function PortalSignUpAccount(props) {
	const userFname = useFormInput('');
	const userLname = useFormInput('');
	const passFirst = useFormInput('');
	const passSecond = useFormInput('');
	const useremail = useFormInput('');
	const teamname = useFormInput('');
	const [errorUserFname, setErrorUserFname] = useState(null);
	const [errorUserLname, setErrorUserLname] = useState(null);
	const [errorPass, setErrorPass] = useState(null);
	const [errorEmail, setErrorEmail] = useState(null);
	const [errorTeamName, setErrorTeamName] = useState(null);

	const [isNext, setIsNext] = useState(0);

	const moveTopSmooth = () => window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});


	useEffect(
		moveTopSmooth,
		[]
	);

	const handleNext = () => {
		if (userFname.value.length === 0 || userLname.value.length === 0) {
			if (userFname.value.length === 0) {
				setErrorUserFname("Please enter first name.");
			} else {
				setErrorUserFname(null);
			}
			if (userLname.value.length === 0) {
				setErrorUserLname("Please enter last name.");
			} else {
				setErrorUserLname(null);
			}
			return;
		}
		setErrorUserFname(null);
		setErrorUserLname(null);
		setIsNext(1);
		moveTopSmooth();
	}

	const handleSetPassword = () => {
		// Check password is valid and goto next step.
		if (passFirst.value.length === 0 || passSecond.value.length === 0) {
			setErrorPass("Please confirm password");
			return;
		} else if (passFirst.value !== passSecond.value) {
			setErrorPass("Confirm password doesn't match");
			return;
		}
		setErrorPass(null);
		props.history.push(ROUTES.PORTAL_SIGN_UP_PAYMENT_PLAN);

		// setIsNext(2);
		// moveTopSmooth();
	}

	const handleInviteMembers = () => {
		if (useremail.value === null) return;
		if (!validator.isEmail(useremail.value)) {
			setErrorEmail('Incorrect email.');
			return;
		}
		setErrorEmail(null);
		setIsNext(3);
		moveTopSmooth();
	}
	const handleImportCSV = () => {
		// Upload CSV file
		setIsNext(3);
	}
	const handleSkipForInvite = (e) => {
		e.preventDefault();
		setIsNext(3);
	}

	const handleCreateTeam = (e) => {
		if (teamname.value.length === 0) {
			setErrorTeamName("Please enter team name.");
			return;
		}
		setErrorTeamName(null);
		// Finishing Sign Up.
	}
	const handleSkipForTeam = (e) => {
		e.preventDefault();
		// Finishing Sign Up.
	}

	return (
		<div className={css(styles.container)}>

			{isNext === 0 ?
				<>
					<Container className={css(styles.cardMain)}>

						<NavLink to={ROUTES.HOME}>
							<img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
						</NavLink>

						<form>
							<p className={css([styles.txtEnterEmail])}> It's a pleasure to meet you </p>
							<p className={css([styles.txtEnterSend])}> Please enter your name to continue </p>

							<StyledSignInput type="text" placeholder={"First name"} {...userFname} />
							{errorUserFname === null ?
								null : <div className={css([styles.errorEmail])}>
									<img src={img_error} alt="Error" className={css([styles.imgError])} />
									<p className={css([styles.txtErrorEmail])}> {errorUserFname} </p>
								</div>
							}
							<StyledSignInput type="text" placeholder={"Last name"} {...userLname} />
							{errorUserLname === null ?
								null : <div className={css([styles.errorEmail])}>
									<img src={img_error} alt="Error" className={css([styles.imgError])} />
									<p className={css([styles.txtErrorEmail])}> {errorUserLname} </p>
								</div>
							}

							<StyledSignButton value="Next" onClick={handleNext} />

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
				</>
				:
				isNext === 1 ?
					<>
						<Container className={css(styles.cardMain)}>

							<NavLink to={ROUTES.HOME}>
								<img src={img_logo} alt="Logo" className={css([styles.imgLogo])} />
							</NavLink>

							<form>
								<p className={css([styles.txtEnterEmail])}> Set up a password </p>
								<p className={css([styles.txtEnterSend])}> Please enter a new password to continue </p>

								<StyledSignInput type="password" placeholder={"Enter password"} {...passFirst} />
								<StyledSignInput type="password" placeholder={"Confirm password"} {...passSecond} />
								{errorPass === null ?
									null : <div className={css([styles.errorEmail])}>
										<img src={img_error} alt="Error" className={css([styles.imgError])} />
										<p className={css([styles.txtErrorEmail])}> {errorPass} </p>
									</div>
								}

								<StyledSignButton value="Set up password" onClick={handleSetPassword} />

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
					</>
					:
					isNext === 2 ?
						<>
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
						</>
						:
						<>
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
						</>
			}
		</div >
	);
}

export default PortalSignUpAccount;
