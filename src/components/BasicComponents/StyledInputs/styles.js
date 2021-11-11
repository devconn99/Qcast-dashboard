import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  textInput: {
    visibility: "visible",
    width: "100%",
    minWidth: 150,
    maxWidth: 300,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 56,
    paddingRight: 55,
    borderRadius: 30,
    background: "#EFF6FC",
    border: "none",
    boxShadow:
      "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    fontSize: 16,
    lineHeight: "24px",
    color: "#7B94B5",
    fontWeight: "normal",
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
  imgClose: {
    height: 58,
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 12,
    position: "absolute",
    right: 0,
    bottom: "0%",
    cursor: "pointer",
  },
  imgSearch: {
    height: 58,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 15,
    position: "absolute",
    left: 0,
    bottom: "0%",
    cursor: "pointer",
  },
  imgSearchShow: {
    height: 40,
    cursor: "pointer",
  },
  showNone: {
    display: "none",
  }
});