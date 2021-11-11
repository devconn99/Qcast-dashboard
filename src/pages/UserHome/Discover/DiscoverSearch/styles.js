import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  containerNoResult: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  txtNoResultTitle: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "48px",
    marginTop: 23,
    marginBottom: 0,
    color: "#7B94B5",
  },
  txtNoResultContent: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "36px",
    marginTop: 5,
    marginBottom: 0,
    color: "#7B94B5",
  },

  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    height: "100%",
    width: "100%",
  },
  containerFeatured: {
    position: "relative",
    marginTop: 20,
  },
  containterTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnViewAll: {
    width: "100%",
    maxWidth: 85,
    height: 35,
    marginLeft: 24,
  },
  img_avatar: {
    height: 92,
  },
  img_noResult: {
    height: 333,
  },
  txtTitleLarge: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: "48px",
    marginTop: 17,
    marginBottom: 0,
    color: "#22304A",
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "36px",
    marginBottom: 15,
    color: "#22304A",
  },

  cardPopularSubRow: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1400px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1500px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  // cardPopularSubCol: {
  //   textAlign: "center",
  // },
})