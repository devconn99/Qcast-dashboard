// @flow
import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

	// StyledButtonNavLink
	linkButton: {
		display: "block",
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#7B94B5",
		textDecoration: "none",
		fontSize: 18,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "27px",
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		}
	},
	linkButtonActive: {
		display: "block",
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#6497C7",
		textDecoration: "none",
		fontSize: 18,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "27px",
		background: "#EFF6FC",
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		borderRadius: 100,
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},
	linkButtonSmall: {
		display: "block",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#7B94B5",
		textDecoration: "none",
		fontSize: 16,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "24px",
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		}
	},
	linkButtonActiveSmall: {
		display: "block",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#6497C7",
		textDecoration: "none",
		fontSize: 16,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "24px",
		background: "#EFF6FC",
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		borderRadius: 100,
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},

	// StyledButtonSimpleFluid
	simpleButtonFluid: {
		width: "300px",
		height: "100%",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
	},
	simpleButtonFluidlittle: {
		width: "300px",
		height: "50px",
		top:'520px',
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
	},
	fontSize14: {
		fontSize: 14,
		color: "#7B94B5",
		fontWeight: "500",
		lineHeight: "21px",
	},
	fontSize16: {
		fontSize: 16,
		color: "#7B94B5",
		fontWeight: "0",
		lineHeight: "24px",
	},
});
