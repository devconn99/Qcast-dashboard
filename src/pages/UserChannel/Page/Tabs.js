// @flow
import React from 'react';
import { css } from "aphrodite";
import styles from './styles';
import { NavLink } from "react-router-dom";

export const Tabs = (props) => {
	const { size, isActive,isActives,state,index,search,...otherprops } = props;
	const btnStyle = size === "small" ? css(styles.linkButtonSmall) : css(styles.linkButton);
	const btnStyleActive = size === "small" ? css(styles.linkButtonActiveSmall) : css(styles.linkButtonActive);
	if(state==index){
		return isActive==true
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
	const { size, isActive,isActives, ...otherprops } = props;
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






