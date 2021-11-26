import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  // StyledCardFeature
  containerFeature: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 350,
    width: "100%",
    padding: 10,
    fontFamily: "Poppins",
    background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
    border: "none",
    boxShadow:
      "-1px -3px 10px rgba(255, 255, 255, 0.7), 1px 3px 10px rgba(0, 0, 0, 0.18)",
    borderRadius: 10,
  },
  imgFeature: {
    height: 136,
    objectFit: "cover",
    borderRadius: 24,
  },
  txtFeatureContent: {
    color: "#7B94B5",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "27px",
    marginTop: 7,
    marginBottom: 0,
  },
  txtFeatureTitle: {
    color: "#515A6B",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: "27px",
    marginBottom: 0,
  },

  // StyledCardPopular
  containerPopular: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 350,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    border: "none",
    borderRadius: 10,
    marginBottom: 20,
  },
  popularSub: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 9,
  },
  txtPopularContent: {
    color: "#7B94B5",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "24px",
    marginTop: 7,
    marginBottom: 0,
    textAlign: "start",
  },
  txtPopularTitle: {
    color: "#515A6B",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "start",
  },

  // StyledCardPopular
  containerSavedQcasts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    maxWidth: 360,
    padding: 0,
    fontFamily: "Poppins",
    borderRadius: 10,
    marginTop: 10,
  },
  imgPopular: {
    height: 80,
  },

  containerResp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    borderRadius: 10,
  },

  imgSavedResp: {
    height: 160,
    width: 160,
  },

  // StyledCardSubscription
  containerSubscription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 350,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    border: "none",
    borderRadius: 10,
    marginBottom: 20,
  },

  imgSaved: {
    position: "relative",
    height: 80,
    width: 80,
  },

  imgPlayPlaylist: {
    height: 80,
    width: 80,
    cursor: "pointer",
  },
  subscriptionSub: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
  },
  subscriptionSub1: {
    display: "flex",
    width: 300,
    flexDirection: "column",
    marginTop: 15,
  },
  subscriptionImg: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    maxWidth: 200,
  },
  subscriptionImgOne: {
    display: "flex",
    alignItems: "center",
  },
  subscriptionQue: {
    display: "flex",
    alignItems: "center",
  },
  imgSubscription: {
    height: 200,
  },
  img_30: {
    width: 30,
  },
  img_35: {
    width: 35,
  },
  img_camera: {
    width: 30,
    height: 25,
  },
  txtSubscriptionContentFirst: {
    color: "#7B94B5",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: "27px",
    marginBottom: 0,
    textAlign: "center",
  },
  txtSubscriptionContentSecond: {
    color: "#97AAC3",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "center",
  },
  txtSubscriptionContentIcon: {
    color: "#97AAC3",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
  },
  txtSubscriptionTitleFirst: {
    color: "#6497C7",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "27px",
    marginBottom: 0,
    textAlign: "center",
  },
  txtSubscriptionTitleSecond: {
    color: "#6497C7",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "center",
  },
  subscriptionBtn: {
    marginTop: 20,
    width: "100%",
    maxWidth: 160,
    height: 50,
  },

  // StyledCardPopularLarge
  containerPopularLarge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 420,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    border: "none",
    borderRadius: 10,
    marginBottom: 20,
  },
  imgPopularLarge: {
    height: 145,
  },
  txtPopularTitleLarge: {
    color: "#6497C7",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "27px",
    marginBottom: 0,
  },

  // StyledRespondPage

  containerRespLarge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 420,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    border: "none",
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 30,
  },

  txtCreatePlaylist: {
    minWidth: 300,
  },

  imgRespLarge: {
    height: 145,
    // marginBottom: 35,
  },

  respContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 9,
    minWidth: 230,
  },

  icons: {
    display: "flex",
    justifyContent: "start",
    width: "100%",
    maxWidth: 200,
  },

  txtRespCamera: {
    color: "#97AAC3",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "center",
    minWidth: 100,
  },

  txtRespContent: {
    color: "#7B94B5",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "24px",
    marginTop: 7,
    marginBottom: 0,
    textAlign: "start",
    marginLeft: 5,
  },
  txtRespTitleLarge: {
    color: "#6497C7",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "27px",
    marginBottom: 0,
    marginLeft: 5,
  },

  txtRespTitleSecond: {
    color: "#6497C7",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "center",
    marginLeft: 5,
  },

  img_camera_resp: {
    width: 30,
    height: 25,
    marginLeft: 10,
  },

  respImg1: {
    display: "flex",
    alignItems: "center",
  },

  respImg2: {
    display: "flex",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
  },

  respImg3: {
    display: "flex",
    alignItems: "center",
  },

  imgResponseSmall: {
    position: "absolute",
    top: 50,
    right: 0,
    border: 2,
  },

  containerPlaylist: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "between",
    alignItems: "start",
    marginTop: 20,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    borderRadius: 10,
  },

  respondText: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 9,
  },

  loadBtn: {
    marginTop: 10,
    width: "100%",
    maxWidth: 157,
    height: 50,
    radius: 100,
  },

  addPlayBtn: {
    maxWidth: 100,
    height: 100,
    cursor: "pointer",
    paddingLeft: 15,
    display: "flex",
    justifyContent: "end",
  },

  addPlaylistBtn: {
    height: 40,
    widths: 40,
    radius: 100,
  },

  respondQcastBtn: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 9,
  },
  txtSavedQcastContent: {
    color: "#7B94B5",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "start",
    marginBottom: 5,
  },
  txtSavedResposesContent: {
    color: "#7B94B5",
    fontSize: 16,
    minWidth: 230,
    fontWeight: "normal",
    textAlign: "start",
    marginBottom: 5,
  },
  txtSavedQcastTitle: {
    color: "#515A6B",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "start",
  },
  subscriptionImgTwo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  img_45: {
    width: 45,
  },
  txtSubscriptionContentIconTwo: {
    color: "#515A6B",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "30px",
    marginBottom: 0,
  },

  titleCreatePlaylist: {
    maxWidth: 293,
    fontSize: 16,
    color: "#515A6B",
    paddingLeft: 25,
    marginTop: 14,
  },

  smallTitles: {
    display: "flex",
    justifyContent: "center",
    fontSize: 14,
    color: "#515A6B",
  },

  smallTitleMain: {
    fontSize: 14,
    color: "#515A6B",
  },

  smallTitles1: {
    marginLeft: 8,
    fontSize: 14,
    color: "#515A6B",
  },

  titleNumber: {
    fontWeight: 500,
    fontSize: 16,
    color: "#515A6B",
    display: "flex",
    justifyContent: "center",
    minWidth: 60,
    paddingTop: 20,
  },

  qcasterCreatePlaylist: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: 16,
    minWidth: 115,
    paddingTop: 20,
  },

  pl15: {
    paddingLeft: 15,
  },

  ml100: {
    marginLeft: 100,
  },

  addPlaylist1: {
    height: 50,
    width: 50,
    cursor: "pointer",
    marginTop: 10,
    marginLeft: 100,
    borderRadius: 100,
    boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",

  },

  mainTitleAdd: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 45,
  },

  addPlaylist: {
    cursor: "pointer",
    marginTop: 10,
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
});
