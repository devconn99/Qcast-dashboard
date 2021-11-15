import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 0,
    paddingTop: 10,
  },
  containerQcaster:{
    display: "flex",
    justifyContent: "center",
    marginBottom: 55,
    marginRight: 40,
    marginLeft: "auto",
		marginRight: "auto",
  },
  containerQcasterButtonMore: {
    width: "100%",
    width: 40,
    height: 40,
  },
  containerQcast: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 680,
    width: "100%",
    padding: 0,
    fontFamily: "Poppins",
    border: "none",
    borderRadius: 10,
    marginBottom: 20,
  },
  qcastSub: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
  },
  qcastImg: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    maxWidth: 200,
  },
  qcastImgOne: {
    display: "flex",
    alignItems: "center",
  },
  qcastQue: {
    display: "flex",
    alignItems: "center",
  },
  imgQcast: {
    height: 200,
    display: "flex"
  },
  img_30: {
    width: 30,
  },
  img_35: {
    width: 35,
  },
  img_camera: {
    width: 30,
    height: 25,
  },
  txtQcastContentFirst: {
    maxWidth: 350,
    color: "#7B94B5",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: "27px",
    marginBottom: 0,
    textAlign: "center",
  },
  txtQcastContentSecond: {
    color: "#97AAC3",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "center",
  },
  txtQcastContentIcon: {
    color: "#97AAC3",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
  },
  txtQcastTitleFirst: {
    color: "#6497C7",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "27px",
    marginBottom: 0,
    textAlign: "center",
  },
  txtQcastTitleSecond: {
    color: "#6497C7",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
    marginBottom: 0,
    textAlign: "center",
  },
  qcastBtn: {
    marginTop: 20,
    width: "100%",
    maxWidth: 160,
    height: 50,
  },

  // modal
  reportModal: {
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
  },
  reportModalWrapper: {
    margin: -19,
    padding: 20,
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    boxShadow: "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    borderRadius: 10
  },
  modalTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "36px",
    textAlign: "center",
    padding: 30,
    marginBottom: 0,
    marginLeft: 40,
		marginRight: 40,
    color: "#515A6B"
  },
  reportContent: {
    width: 500,
    height:250,
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    boxShadow: "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    border: "none",
    padding: 16,
    marginLeft: 30,
    marginRight: 30,
  },
  submitSuccess: {
    display: "flex",
    width: 140,
		height: 140,
    fontSize: 64,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    marginLeft: "auto",
    marginRight: "auto",
		borderRadius: 100,
  },
  modalMessage: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "36px",
    textAlign: "center",
    padding: 20,
    marginBottom: 0,
    color: "#7B94B5"
  },
  seperateLine: {
    marginTop: "2rem",
    marginBottom: "2rem",
    border: "1px solid #97AAC3",
  },
  submitButtonDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  submitButton: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "36px",
    color: "#6497C7",
    background: "transparent",
    border: "none"
  },

  // slider
  containerSlide:{
    maxWidth: 1500,
		marginLeft: "auto",
		marginRight: "auto",
    marginBottom: 100
  },
  sliederTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  sliderBtnfLeft: {
    position: "absolute",
    top: -56,
    left: 70,
    width: 60,
		height: 60,
    fontSize: 24,
    color: "#97AAC3",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
  },
  sliderBtnRight: {
    position: "absolute",
    top: -56,
    right: 70,
    width: 60,
		height: 60,
    fontSize: 24,
    color: "#97AAC3",
		background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
		borderRadius: 100,
  },
  sliderActiveItemWrapper: {
    display: "flex",
    height: 330,
		marginLeft: "auto",
		marginRight: "auto",
    justifyContent: "center"
  },
  sliderActiveItem: {
    position: "relative",
    width: 220,
    height: 220,
  },
  sliderItemFirst: {
    position: "relative",
    width: 130,
    height: 130,
    marginTop: 25
  },
  sliderItemSecond: {
    position: "relative",
    width: 130,
    height: 130,
    marginTop: 100
  },
  sliderItemThird: {
    position: "relative",
    width: 130,
    height: 130,
    marginTop: 190
  },
  
})