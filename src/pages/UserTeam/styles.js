import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    position: "relative",
  },
  headerContainer: {
    display: "flex",
    height: 100,
    padding: 20,
    justifyContent: "space-between",
    background: "linear-gradient(135.07deg, #DCE8F6 6.66%, #DCE8F7 104.83%)",
    boxShadow: "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
  },
  logoList: {
    display: "flex",
    paddingLeft: 20,
  },
  logoItem: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ctrlBtns: {
    display: "flex",
  },
  ctrlBtn: {
    width: 240,
    marginLeft: 30,
    cursor: "pointer",
  },
  searchBar: {
    width: 400
  },
  img_add: {
    width: "100%",
    height: "100%",
  },
  textInput: {
    width: "100%",
    minWidth: 150,
    maxWidth: 400,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 56,
    paddingRight: 55,
    borderRadius: 30,
    background: "#EFF6FC",
    border: "none",
    boxShadow:
      "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    fontSize: 16,
    lineHeight: "24px",
    color: "#7B94B5",
    fontWeight: "normal",
    "@media (max-width: 980px)": {
      // width: "60%",
    },
    "@media (max-width: 600px)": {
      // width: "80%",
    },
    ":focus": {
      outline: "none",
    },
    "::placeholder": {
      color: "#7B94B5",
    }
  },
  imgClose: {
    height: 58,
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 12,
    position: "absolute",
    right: 0,
    bottom: "0%",
    cursor: "pointer",
  },
  imgSearch: {
    height: 58,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 15,
    position: "absolute",
    left: 0,
    bottom: "0%",
    cursor: "pointer",
  },
  imgSearchShow: {
    height: 40,
    cursor: "pointer",
  },
  
  container: {
    position: "relative"
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
  },
  containerRight: {
    display: "flex",
    justifyContent: "right",
    marginBottom: 160
  },
  containerRightWrapper: {
    float: "right",
  },
  msgCard: {
    width: 360,
    padding: 5,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  msgCardCol: {
    width: 360,
    padding: 5,
    boxShadow: "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
  },
  timeState: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    columnGap: 5
  },
  img_read: {
    width: 18,
  },

  // footer
  footerContainer: {
    position: "fixed",
    display: "flex",
    width: "100%",
    background: "#e7f3fd",
    left: 285,
    right: 0,
    bottom: 0
  },
  footerContainerWrapper: {
    display: "flex",
    width: "calc(100% - 285px)",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  msgBtn: {
    display: "flex",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
    border: "none",
    borderRadius: 100,
  },
  msgContent: {
    width: "80%",
  },
  msgContentInput: {
    width: "100%",
    minWidth: 400,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 56,
    paddingRight: 55,
    borderRadius: 30,
    background: "#EFF6FC",
    border: "none",
    boxShadow:
      "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    fontSize: 16,
    lineHeight: "24px",
    color: "#7B94B5",
    fontWeight: "normal",
    "@media (max-width: 980px)": {
      // width: "60%",
    },
    "@media (max-width: 600px)": {
      // width: "80%",
    },
    ":focus": {
      outline: "none",
    },
    "::placeholder": {
      color: "#7B94B5",
    }
  },

  // modal
  modalTitle: {
    padding: 20,
    marginLeft: 5,
    marginBottom: 0,
    fontSize: 24,
    lineHeight: "36px",
    fontFamily: "Poppins",
    color: "#515A6B",
    fontWeight: "bold"
  },
  closeBtn: {
    position: "absolute",
    top: 8,
    right: 0,
    display: "flex",
    width: 30,
    height: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
    border: "none",
    borderRadius: 30,
    cursor: "pointer"
  },
  modalContent: {
    width: 580,
    paddingLeft: 20,
    paddingRight: 20,
  },
  groupName: {
    width: "100%",
    height:60,
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    boxShadow: "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
    border: "none",
    padding: 10,
    fontSize: 14,
    lineHeight: "21px",
    fontFamily: "Poppins",
    color: "#7B94B5",
    fontStyle: "Regular"
  },
  privateOption: {
    paddingTop: 10,
    fontSize: 18,
    lineHeight: "27px",
    fontFamily: "Poppins",
    color: "#515A6B",
    fontWeight: "600"
  },
  privateContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  img_h_30: {
    height: 30,
  },
  creatBtn: {
    display: "flex",
    justifyContent: "center",
    fontSize: 24,
    lineHeight: "36px",
    fontFamily: "Poppins",
    color: "#6497C7",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 20,
  },
  addOptions: {
  },
  addOption: {
    display: "flex",
  },
  img_20: {
    height: 20,
    marginRight: 5,
  },
  img_20_p_4_ml_4: {
    height: 20,
    padding: 4,
    marginLeft: 5,
  },
  addedPeopleList: {
    display: "flex",
  },
  addedPeople: {
    display: "flex",
    padding: 10,
    marginLeft: 10,
    background: "Linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%);",
		boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
		border: "none",
    borderRadius: 10,
  },
})