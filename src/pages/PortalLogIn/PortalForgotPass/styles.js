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
	imgEmail: {
		height: 30,
	},
	imgError: {
		height: 30,
	},
	imgSendEmail: {
		width: "100%",
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
	txtEnterSend: {
		fontSize: 16,
		fontWeight: "400",
		lineHeight: "24px",
		textAlign: "center",
		color: "#97AAC3",
		marginTop: 5,
		marginBottom: 20,
	},
	txtNeedHelp: {
		fontSize: 18,
		fontWeight: "600",
		lineHeight: "27px",
		textAlign: "center",
		color: "#97AAC3",
		marginTop: 30,
		marginBottom: 10,
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

	sendEmail: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 0,
	},

	txtAccount: {
		fontSize: 18,
		fontWeight: "500",
		lineHeight: "27px",
		color: "#7B94B5",
		textAlign: "center",
		marginBottom: 0,
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
	txtReset: {
		fontSize: 20,
		fontWeight: "700",
		lineHeight: "30px",
		color: "#7B94B5",
		textAlign: "center",
		marginTop: 10,
		marginBottom: 0,
	},
	txtCheck: {
		fontSize: 16,
		fontWeight: "normal",
		lineHeight: "24px",
		color: "#7B94B5",
		textAlign: "center",
		marginTop: 7,
		marginBottom: 10,
	},

});
