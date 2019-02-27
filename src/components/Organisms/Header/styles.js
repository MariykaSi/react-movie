import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",

    [mediaQueries.large]: {
      padding: 0
    }
  },

  logo: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1.8,
    lineHeight: 1.7,
    textTransform: "uppercase",

    [mediaQueries.medium]: {
      padding: "20px 0"
    }
  },

  header: {
    borderBottom: `1px solid ${colors.grayEE}`
  }
});
