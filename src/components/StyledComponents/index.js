// @flow
import React, { useState } from 'react';
import MaskInput from "react-maskinput";
import { css } from "aphrodite";
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import img_visa from "../../assets/images/icons/visaInc.png";
import img_check from "../../assets/images/icons/tickSquare.svg";

export function StyledSignInput(props) {
	const { type, hideEye, showVisa, ...otherprops } = props;
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisible = () => {
		setPasswordShown(!passwordShown);
	}

	if (type === "visa") {

	}

	return (
		<div style={{ position: "relative" }}>
			{type === "visa" ? (<>
				<MaskInput
					name={type}
					alwaysShowMask
					mask={'0000 0000 0000 0000'}
					size={20}
					showMask
					maskChar="*"
					className={`${css(styles.textInput)}`}
					{...otherprops}
				/>
				<img src={img_visa} alt="Visa" className={css([styles.imgVisa])} />
			</>) : type === "cvv" ? (<>
				<MaskInput
					name={type}
					alwaysShowMask
					mask={'000'}
					showMask
					maskChar="*"
					className={`${css(styles.textInput)}`}
					{...otherprops}
				/>
			</>) : type === "expdate" ? (<>
				<MaskInput
					name={type}
					alwaysShowMask
					mask={'00/00'}
					showMask
					maskString="MM/YY"
					className={`${css(styles.textInput)}`}
					{...otherprops}
				/>
			</>) : type === "password" ?
				(<>
					<input
						name={type}
						type={passwordShown ? "text" : "password"}
						className={`${css(styles.textInput)}`}
						{...otherprops}
					/>
					{hideEye === true ? ""
						: <FontAwesomeIcon onClick={togglePasswordVisible} icon={passwordShown ? faEye : faEyeSlash} size="lg" className={`${css(styles.showeye)}`} />
					}
				</>) :
				(<>
					<input
						name={type}
						type={type}
						className={`${css(styles.textInput)}`}
						{...otherprops}
					/>
				</>)
			}
		</div>
	);
}

export function StyledSignButton(props) {
	const { value, ...otherprops } = props;
	return (
		< >
			<input
				type="button"
				value={value}
				className={`${css(styles.submitButton)}`}
				{...otherprops}
			/>
		</>
	);
}

export const StyledCard = (props) => {
	return (
		<div className={`${css(styles.cardDiv)}`}>
			{props.children}
		</div>
	)
}
export const StyledCardSimple = (props) => {
	return (
		<div className={`${css(styles.cardSimple)}`}>
			{props.children}
		</div>
	)
}
export const StyledCheckButtonSimple = (props) => {

	return (
		<div className={`${css(styles.cardCheckState)}`}>
			{typeof props.checkState === 'string' ?
				props.checkState
				:
				props.checkState === true ?
					<img src={img_check} alt="Check" className={css([styles.imgCheck])} />
					:
					""
			}
		</div>
	)
}

export const StyledCheckPlanDate = (props) => {

	const { value, ...otherprops } = props;
	return (
		<>
			{props.checked ?
				<input
					type="button"
					value={value}
					className={`${css(styles.cardPlanDateTrue)}`}
					{...otherprops}
				/>
				:
				<input
					type="button"
					value={value}
					className={`${css(styles.cardPlanDateFalse)}`}
					{...otherprops}
				/>
			}
		</>
	)
}

