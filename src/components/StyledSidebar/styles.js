// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    width: "285px",
    // height:"1500px",
    display:"fixed",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 32,
    zIndex: 998,
    boxShadow:
      "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    fontSize: 18,
    color: "#7B94B5",
    fontFamily: "Poppins",
  },

  navigationButton: {
    display: "flex",
    // justifyContent: "center",
    listStyle: "none",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
  },
  menuContent: {
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 48,
    display: "flex",
    flexDirection: "column",
  },

  menuLine: {
    border: "1px solid #97AAC3",
  },

  menuTitleSecond: {
    color: "#2C3037",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: "27px",
    marginBottom: 13,
    paddingLeft: 20,
  },

  navigationButtonText: {
    display: "block",
    textAlign: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 33,
    paddingRight: 33,
    color: "#7B94B5",
    textDecoration: "none",
    fontSize: 18,
    "@media (min-width:992px)": {
      paddingLeft: 33,
      paddingRight: 33,
    },
  },
  activeClass: {
    background: "#EFF6FC",
    color: "#6497C7",
    textDecoration: "none",
    boxShadow:
      "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
    textAlign: "center",
    borderRadius: 100,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 33,
    paddingRight: 33,
    "@media (max-width:980px)": {
      display: "block",
      paddingLeft: 33,
      paddingRight: 33,
    },
  },
});
