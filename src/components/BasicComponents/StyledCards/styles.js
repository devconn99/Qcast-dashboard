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
  imgPopular: {
    height: 80,
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

  // StyledCardQcastersMain
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
});