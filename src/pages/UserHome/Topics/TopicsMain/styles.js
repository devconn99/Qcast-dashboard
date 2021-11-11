import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
  containerFeatured: {
    marginTop: 20,
  },
  img_avatar: {
    height: 92,
  },
  topicRow: {
    display: "grid",
    justifyItems: "center",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
    gridTemplateColumns: "repeat(1, 1fr)",
    "@media (min-width: 992px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1500px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  topicCol: {
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    maxWidth: 430,
    marginBottom: 50,
    // "@media (min-width:992px)": {
    //   width: "50%",
    // },
    // "@media (min-width:1500px)": {
    //   width: "33%",
    // }
  },
  topicDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 15,
  },

  txtTitle: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: "27px",
    color: "#7B94B5",
    marginBottom: 0,
  },
  txtContent: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "24px",
    color: "#7B94B5",
    marginBottom: 0,
  },
})