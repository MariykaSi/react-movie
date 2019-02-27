import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  page: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
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

  container: {
    maxWidth: "1200px",
    margin: "25px auto",
    padding: "0 25px",
    pagging: "0 20px",
    display: "flex",
    flexDirection: "column"
  },

  recommendation: {
    display: "flex",
    flexWrap: "wrap"
  },

  subTitle: {
    margin: "20px 0",
    fontWeight: "bold",
    fontSize: 20
  }
});
