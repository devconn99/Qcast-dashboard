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
		width: "100%",
		height: "100%",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
	},
	simpleButtonFluidActive: {
		width: "100%",
		height: "100%",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#6497C7",
		background: "#EFF6FC",
		border: "none",
		borderRadius: 100,
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},

	simpleButtonPlaylist: {
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
		width: 57,
		height:57,
	},

	simpleButtonPlaylistActive: {
		paddingTop: 3,
		paddingBottom: 3,
		color: "#6497C7",
		width: 57,
		height:57,
		background: "#EFF6FC",
		border: "none",
		borderRadius: 100,
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
	},
	simpleButtonFluidlittle: {
		maxWidth: "300px",
		height: "50px",
		top:'520px',
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
		cursor: "pointer"
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
	fontSize18: {
		fontSize: 18,
		color: "#7B94B5",
		fontWeight: "500",
		lineHeight: "27px",
	},

	img_add_pl: {
		position: "absolute",
		marginTop: 13,
		marginLeft: 25,
		height: 20,
		width: 18,
	},

	create_pl: {
		position: "absolute",
		marginTop: 10,
		marginLeft: 50,
		fontSize: 18,
		color: "#7B94B5",
		fontWeight: "600",
		lineHeight: "27px",
	},

	fontSize19: {
		fontSize: 18,
		color: "#7B94B5",
		fontWeight: "600",
		lineHeight: "27px",
	},


	addPlaylist: {
		width: "100%",
		height: "100%",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
	},
	addPlaylistActive: {
		width: "100%",
		height: "100%",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#6497C7",
		background: "#EFF6FC",
		border: "none",
		borderRadius: 100,
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},

	playlistButton: {
		cursor: "pointer",
		marginTop: 10,
		marginLeft: 100,
		display: "flex",
		height: 50,
		width: 50,
		color: "#7B94B5",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
		border: "none",
		borderRadius: 100,
	},

	qcastPlayBtnDiv: {
		display: "flex",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		cursor: "pointer",
		marginBottom: 10,
	},
	qcastPlayBtn: {
		display: "flex",
		width: 52,
		height: 52,
		alignItems: "center",
		justifyContent: "center",
		background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
		boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
		border: "none",
		borderRadius: 100,
		cursor: "pointer",
	},
	qcastPlayBtnActive: {
		display: "flex",
		width: 52,
		height: 52,
		alignItems: "center",
		justifyContent: "center",
		background: "#EFF6FC",
		boxShadow: "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		border: "none",
		borderRadius: 100,
		cursor: "pointer",
	},
});
