import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    container: {
        paddingRight: 30,
        paddingTop: 10,
    },
    cardRespondResponses: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    imgSrc: {
        height: 80,
        width: 80,
    },

    cardRespL: {
        marginRight: 50,
    },

    cardRespondedRow: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: 30,
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

    navBarUl: {
        listStyle: "none",
        display: "flex",
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    navBar: {
        paddingLeft: 30,
    },

    txtDataFirst: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "24px",
        color: "#515A6B",
        marginTop: 10,
        textAlign: "center",
    },
    txtTitle: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: "36px",
        marginBottom: 15,
        color: "#515A6B",
    },
    btnLoadQcast: {
        maxWidth: 157,
        height: 50,
        radius: 100,
    },

    cardSavedRow: {
        maxWidth: 280,
        marginTop: 20,
    },

    rowCenter: {
        display: "flex",
        justifyContent: "center",
    },

    cardPopularSubCol: {
        maxWidth: 450,
    },

    cardRespMain: {
        marginRight: 50,
    },

    cardResponsed: {
        color: "#7B94B5",
        textAlign: "center",
    },
})
