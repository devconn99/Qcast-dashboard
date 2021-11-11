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

  cardReviewSub: {
    margin: "58px 69px",
    "@media (max-width: 768px)": {
      margin: "58px 20px",
    },
  },
  cardReviewSubCol: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardReviewBtnSub: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  cardReviewBtnSubCol: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    maxWidth: 337,
    width: "100%",
  },


  txtEnterEmail: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: "27px",
    textAlign: "center",
    color: "#97AAC3",
    marginTop: 10,
    marginBottom: 20,
  },
  txtReviewTitle: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "48px",
    color: "#22304A",
    marginBottom: 70,
  },
  txtReviewDetailFirst: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: "36px",
    color: "#515A6B",
    marginBottom: 0,
  },
  txtReviewPriceFirst: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: "36px",
    color: "#6497C7",
    marginBottom: 0,
  },
  txtReviewDetailSecond: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
    color: "#7B94B5",
    marginTop: 5,
    marginBottom: 0,
  },
  txtReviewDetailBar: {
    border: "1px solid #97AAC3",
    marginTop: 30,
    marginBottom: 20,
  },
  txtReviewDetailThird: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "36px",
    color: "#515A6B",
    marginBottom: 0,
  },
  txtReviewDetailFourth: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "36px",
    color: "#515A6B",
    marginTop: 28,
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