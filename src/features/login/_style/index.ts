import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  loginContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    color: colors.tundora,
    marginBottom: 16,
    lineHeight: 42,
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  checkBox: {
    display: "flex",
    flexDirection: "row",
  },
  chekTitle: {
    color: colors.tundora,
    lineHeight: 21,
    fontSize: 14,
  },
  forgotPasswordText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.blue,
  },
});
