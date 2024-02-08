import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  yourAccountContainer: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: colors.blue,
  },
  yourAccountInfo: {
    display: "flex",
    alignItems: "flex-start",
    gap: 30,
  },
  yourAccountInfoTitle: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 34,
  },
  yourAccountInfoData: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
  },
  yourAccountInfoDataProcent: {
    fontSize: 14,
    lineHeight: 27,
    color: colors.white,
  },
  yourAccountInfoDataMoneyContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  yourAccountInfoDataMoney: {
    fontSize: 40,
    lineHeight: 60,
    color: colors.white,
  },
});
