// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({

	textInput: {
		width: "100%",
		paddingTop: 17,
		paddingBottom: 17,
		paddingLeft: 17,
		paddingRight: 50,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 10,
		background: "#EFF6FC",
		border: "none",
		boxShadow:
			"inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
		fontSize: 16,
		lineHeight: "24px",
		color: "#515A6B",
		fontWeight: "400",
		"@media (max-width: 980px)": {
			// width: "60%",
		},
		"@media (max-width: 600px)": {
			// width: "80%",
		},
		":focus": {
			outline: "none",
		},
		"::placeholder": {
			color: "#7B94B5",
		}
	},

	showeye: {
		color: "#97AAC3",
		position: "absolute",
		right: 15,
		bottom: "35%",
		':hover': {
			color: "#97bbbb",
			cursor: "pointer",
		}
	},

	submitButton: {
		width: "100%",
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 17,
		paddingRight: 17,
		marginTop: 20,
		borderRadius: 100,
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		border: "none",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		fontSize: 18,
		color: "#7B94B5",
		fontWeight: "600",
		"@media (max-width: 980px)": {
			// width: "60%",
		},
		"@media (max-width: 600px)": {
			// width: "80%",
		},
		":focus": {
			outline: "none",
		},
	},

	cardDiv: {
		width: "100%",
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15,
		borderRadius: 15,
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		border: "none",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		fontSize: 18,
		color: "#7B94B5",
		fontWeight: "600",
		"@media (max-width: 980px)": {
			// width: "60%",
		},
		"@media (max-width: 600px)": {
			// width: "80%",
		},
		":focus": {
			outline: "none",
		},
	},

	cardSimple: {
		width: "100%",
		borderRadius: 15,
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		border: "none",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		fontSize: 18,
		color: "#7B94B5",
		fontWeight: "600",
		"@media (max-width: 980px)": {
			// width: "60%",
		},
		"@media (max-width: 600px)": {
			// width: "80%",
		},
		":focus": {
			outline: "none",
		},
	},

	cardCheckState: {
		height: 44,
		display: "flex",
		alignItems: "center",
		width: "100%",
		justifyContent: "center",
		fontSize: 16,
		fontWeight: "normal",
		lineHeight: "24px",
		color: "#97AAC3",
	},
	imgVisa: {
		width: 62,
		height: 20,
		position: "absolute",
		right: 15,
		bottom: "35%",
	},
	imgCheck: {
		width: 20,
		height: 20,
	},

	cardPlanDateTrue: {
		width: "100%",
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 17,
		paddingRight: 17,
		marginTop: 20,
		borderRadius: 100,
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		border: "none",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		fontSize: 16,
		fontWeight: "700",
		lineHeight: "24px",
		color: "#7B94B5",
		textAlign: "center",
		":focus": {
			outline: "none",
		},
	},
	cardPlanDateFalse: {
		fontSize: 16,
		fontWeight: "700",
		lineHeight: "24px",
		color: "#7B94B5",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 0,
		width: "100%",
		background: "transparent",
		border: 0,
	},

});
