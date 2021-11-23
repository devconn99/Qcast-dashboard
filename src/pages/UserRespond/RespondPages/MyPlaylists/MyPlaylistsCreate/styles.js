import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
    headerTitle: {
        fontWeight: 700,
        fontSize: 24,
        color: "#000000"
    },

    searchContainer: {
        marginTop: 30,
    },

    titleSearch: {
        fontWeight: 400,
        fontSize: 16,
        color: "#7B94B5",
    },

    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    inputPlace: {
        width: "70%",
        height: 55,
        padding: 15,
        borderRadius: 10,
        border: "none",
        boxShadow:
            "inset -2px -5px 7px rgba(255, 255, 255, 0.7), inset 2px 5px 8px rgba(0, 0, 0, 0.25)",
        fontSize: 16,
        lineHeight: "24px",
        color: "#515A6B",
        fontWeight: "normal",
        ":focus": {
            outline: "none",
        },
        "::placeholder": {
            color: "#515A6B",
        }
    },

    titleAdd: {
        color: "#515A6B",
        marginTop: 30,
        marginBottom: 16,
        fontSize: 20,
        fontWeight: 700,
    },

    titleTxt: {
        fontSize: 15,
        color: "#515A6B",
        maxWidth: 287,
        paddingLeft: 10,
    },

    imgTitle: {
        height: 80,
        width: 80,
        borderRadius: "100%",
        border: "5px solid #ECF5FC",
        boxShadow: "-3px -3px 10px #FFFFFF, 3px 4px 10px rgba(0, 0, 0, 0.25)",
    },

    imgBtnPlay: {
        height: 80,
        width: 80,
        paddingLeft: 0,
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        border: "none",
        outline:"none",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "100%",
    },

    titleColumn: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },

    mainTitle: {
        display: "flex",
        justifyContent: "center",
        fontWeight: 400,
        fontSize: 14,
        color: "#515A6B",
    },

    mainTitleContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 34,
    },

    mainTitleContent2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 4,
    },

    mainTitleContent3: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 5,
    },

    mainTitleContent4: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 5,
    },

    mainTitleContent5: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 3,
    },

    mainTitleContent6: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 6,
    },

    mainTitle1: {
        display: "flex",
        justifyContent: "start",
        fontWeight: 400,
        fontSize: 14,
        color: "#515A6B",
    },

    mainTitleAdd: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 45,
    },

    underlinePl: {
        height: 1,
        background: "#DBE9FD",
        width: "100%",
    },

    mainTitleAddNum: {
        display: "flex",
        justifyContent: "center",
        marginTop: 60,
        color: "#515A6B",
    },

    activeText: {
        marginTop: 60,
        fontSize: 16,
        fontWeight: 500,
        color: "#6497C7",
        display: "flex",
        justifyContent: "center",
    },

    line: {
        display: "flex",
        justifyContent: "center",
        height: 10,
        color: "#DBE9FD",
        position: "absolute",
        width: "calc(100% - 30px)",
        marginTop: 10,
    },


    editPlaylist: {
        display: "flex",
        height: 55,
        color: "#7B94B5",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
        boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
        border: "none",
        borderRadius: 100,
        minWidth: 150,
        maxWidth: 456,
        marginLeft: 41,
    },

    addPlaylist: {
        display: "flex",
        height: 40,
        width: 40,
        color: "#7B94B5",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
        boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
        border: "none",
        borderRadius: 100,
        marginBottom: 10,
        cursor: "pointer",
    },

    editPlaylistBtnActive: {
        display: "flex",
        height: 55,
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        background: "#EFF6FC",
        boxShadow: "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
        border: "none",
        borderRadius: 100,
        minWidth: 150,
        maxWidth: 456,
        marginLeft: 41,
    },

    addPlayBtnActive: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        background: "#EFF6FC",
        boxShadow: "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
        border: "none",
        borderRadius: 100,
        cursor: "pointer",
    },


    qcastPlayBtnDiv: {
        display: "flex",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        background: "#F1F9FF",
        borderRadius: 100,
        cursor: "pointer",
        marginBottom: 10,
    },
    qcastPlayBtn: {
        display: "flex",
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135.07deg, #F1F9FF 6.66%, #DCE8F7 104.83%)",
        boxShadow: "rgb(255 255 255 / 70%) 1px -3px 10px, rgb(0 0 0 / 18%) 5px 3px 10px",
        border: "none",
        borderRadius: 100,
        cursor: "pointer",
    },
    qcastPlayBtnActive: {
        display: "flex",
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        background: "#EFF6FC",
        boxShadow: "inset -2px -4px 5px rgba(255, 255, 255, 0.7), inset 2px 4px 5px rgba(0, 0, 0, 0.25);",
        border: "none",
        borderRadius: 100,
        cursor: "pointer",
    },
    container: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    rowCenter: {
        display: "flex",
        justifyContent: "center",
    },
    rowBetween: {
        display: "flex",
        justifyContent: "between",
    },

        containerFeatured: {
            position: "relative",
            marginTop: 20,
        },
        img_avatar: {
            height: 92,
        },
        txtTitle: {
            fontSize: 24,
            fontWeight: 700,
            lineHeight: "36px",
            marginBottom: 15,
            color: "#22304A",
        },

        // grid
        gridLineBreak: {
        marginTop: 30,
            position: "absolute",
            top: 160,
            width: "100%",
        },

        gridRow: {
            display: "grid",
            gridTemplateColumns: "6fr 3fr 2fr 2fr 2fr 1fr",
            gridRowGap: 20,
            alignItems: "center",
            justifyContent: "center",
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
            maxWidth: 390,
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
        txtDataFirst: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "24px",
            color: "#515A6B",
            marginLeft: 10,
            marginBottom: 0,
        },
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
})
