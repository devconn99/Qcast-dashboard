import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
  containerFeatured: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardFeaturedSubRow: {
  },
  cardFeaturedSubCol: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "36px",
    marginBottom: 15,
  },
  btnViewAll: {
    width: "100%",
    maxWidth: 85,
    height: 35,
    marginLeft: 24,
  },

  cardPopularSubRow: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (min-width: 1400px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "@media (min-width: 1500px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
  cardPopularSubCol: {
    textAlign: "center",
  },
})