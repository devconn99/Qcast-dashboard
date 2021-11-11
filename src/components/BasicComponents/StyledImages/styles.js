import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  imgPopularSmall: {
    // display: "flex",
    height: "100%",
    borderRadius: "100%",
    objectFit: "cover",
    border: "7px solid #ECF5FC",
    boxShadow: "-3px -3px 10px #FFFFFF, 3px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  imgPopularLarge: {
    // display: "flex",
    height: "100%",
    borderRadius: "100%",
    objectFit: "cover",
    background:"rgba(0,0,0,.3)",
    border: "10px solid #ECF5FC",
    boxShadow: "-3px -3px 10px #FFFFFF, 3px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  imgFluid: {
    // display: "flex",
    height: "100%",
    borderRadius: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
});