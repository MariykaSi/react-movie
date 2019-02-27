import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  movie: {
    width: "100%",
    textAlign: "center",
    marginBottom: 40,
    padding: "0 15px",

    [mediaQueries.medium]: {
      width: "33.3%"
    },

    [mediaQueries.large]: {
      width: "25%"
    }
  },

  genres: {
    margin: "10px 0",
    color: colors.gray71,
    fontWeight: "bold"
  }
});
