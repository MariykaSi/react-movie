import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  page: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },

  moviesWrap: {
    maxWidth: "1200px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  loading: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "999",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },

  main: {
    flex: "1 1"
  },

  error: {
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100
  },

  noResult: {
    textAlign: "center",
    fontSize: 45,
    paddingTop: 40
  }
});
