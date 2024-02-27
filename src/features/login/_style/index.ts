import { StyleSheet } from "react-native"

import { colors } from "@/utils/constants/colors"

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20
    // paddingVertical: 20
  },

  // Account section
  loginContainer: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderColor: colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20
  },
  title: {
    color: colors.tundora,
    marginBottom: 16,
    lineHeight: 42
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  checkBox: {
    display: "flex",
    flexDirection: "row"
  },
  chekTitle: {
    color: colors.tundora,
    fontFamily: "Inter500",
    lineHeight: 21,
    fontSize: 14
  },
  forgotPasswordText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.blue
  },
  accountInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  accountInfoText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.silver
  }
})
