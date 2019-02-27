import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  leftContainer: {
    width: "100%",
    position: "relative",
    textAlign: "left",

    [mediaQueries.small]: {
      width: "30%",
      float: "left"
    }
  },

  rightContainer: {
    width: "100%",

    [mediaQueries.small]: {
      width: "70%",
      float: "left",
      paddingLeft: 15
    }
  },

  label: {
    fontWeight: "bold",
    margin: "15px 0"
  }
});
