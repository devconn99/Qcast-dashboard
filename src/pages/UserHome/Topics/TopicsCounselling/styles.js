import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
  containerFeatured: {
    position: "relative",
    marginTop: 20,
  },
  img_avatar: {
    height: 92,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "36px",
    marginBottom: 15,
    color: "#22304A",
  },

  // grid
  gridLineBreak: {
    position: "absolute",
    top: 70,
    width: "100%",
  },

  gridRow: {
    display: "grid",
    gridTemplateColumns: "4fr 2fr 2fr 2fr 1fr",
    gridRowGap: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  gridColHeaderFirst: {
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: "21px",
    color: "#515A6B",
    textAlign: "start",
    marginBottom: 15,
  },
  gridColHeaderSecond: {
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: "21px",
    color: "#515A6B",
    textAlign: "center",
    marginBottom: 15,
  },
  gridColHeaderThird: {
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: "21px",
    color: "#515A6B",
    textAlign: "end",
    marginBottom: 15,
  },

  gridColFirst: {
    display: "flex",
    alignItems: "center",
    maxWidth: 390,
  },
  gridColSecond: {
    textAlign: "center",
  },
  gridColThird: {
    textAlign: "end",
  },

  // grid & table
  txtTableHeader: {
    height: 32,
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: "21px",
    color: "#515A6B",
    borderBottom: "1px solid #DBE9FD",
  },
  txtDataFirst: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    color: "#515A6B",
    marginLeft: 10,
    marginBottom: 0,
  },
  txtDataSecond: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    color: "#6497C7",
    marginBottom: 0,
  },
  txtDataThird: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
    color: "#515A6B",
    marginBottom: 0,
  },


})