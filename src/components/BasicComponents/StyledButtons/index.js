// @flow
import React, {useEffect, useState} from 'react';
import { css } from "aphrodite";
import styles from './styles';
import {NavLink, useLocation} from "react-router-dom";
import img_add_svg from "../../../assets/images/icons/iconAddPlSvg.svg";
import queryString from "query-string";

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

export const StyledButtonNavLinkSwitchRespons = (props) => {
	const { size, isActive, isActives, ...otherprops } = props;
	const btnStyle = size === "small" ? css(styles.linkButtonSmall) : css(styles.linkButton);
	const btnStyleActive = size === "small" ? css(styles.linkButtonActiveSmall) : css(styles.linkButtonActive);

	const location = useLocation();
	const loc = location.pathname;
	const searchRespond = "/user/respond/responses";

	return (
		< >
			<NavLink
				{...otherprops}
				className={
					(isActive === true || loc.includes(searchRespond)) ?
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

export const StyledButtonNavLinkSwitchPlaylists = (props) => {
	const { size, isActive, isActives, ...otherprops } = props;
	const btnStyle = size === "small" ? css(styles.linkButtonSmall) : css(styles.linkButton);
	const btnStyleActive = size === "small" ? css(styles.linkButtonActiveSmall) : css(styles.linkButtonActive);

	const location = useLocation();
	const loc = location.pathname;
	const searchRespond = "/user/respond/myPlaylists";

	return (
		< >
			<NavLink
				{...otherprops}
				className={
					(isActive === true || loc.includes(searchRespond)) ?
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

export const StyledButtonSimpleResponse = (props) => {
	const { size, value, isActive, buttonOnClick, ...otherprops } = props;

	const get_fontstyle = (size) => {
		switch (size) {
			case 14:
				return css(styles.fontSize18);
			case 16:
				return css(styles.fontSize18);
			case 5:
				return css(styles.fontSize18);
			default:
				return css(styles.fontSize18);
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

export const StyledButtonSimplePlaylist = (props) => {
	const { size, value, isActive, buttonOnClick, ...otherprops } = props;

	const get_fontstyle = (size) => {
		switch (size) {
			case 14:
				return css(styles.fontSize19);
			case 16:
				return css(styles.fontSize19);
			case 5:
				return css(styles.fontSize19);
			default:
				return css(styles.fontSize19);
		}
	}

	return (
		< >
			<span className={css(styles.clearBtn)}>
                  <img
					  src={img_add_svg}
					  alt=""
					  className={css(styles.img_add_pl)}
				  />
                </span>
			<span className={css(styles.create_pl)}>
				Create Playlist
                </span>
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


export const StyledButtonSimpleAddPlaylist = (props) => {
	const { size, value, isActive, buttonOnClick, ...otherprops } = props;

	const get_fontstyle = (size) => {
		switch (size) {
			case 14:
				return css(styles.fontSize19);
			case 16:
				return css(styles.fontSize19);
			case 5:
				return css(styles.fontSize19);
			default:
				return css(styles.fontSize19);
		}
	}

	return (
		< >
			<span className={css(styles.clearBtn)}>
                  <img
					  src={img_add_svg}
					  alt=""
					  className={css(styles.img_add_pl)}
				  />
                </span>
			<input
				size="sm"
				type="button"
				value={value}
				className={[isActive === true ? css(styles.simpleButtonPlaylistActive) : css(styles.simpleButtonPlaylist), get_fontstyle(size)].join(' ')}
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
		</>
	);
}





export const StyledButtonPlaysPl = (props) => {
	const [play, setPlay] = useState(false);

	const handleOnClickCtrlBtn = (clickedItem) => {
		switch (clickedItem) {
			case "play":
				setPlay(!play);
				break;
			default:
				break;
		}
	};


	return (
		< >
			<div className={css(styles.qcastPlayBtnDiv)} onClick={(e) => handleOnClickCtrlBtn("play")}>
				<div className={play === false ? css(styles.qcastPlayBtn) : css(styles.qcastPlayBtnActive)}>
					<img
						src={img_add_svg}
						alt=""
					/>
				</div>
			</div>
		</>
	);
}
