// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({

  img_logo: {
    height: 79,
    top: 0,
    bottom: 0,
    margin: "auto",
  },

  img_notify: {
    display: "block",
    height: 40,
    cursor: "pointer",
  },
  img_profile: {
    width: 28,
    height: 28,
    borderRadius: "100%",
    marginRight: 5,
  },

  hide: {
    display: "none",
  },

  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    paddingLeft: 40,
    paddingRight: 40,
    boxShadow:
      "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    fontSize: 18,
    color: "#7B94B5",
    fontFamily: "Poppins",
  },

  menuMain: {
    justifyContent: "center",
  },

  menuMiddle: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (min-width: 992px)": {
      display: "flex",
    },
  },
  menuRight: {
    display: "none",
    "@media (min-width: 992px)": {
      display: "flex",
      alignItems: "center",
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
  navigationButtonProfile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
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
});
