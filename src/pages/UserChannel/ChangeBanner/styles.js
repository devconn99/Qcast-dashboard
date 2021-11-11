import { StyleSheet } from "aphrodite";
export default StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      },
      imgProfileBackground:{
        width: "100%",
      },
      

  containerProfileButton:{
   marginTop:-191,
   
  },
  containerProfileButtonUpdatesProfile:{
marginTop:'40px'
  },
  containerProfileButtonSubscribe: {
    display: "flex",
   
    maxWidth: 320,
    height: 65,
    width: 317,
    
    
  },
  ChangePhoto:{
      display:'absolutle',
height:"200px",
width:200,
background:'black',
marginTop:-265,
opacity: ".5",
borderRadius: "100%",

  },inputLittle:{
    background: "#EFF6FC",
    boxShadow:
      "inset -2px -5px 5px rgba(255, 255, 255, 0.7), inset 2px 5px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    border:"none" ,
    width:'920px',
    height:'56px',
    marginBottom:'30px',
    marginBottom:20,
    outline:"none",
    padding:'10px',
    color:"#515A6B"
  },
  inputLarge:{
    background: "#EFF6FC",
    boxShadow:
      "inset -2px -5px 5px rgba(255, 255, 255, 0.7), inset 2px 5px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    border:"none" ,
    width:'920px',
    height:'190px',
    marginBottom:'30px',
    marginBottom:20,
    resize: "none",
    outline:"none",
    padding:'10px',
    color:"#515A6B"

  }
})