import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  cart: {
    width: "100%",
    padding: "0 5px",
    textAlign: "center",

    [mediaQueries.small]: {
      width: "33.3%",
      float: "left"
    },

    [mediaQueries.medium]: {
      width: "20%"
    }
  }
});
