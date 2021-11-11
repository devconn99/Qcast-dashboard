import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 95,
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#7B94B5",
  },
  mainSidebar: {
    display: "flex",
    minHeight: "calc(100vh - 95px)",
    flex: "280px 0 0",
  },
  mainContent: {
    background: "Linear-gradient(171.89deg, #F0F6FB 2.42%, #E3F1FE 96.87%);",
    flexGrow: 1,
  },
});