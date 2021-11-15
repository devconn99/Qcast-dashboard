// @flow
import React from 'react';
import { css } from "aphrodite";
import styles from './styles';
import { NavLink } from "react-router-dom";

export const Tabs = (props) => {
	const { size, isActive, isActives, state, index, search, ...otherprops } = props;
	const btnStyle = size === "small" ? css(styles.linkButtonSmall) : css(styles.linkButton);
	const btnStyleActive = size === "small" ? css(styles.linkButtonActiveSmall) : css(styles.linkButtonActive);
	if (state == index) {
		return isActive == true
	}

	console.log(search)

	return (
		< >
			<NavLink
				{...otherprops}
				className={
					isActive === true ?
						btnStyleActive
						:
						btnStyle
				}
			>
				{props.children}
			</NavLink>
		</>
	);
}

export const StyledButtonNavLink = (props) => {
	const { size, isActive, isActives, ...otherprops } = props;
	const btnStyle = size === "small" ? css(styles.linkButtonSmall) : css(styles.linkButton);
	const btnStyleActive = size === "small" ? css(styles.linkButtonActiveSmall) : css(styles.linkButtonActive);

	return (
		< >
			<NavLink
				{...otherprops}
				className={
					isActive === true ?
						btnStyleActive
						:
						btnStyle
				}
				activeClassName={btnStyleActive}
			>
				{props.children}
			</NavLink>
		</>
	);
}

export const StyledButtonNavLinks = (props) => {
	const { size, isActive, ...otherprops } = props;
	console.log('vova', props)
	const btnStyle = size === "small" ? css(styles.linkButtonSmall) : css(styles.linkButton);
	const btnStyleActive = size === "small" ? css(styles.linkButtonActiveSmall) : css(styles.linkButtonActive);

	return (
		< >
			<NavLink
				{...otherprops}
				className={
					isActive === true ?
						btnStyleActive
						:
						btnStyle
				}
				activeClassName={btnStyleActive}
			>
				{props.children}
			</NavLink>
		</>
	);
}

export const StyledButtonSimpleFluid = (props) => {
	const { size, value, isActive, buttonOnClick, ...otherprops } = props;

	const get_fontstyle = (size) => {
		switch (size) {
			case 14:
				return css(styles.fontSize14);
			case 16:
				return css(styles.fontSize16);
			case 5:
				return css(styles.fontSize16);
			default:
				return css(styles.fontSize16);
		}
	}

	return (
		< >
			<input
				size="sm"
				type="button"
				value={value}
				className={[isActive === true ? css(styles.simpleButtonFluidActive) : css(styles.simpleButtonFluid), get_fontstyle(size)].join(' ')}
				{...otherprops}
				onClick={buttonOnClick}
			/>
		</>
	);
}

export const StyledButtonSimpleFluidLittle = (props) => {
	const { size, img_people, value, buttonOnClick, ...otherprops } = props;

	const get_fontstyle = (size) => {
		switch (size) {
			case 14:
				return css(styles.fontSize14);
			case 16:
				return css(styles.fontSize16);
			case 5:
				return css(styles.fontSize16);
			default:
				return css(styles.fontSize16);
		}
	}

	return (
		< >
			<div className={[css(styles.simpleButtonFluidlittle), get_fontstyle(size)].join(' ')}>
				<div style={{ textAlign: 'center', paddingTop: '12px' }} onClick={buttonOnClick}>
					<img
						src={img_people}
						alt=""
						className={css(styles.img_60)}
					/>
					<p style={{ display: "inline-block", marginLeft: "10px" }}>{value}</p>
				</div>

			</div>

			{/* <input
				size="sm"
				type="button"
				value={value}
				className={[css(styles.simpleButtonFluidlittle), get_fontstyle(size)].join(' ')}
				{...otherprops}
				onClick={buttonOnClick}
			/> */}
		</>
	);
}