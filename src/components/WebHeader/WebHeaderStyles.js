// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    boxShadow:
      "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
  },

  customWidth: {
    maxWidth: 1120,
    paddingTop: 10,
    paddingBottom: 10,
  },

  navigationBarView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  navigationBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    "@media (max-width:980px)": {
      display: "block",
      marginTop: 10,
    },
  },

  navigationButton: {
    listStyle: "none",
    // marginRight: 35,
    fontSize: 18,
    color: "#7B94B5",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 100,
    fontFamily: "Poppins",
  },

  logoMainView: {
    color: "#7B94B5",
    textDecoration: "none",
    width: "8%",
    // paddingTop: 12,
    // paddingBottom: 12,

    paddingRight: 18,
    fontSize: 18,
    marginRight: "16%",

    "@media (max-width:980px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  navigationButtonText: {
    color: "#7B94B5",
    textDecoration: "none",

    // paddingTop: 12,
    // paddingBottom: 12,
    // paddingLeft: 18,
    paddingRight: 18,
    fontSize: 18,
    "@media (max-width:980px)": {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      display: "block",
    },
  },

  fullLogo: {
    width: 189,
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    transition: "all ease 0.5s",
    opacity: 1,

    "@media (max-width: 980px)": {
      margin: 0,
    },
  },

  fullLogoSticky: {
    opacity: 0,
  },

  logoInitial: {
    height: 79,
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    transition: "all ease 0.5s",
    opacity: 0,

    "@media (max-width: 980px)": {
      margin: 0,
    },
  },

  logoInitialSticky: {
    opacity: 1,
  },

  activeClass: {
    background: "#EFF6FC",
    boxShadow:
      "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
    borderRadius: 100,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    "@media (max-width:980px)": {
      display: "block",
      paddingLeft: 18,
      paddingRight: 18,
    },
  },
});
