// @flow
import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

	container: {
		fontFamily: "Poppins",
		fontStyle: "normal",
		position: "relative",
		background: "linear-gradient(135.07deg, rgb(241, 249, 255) 6.66%, rgb(220, 232, 247) 104.83%) !important",
		minHeight: 1080,
	},

	imgLogo: {
		maxWidth: "100%",
		marginBottom: 25,
	},
	imgError: {
		height: 30,
	},

	cardMain: {
		position: "relative",
		maxWidth: 435,
		paddingTop: 100,
		paddingBottom: 100,
		display: "flex",
		flexDirection: "column",
	},
	cardBottom: {
		position: "absolute",
		bottom: 0,
		width: "100%",
	},
	cardBottomWrap: {
		maxWidth: 380,
	},

	txtEnterEmail: {
		fontSize: 18,
		fontWeight: "600",
		lineHeight: "27px",
		textAlign: "center",
		color: "#97AAC3",
		marginTop: 10,
		marginBottom: 0,
	},
	txtEnterSendLarge: {
		fontSize: 16,
		fontWeight: "400",
		lineHeight: "24px",
		textAlign: "center",
		color: "#97AAC3",
		marginTop: 5,
		marginBottom: 20,
		marginLeft: -30,
		marginRight: -30,
		"@media (max-width: 520px)": {
			marginLeft: 0,
			marginRight: 0,
		},
	},
	errorEmail: {
		marginTop: 0,
		marginBottom: 10,
		display: "flex",
		alignItems: "center",
	},
	txtErrorEmail: {
		display: "flex",
		marginTop: 0,
		marginBottom: 0,
		fontSize: 14,
		fontWeight: "500",
		lineHeight: "21px",
		color: "#7B94B5",
	},

	txtPolicy: {
		fontSize: 14,
		fontWeight: "400",
		lineHeight: "21px",
		color: "#515A6B",
		textAlign: "center",
		marginTop: 40,
		marginBottom: 0,
	},
	txtCopyright: {
		fontSize: 14,
		fontWeight: "400",
		lineHeight: "21px",
		color: "#515A6B",
		textAlign: "center",
		marginBottom: 30,
	},
	txtContent: {
		color: "#97AAC3",
	},
	txtOR: {
		fontSize: 18,
		fontWeight: "400",
		lineHeight: "27px",
		color: "#97AAC3",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 0,
	},
	txtSkipForNow: {
		fontSize: 18,
		fontWeight: "600",
		lineHeight: "27px",
		color: "#7B94B5",
		display: "flex",
		marginLeft: "auto",
		marginRight: "auto",
		width: "fit-content",
		marginTop: 15,
		marginBottom: 0,
	},

});
