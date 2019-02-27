import { StyleSheet } from "aphrodite/no-important";
import { colors } from "../../../styles/variables";

export default StyleSheet.create({
  vote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    position: "absolute",
    top: 5,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: colors.yellow
  }
});
