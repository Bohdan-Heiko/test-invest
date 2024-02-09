import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "relative",
  },
  recoverPasswordContainer: {
    borderWidth: 2,
    borderColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    gap: 16,
  },
  recoverPasswordTitle: {
    fontSize: 28,
    lineHeight: 42,
    color: colors.tundora,
  },
  recoverPasswordFormContainer: {
    gap: 10,
  },
});
