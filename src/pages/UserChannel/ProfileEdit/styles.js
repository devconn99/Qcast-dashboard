import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {

    paddingRight: 0,

    overflowX: 'hidden'
  },
  containerBackground: {
  },
  simpleButtonFluid: {
		width: 300,
		height: "100%",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
	},
  containerProfile: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 55,
    marginRight: 40,
  },
  containerProfileSub: {
    display: "flex",
    width: "100%",
  },
  containerProfileImg: {
    height: 300,
    marginTop: -69,
  },
  containerProfileContent: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 40,
    maxWidth: 720,
  },

  imgProfileBackground: {
    width: "100%",
    height: 220,
    background: "#7B94B5"
  },
  imgProfile: {
    height: 200,
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
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "30px",
    color: "#515A6B",
    marginBottom: 0,
  },
  txtProfileTitle: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
    color: "#7B94B5",
    marginBottom: 0,
  },
  txtProfileContent: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    color: "#7B94B5",
    marginBottom: 10,
  },

  subscriptionImg: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 300,
  },
  subscriptionImgTwo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    back: 'red'
  },
  img_60: {
    width: 58,

  },
  txtSubscriptionContentIconTwo: {
    color: "#515A6B",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "30px",
    marginBottom: 0,
  },
  menuMain: {
    justifyContent: "left",
  },
  cardSecondSubCol: {
    marginBottom: 55,
  },

  menuMiddle: {
    display: "flex",
    justifyContent: "flex-start",
    "@media (min-width: 992px)": {
      display: "flex",
    },
  },
  menuMiddleContent: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    marginBottom: 0,
    display: "block",
    "@media (min-width:992px)": {
      display: "flex",
    },
  },
  naviMore: {
    background: "#DCE8F6"
  },

  navigationButton: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    "@media (min-width:1200px)": {
      paddingLeft: 10,
      paddingRight: 10,
    },
    "@media (min-width:1500px)": {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  activeClass: {
    background: "#EFF6FC",
    textDecoration: "none",
    boxShadow:
      "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
    textAlign: "center",
    borderRadius: 100,
    paddingLeft: 33,
    paddingRight: 33,
    paddingTop: 12,
    paddingBottom: 12,
    "@media (max-width:980px)": {
      display: "block",
      paddingLeft: 33,
      paddingRight: 33,
    },
  },

  // modal
  modalTitle: {
    padding: 20,
    marginLeft: 5,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: "bold"
  },
  seachBar: {
    position: "relative",
    paddingLeft: 20,
    paddingRight: 20,
  },
  seachBox: {
    width: "100%",
    height:40,
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    boxShadow: "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    border: "none",
    padding: 10,
  },
  clearBtn: {
    position: "absolute",
    top: 10,
    right: 30,
    display: "flex",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer"
  },
  qcastList: {
    padding: 20,
    height: 600,
  },
  qcastItem: {
    display: "flex",
    columnGap: 5,
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imgPopularSmall: {
    height: 50,
    borderRadius: "100%",
    objectFit: "cover",
    border: "3px solid #ECF5FC",
    boxShadow: "-3px -3px 10px #FFFFFF, 3px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  qcastTitle: {
    paddingLeft: 5,
    fontWeight: "bold",
  },
  forwardBtn: {
    display: "flex",
    padding: 5,
    marginLeft: 30,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer"
  },

  // profile edit
  bannerChangeBtn: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 250,
    width: "100%",
    height: 40,
    marginTop: -175,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 140
  },
  imguploadbtn: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 250,
    width: "100%",
    height: 40,
    // marginTop: -130,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 140
  },
  containerProfiledata: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 800,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    border: "none",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
  },
  coverImg: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgPopularLarge: {
    width: 293,
    height: 293,
    borderRadius: "100%",
    objectFit: "cover",
    background:"rgba(0,0,0,.3)",
    border: "10px solid #ECF5FC",
    boxShadow: "-3px -3px 10px #FFFFFF, 3px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  cover: {
    position: "absolute",
    width: "93%",
    height: "93%",
    background: "#000",
    opacity: 0.4,
    borderRadius: "100%"
  },
  editPhone: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  img_24: {
    width: 24,
  },
  chPhotoTxt: {
    marginLeft: 10,
    color: "#FFFFFF"
  },
  formGroup: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 800,
    width: "100%",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10

  },
  profileName: {
    width: "100%",
    height:40,
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    boxShadow: "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    border: "none",
    padding: 10,
  },
  motto: {
    width: "100%",
    height:40,
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    boxShadow: "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    border: "none",
    padding: 10,
  },
  profileDes: {
    height: 150,
    width: "100%",
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    boxShadow: "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    border: "none",
    padding: 10,
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 250,
    width: "100%",
    height: 40,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10
  },

})