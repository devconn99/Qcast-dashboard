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
  imgStripe: {
    width: 137,
    height: 30,
    marginTop: 15,
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
  cardLarge: {
    maxWidth: 845,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardSmall: {
    maxWidth: 350,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  cardDetailSubRow: {
    marginTop: 0,
  },
  cardDetailSubCol: {
    alignSelf: "end",
  },
  cardDetailBtnSub: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: 150,
  },
  cardDetailBtnSubCol: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    maxWidth: 337,
    width: "100%",
  },

  txtDetailTitle: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "48px",
    color: "#22304A",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 0,
  },
  txtDetailFirst: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "24px",
    color: "#7B94B5",
    marginTop: 30,
    marginBottom: 0,
  },
  txtStripeContent: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: "24px",
    color: "#515A6B",
    marginTop: 6,
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
  txtContent: {
    color: "#97AAC3",
  },
  txtCopyright: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: "21px",
    color: "#515A6B",
    textAlign: "center",
    marginBottom: 30,
  },
});