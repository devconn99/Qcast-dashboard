import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
    },

    containerResponsedAll: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    imgSrc: {
        height: 160,
        width: 160,
        justifyContent: "center",
    },

    cardRespSubCol: {
        display: "flex",
        justifyContent: "center",
        maxWidth: 160,
    },

    imgSmall: {
        height: 30,
        width: 30,
    },
    imgSrcPl: {
        height: 120,
    },

    respAllFirstRow: {
        display: "flex",
        justifyContent: "center",
        width: 160,
    },

    switchBtnQ: {
        width: "100%",
        maxWidth: 120,
        height: 50,
        radius: 100,
        marginBottom: 20,
    },
    switchBtnR: {
        width: "100%",
        fontWeight: 500,
        fontSize: 18,
        maxWidth: 120,
        height: 50,
        marginLeft: 30,
    },
    switchBtnPl: {
        width: "100%",
        maxWidth: 205,
        height: 50,
        cursor: "pointer",
    },

    cardRespondedRow: {
        maxWidth: 160,
        marginLeft: 10,
    },

    rowBetween: {
        display: "flex",
        justifyContent: "space-between",
    },

    txtDataFirst: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "24px",
        color: "#515A6B",
        textAlign: "center",
    },
    txtDataName: {
        fontSize: 16,
        color: "#515A6B",
    },
    txtTitle: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: "36px",
        marginTop: 25,
        marginBottom: 15,
        color: "#515A6B",
    },
    btnLoadQcast: {
        minWidth: 157,
        height: 50,
        radius: 100,
    },

    cardAllMain: {
        color: "#7B94B5",
        textAlign: "center",
        maxWidth: 385,
        marginTop: 20,
    },

    cardFirstCol: {
        marginLeft: 25,
    },
    cardSecondCol: {
        marginBottom: 35,
    },
    linkButtonActive: {
        display: "block",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#6497C7",
        fontWeight: "500",
        lineHeight: "27px",
        textDecoration: "none",
        fontSize: 18,
        fontFamily: "Poppins",
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
        fontSize: 18,
        color: "#7B94B5",
        fontWeight: "500",
        lineHeight: "27px",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        textDecoration: "none",
        fontFamily: "Poppins",
        "@media (min-width:1200px)": {
            paddingLeft: 20,
            paddingRight: 20,
        }
    },
    menuMiddleContent: {
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 0,
        marginBottom: 0,
        display: "flex",
    },
    navBarUl: {
        listStyle: "none",
        display: "flex",
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    navBar: {
        paddingLeft: 0,
    },

    imgContainer: {
        display: "flex"
    },

    cardSavedRow: {
        maxWidth: 280,
        marginTop: 20,
    },

    cardSavedQcast: {
        textAlign: "center",
    },

    cardRespSavedQcast: {
        maxWidth: 280,
        marginTop: 20,
    },

    gridLineBreak: {
        marginTop: 30,
        position: "absolute",
        top: 160,
        width: "100%",
    },

    flex1: {
        display: "flex",

    },

    gridRow: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridRowGap: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    gridRow2: {
        display: "grid",
        gridTemplateColumns: "5fr 2fr 2fr 2fr 1fr",
        gridRowGap: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    gridRow3: {
        display: "grid",
        gridTemplateColumns: "5fr 2fr 2fr",
        gridRowGap: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    gridRow4: {
        display: "grid",
        gridTemplateColumns: "6fr 3fr 2fr 2fr 2fr 1fr",
        gridRowGap: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    cardFavoritesCol: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },

    loadBtn: {
        marginTop: 10,
        width: "100%",
        maxWidth: 157,
        height: 50,
        radius: 100,
        textAlign: "center",
    },

    gridColHeaderFirst: {
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: "21px",
        color: "#515A6B",
        textAlign: "start",
        marginBottom: 40,
    },
    gridColHeaderSecond: {
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: "21px",
        color: "#515A6B",
        textAlign: "center",
        marginBottom: 15,
    },
    gridColHeaderThird: {
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: "21px",
        color: "#515A6B",
        textAlign: "end",
        marginBottom: 15,
    },

    gridColFirst: {
        display: "flex",
        alignItems: "center",
    },
    gridColSecond: {
        textAlign: "center",
    },
    gridColThird: {
        textAlign: "end",
    },

    // grid & table
    txtTableHeader: {
        height: 32,
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: "21px",
        color: "#515A6B",
        borderBottom: "1px solid #DBE9FD",
    },
    // txtDataFirst: {
    //     fontSize: 16,
    //     display: "flex",
    //     justifyContent: "center",
    //     fontWeight: 400,
    //     lineHeight: "24px",
    //     color: "#515A6B",
    //     marginBottom: 0,
    // },
    txtDataSecond: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
        color: "#6497C7",
        marginBottom: 0,
    },
    txtDataThird: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "24px",
        color: "#515A6B",
        marginBottom: 0,
    },

    rowCenter: {
        display: "flex",
        justifyContent: "center",
    },

    cardPlRow: {
        display: "grid",
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

    cardPlSubRow: {
        display: "grid",
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
            gridTemplateColumns: "repeat(7, 1fr)",
        },
    },



})
