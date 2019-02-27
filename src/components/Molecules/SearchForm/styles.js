import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  search: {
    borderBottom: `1px solid ${colors.grayEE}`
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",

    [mediaQueries.large]: {
      padding: 0
    }
  }
});
