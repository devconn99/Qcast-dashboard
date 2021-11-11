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

  cardPlanMain: {
    maxWidth: 900,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // marginTop: 30,
    marginBottom: 145,
  },
  cardPlanFirst: {
    display: "flex",
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 200,
  },
  cardPlanSecond: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 80,
  },

  cardPlanSelectBtn: {
    maxWidth: 130,
    width: "100%",
  },
  cardPlanRow: {
    display: "flex",
    width: "100%",
  },
  cardPlanSubRow: {
    width: "100%",
  },
  cardPlanSubCol: {
    marginTop: 30,
  },
  cardItemContainer: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
  },

  cardPlanColFirst: {
    maxWidth: 255,
    width: "100%",
    marginTop: 282,
  },
  cardPlanColItems1: {
    display: "flex",
    alignItems: "center",
    height: 44,
  },
  cardPlanColItems3: {
    display: "flex",
    alignItems: "center",
    height: 92,
  },
  cardCheckItems: {
    marginTop: 15,
  },

  txtPlanSelectTitle: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "48px",
    color: "#22304A",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 0,
  },
  txtPlanSelectContent: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: "27px",
    color: "#97AAC3",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
  },
  txtPlanItemTitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: "30px",
    color: "#7B94B5",
    textAlign: "left",
    marginBottom: 0,
  },
  txtPrice: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 10,
  },
  txtPriceV: {
    fontSize: 42,
    fontWeight: "600",
    lineHeight: "48px",
    color: "#6497C7",
    marginBottom: 0,
  },
  txtPriceD: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: "20px",
    color: "#6497C7",
    marginBottom: 0,
    paddingBottom: 8,
  },
  txtPlanItemContentFirst: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: "24px",
    color: "#515A6B",
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


  textInput: {
    width: 60,
    textAlign: "right",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    marginBottom: 0,
    borderRadius: 10,
    background: "#EFF6FC",
    border: "none",
    boxShadow:
      "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    fontSize: 18,
    lineHeight: "27px",
    color: "#6497C7",
    fontWeight: "500",
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
});