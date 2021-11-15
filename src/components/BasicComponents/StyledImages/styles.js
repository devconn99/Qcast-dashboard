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
  playButtonSmall: {
    position: "absolute",
    display: "flex",
    top: 80,
    left: 50,
    width: 30,
    height: 30,
    fontSize: 18,
    backgroundColor: "white",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    cursor: "pointer",
  },
  playButtonLarge: {
    position: "absolute",
    display: "flex",
    top: 150,
    left: 85,
    width: 50,
    height: 50,
    fontSize: 24,
    backgroundColor: "white",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    boxShadow:
			"1px -3px 10px rgba(255, 255, 255, 0.7), 5px 3px 10px rgba(0, 0, 0, 0.18)",
    cursor: "pointer",
  },
  text: {
    paddingTop: 10,
    textAlign: "center",
    color: "#97AAC3",
  }
});