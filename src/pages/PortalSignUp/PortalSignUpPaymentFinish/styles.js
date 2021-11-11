// @flow
import { StyleSheet } from "aphrodite";

export default StyleSheet.create({

  main: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    background: "linear-gradient(135.07deg, rgb(241, 249, 255) 6.66%, rgb(220, 232, 247) 104.83%) !important",
  },
  container: {
    position: "relative",
    minHeight: 1080,
    paddingTop: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  imgLogo: {
    maxWidth: "100%",
    marginBottom: 25,
  },
  imgSendEmail: {
    width: "100%",
  },

  cardMain: {
    maxWidth: 405,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardBottom: {
    maxWidth: 350,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  cardSmall: {
    maxWidth: 350,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  txtReviewFinish: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "48px",
    color: "#7B94B5",
    textAlign: "center",
    marginTop: 35,
    marginBottom: 20,
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
