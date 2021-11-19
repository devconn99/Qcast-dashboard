import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    position: "relative",
  },
  headerContainer: {
    display: "flex",
    height: 100,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 40,
    alignItems: "center",
    justifyContent: "space-between",
    // background: "linear-gradient(135.07deg, #DCE8F6 6.66%, #DCE8F7 104.83%)",
    // boxShadow: "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    borderBottom: "1px solid",
    borderColor: "#D7E9F6"
  },
  logoList: {
    display: "flex",
    // paddingLeft: 20,
  },
  logoItem: {
    display: "flex",
    alignItems: "center",
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
    cursor: "pointer",
    fontSize: 24,
    lineHeight: "36px",
    fontFamily: "Poppins",
    color: "#515A6B",
    fontStyle: "nomal",
    fontWeight: "bold",
  },
  ctrlBtns: {
  },
  ctrlBtn: {
    width: "100%",
    maxWidth: 40,
    height: 40,
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
    position: "relative",
    marginBottom: 160,
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
  },
  containerRight: {
    display: "flex",
    justifyContent: "right",
  },
  containerRightWrapper: {
    float: "right",
  },
  msgCard: {
    width: "fit-content",
    padding: 5,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  msgCardCol: {
    padding: "5px 12px",
    boxShadow: "-1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    borderRadius: 10,
    fontSize: 18,
    lineHeight: "27px",
    fontFamily: "Poppins",
    color: "#515A6B",
    fontStyle: "Regular"
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
    flexDirection: "column",
    width: "100%",
    // background: "#e7f3fd",
    left: 400,
    right: 0,
    bottom: 0
  },
  footerContainerWrapper: {
    display: "flex",
    width: "calc(100% - 400px)",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
    background: "#e7f3fd",
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
    cursor: "pointer"
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
    cursor: "pointer"
  },
  addOptions: {
  },
  addOption: {
    display: "flex",
    cursor: "pointer"
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
  sendQcastBox: {
    display: "flex",
    width: "calc(100% - 400px)",
    justifyContent: "right",
    paddingRight: 30,
    paddingBottom: 10
  },
  sendQcastBoxContent: {
    width: 1500,
    padding: 30,
    background: "#e7f3fd",
    boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    borderRadius: 10,
  },
  menuMiddleContent: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    marginBottom: 20,
    display: "block",
    "@media (min-width:992px)": {
      display: "flex",
    },
  },
  tab: {
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
    // boxShadow:
    //   "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
    // borderRadius: 100,
    cursor: "pointer"
  },
  tabActive: {
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
    boxShadow:
      "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
    borderRadius: 100,
    cursor: "pointer"
  },
  qcasttitle: {
    textAlign: "center"
  },
  sendBtn: {
    display: "flex",
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    marginLeft: "auto",
    marginRight: "auto",
    background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
    boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
    borderRadius: 100,
    cursor: "pointer"
  },
  cardGrid: {
    height: 330,
    overflow: "auto",
  },
  cardGrid5: {
    height: 660,
    columnGap: 20,
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
  cardSecondSubCol: {
    textAlign: "center",
    width: 200,
    height: 150,
    marginBottom: 55,
  },
})