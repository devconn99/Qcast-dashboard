import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    
    paddingRight: 0,
   
    overflowX:'hidden'
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
    marginTop: -69,
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
  linkButtonSmall: {
		display: "block",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#7B94B5",
		textDecoration: "none",
		fontSize: 16,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "24px",
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		}
	},
  linkButtonActiveSmall: {
		display: "block",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#6497C7",
		textDecoration: "none",
		fontSize: 16,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "24px",
		background: "#EFF6FC",
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		borderRadius: 100,
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},
  linkButtonActive: {
		display: "block",
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#6497C7",
		textDecoration: "none",
		fontSize: 18,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "27px",
		background: "#EFF6FC",
		boxShadow:
			"inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
		borderRadius: 100,
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},
  linkButton: {
		display: "block",
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		paddingRight: 20,
		color: "#7B94B5",
		textDecoration: "none",
		fontSize: 18,
		fontFamily: "Poppins",
		fontWeight: "500",
		lineHeight: "27px",
		"@media (min-width:1200px)": {
			paddingLeft: 20,
			paddingRight: 20,
		}
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
    back:'red'
  },
  img_60: {
    width: 58,
    
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
      menuMain: {
        justifyContent: "left",
     },
     cardSecondSubCol: {
      marginBottom: 55,
    },
    
      menuMiddle: {
        display: "flex",
        justifyContent: "flex-start",
        "@media (min-width: 992px)": {
          display: "flex",
        },
      },
      menuRight: {
        display: "block",
        "@media (min-width: 992px)": {
          display: "flex",
          alignItems: "center",
        },
      },
      menuMiddleContent: {
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 0,
        marginBottom: 0,
        display: "block",
        "@media (min-width:992px)": {
          display: "flex",
        },
      },
    naviMore:{
background:"#DCE8F6"
    },
    
      navigationButton: {
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
      },
      navigationButtonProfile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 6,
        paddingBottom: 6,
      },
    
      navigationButtonText: {
        display: "block",
        textAlign: "center",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 33,
        paddingRight: 33,
        color: "#7B94B5",
        textDecoration: "none",
        fontSize: 18,
        "@media (min-width:992px)": {
          paddingLeft: 33,
          paddingRight: 33,
        },
      },
      activeClass: {
        background: "#EFF6FC",
        textDecoration: "none",
        boxShadow:
          "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
        textAlign: "center",
        borderRadius: 100,
        paddingLeft: 33,
        paddingRight: 33,
        paddingTop: 12,
        paddingBottom: 12,
        "@media (max-width:980px)": {
          display: "block",
          paddingLeft: 33,
          paddingRight: 33,
        },
      },
  
      
  //     cardPopularSubRow: {
  //       display: "grid",
  //       gridTemplateColumns: "repeat(1, 1fr)",
  //       "@media (min-width: 900px)": {
  //         gridTemplateColumns: "repeat(2, 1fr)",
  //       },
  //       "@media (min-width: 1200px)": {
  //         gridTemplateColumns: "repeat(3, 1fr)",
  //       },
  //       "@media (min-width: 1400px)": {
  //         gridTemplateColumns: "repeat(4, 1fr)",
  //       },
  //       "@media (min-width: 1500px)": {
  //         gridTemplateColumns: "repeat(5, 1fr)",
  //       },
  //     },
  //     cardPopularSubCol: {
  //       textAlign: "center",
  //     },

})
// import { StyleSheet } from "aphrodite";




// export default StyleSheet.create({



  
//     container: {
//       paddingLeft: 40,
//       paddingRight: 40,
//       paddingTop: 10,
//     },
//     containerFeatured: {
//       paddingTop: 20,
//       paddingBottom: 20,
//     },
//     cardFeaturedSubRow: {
//     },
//     cardFeaturedSubCol: {
//       display: "flex",
//       justifyContent: "center",
//       width: "100%",
//     },
//     txtTitle: {
//       fontSize: 20,
//       fontWeight: 700,
//       lineHeight: "36px",
//       marginBottom: 15,
//       color:"#515A6B"
//     },
//     txtabout: {
//         fontSize: 16,
//         fontWeight: 700,
//         lineHeight: "36px",
//         color:"#7B94B5"
//       },
//     btnViewAll: {
//       width: "100%",
//       maxWidth: 85,
//       height: 35,
//       marginLeft: 24,
//     },
  
//     menuMain: {
//       justifyContent: "left",
//    },
  
//     menuMiddle: {
//       display: "flex",
//       justifyContent: "flex-start",
//       "@media (min-width: 992px)": {
//         display: "flex",
//       },
//     },
//     menuRight: {
//       display: "block",
//       "@media (min-width: 992px)": {
//         display: "flex",
//         alignItems: "center",
//       },
//     },
//     menuMiddleContent: {
//       paddingLeft: 0,
//       paddingRight: 0,
//       marginTop: 0,
//       marginBottom: 0,
//       display: "block",
//       "@media (min-width:992px)": {
//         display: "flex",
//       },
//     },
  
  
//     navigationButton: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       listStyle: "none",
//       paddingLeft: 0,
//       paddingRight: 0,
//       paddingTop: 6,
//       paddingBottom: 6,
//       "@media (min-width:1200px)": {
//         paddingLeft: 10,
//         paddingRight: 10,
//       },
//       "@media (min-width:1500px)": {
//         paddingLeft: 20,
//         paddingRight: 20,
//       },
//     },
//     navigationButtonProfile: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       listStyle: "none",
//       paddingLeft: 0,
//       paddingRight: 0,
//       paddingTop: 6,
//       paddingBottom: 6,
//     },
  
//     navigationButtonText: {
//       display: "block",
//       textAlign: "center",
//       paddingTop: 12,
//       paddingBottom: 12,
//       paddingLeft: 33,
//       paddingRight: 33,
//       color: "#7B94B5",
//       textDecoration: "none",
//       fontSize: 18,
//       "@media (min-width:992px)": {
//         paddingLeft: 33,
//         paddingRight: 33,
//       },
//     },
//     activeClass: {
//       background: "#EFF6FC",
//       textDecoration: "none",
//       boxShadow:
//         "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
//       textAlign: "center",
//       borderRadius: 100,
//       paddingLeft: 33,
//       paddingRight: 33,
//       paddingTop: 12,
//       paddingBottom: 12,
//       "@media (max-width:980px)": {
//         display: "block",
//         paddingLeft: 33,
//         paddingRight: 33,
//       },
//     },

    
//     cardPopularSubRow: {
//       display: "grid",
//       gridTemplateColumns: "repeat(1, 1fr)",
//       "@media (min-width: 900px)": {
//         gridTemplateColumns: "repeat(2, 1fr)",
//       },
//       "@media (min-width: 1200px)": {
//         gridTemplateColumns: "repeat(3, 1fr)",
//       },
//       "@media (min-width: 1400px)": {
//         gridTemplateColumns: "repeat(4, 1fr)",
//       },
//       "@media (min-width: 1500px)": {
//         gridTemplateColumns: "repeat(5, 1fr)",
//       },
//     },
//     cardPopularSubCol: {
//       textAlign: "center",
//     },
//   })



