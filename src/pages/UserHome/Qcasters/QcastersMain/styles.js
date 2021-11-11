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

  cardGrid3: {
    display: "grid",
    justifyItems: "center",
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
  cardGrid5: {
    display: "grid",
    justifyItems: "center",
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

  cardFirstSubCol: {
    marginBottom: 55,
  },
  cardSecondSubCol: {
    marginBottom: 55,
  },
})