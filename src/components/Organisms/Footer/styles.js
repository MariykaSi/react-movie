import { StyleSheet } from "aphrodite/no-important";
import { colors } from "../../../styles/variables";

export default StyleSheet.create({
  footer: {
    borderTop: `1px solid ${colors.grayEE}`
  },

  copyright: {
    padding: "30px 0",
    position: "relative",
    color: colors.gray,
    letterSpacing: "0.195px",
    fontSize: 13,
    textAlign: "center"
  }
});
