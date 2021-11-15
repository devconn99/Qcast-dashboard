import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 0,
    paddingTop: 10,
  },
  containerFeatured: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  containerBackground:{
  },
  containerProfile:{
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 55,
    marginRight: 40,
  },
  containerProfileSub:{
    display: "flex",
    width: "100%",
  },
  containerProfileImg:{
    height: 300,
    marginTop: -68,
  },
  containerProfileContent:{
    display: "flex",
    flexDirection: "column",
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 40,
    maxWidth: 720,
  },

  imgProfileBackground:{
    width: "100%",
  },
  imgProfile:{
    height: 200,
  },

  slideTitle:{
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: "30px",
    color: "#515A6B",
    marginBottom: 0,
  },
  txtTitle:{
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "30px",
    color: "#515A6B",
    marginBottom: 0,
  },
  txtProfileTitle:{
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
    color: "#7B94B5",
    marginBottom: 0,
  },
  txtProfileContent:{
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    color: "#7B94B5",
    marginBottom: 10,
  },

  subscriptionImg: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 300,
  },
  subscriptionImgTwo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  img_60: {
    width: 60,
    height: 58,
  },
  txtSubscriptionContentIconTwo: {
    color: "#515A6B",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "30px",
    marginBottom: 0,
  },

  containerProfileButton:{
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    maxWidth: 400,
    marginTop: 16,
  },
  containerProfileButtonSubscribe: {
    width: "100%",
    maxWidth: 320,
    height: 50,
    marginRight: 25,
  },
  containerProfileButtonMore: {
    width: "100%",
    maxWidth: 40,
    height: 40,
  },

  containerSlide:{
    
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
  cardsSlider: {
    display: "flex",
    width: 1500,
    columnGap: 40,
    overflow: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 55,
  },
  cardFirstSubCol: {
    marginBottom: 55,
  },
  cardSecondSubCol: {
    width: 300,
  },
})