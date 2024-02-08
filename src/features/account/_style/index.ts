import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },

  //YOUR ACCOUNT
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
  //YOUR ACCOUNT

  //ACCRUAL
  accrualContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 30,
    display: "flex",
    alignItems: "flex-start",
    borderRadius: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 11,
    shadowColor: "#777777",
    shadowOpacity: 0.1,
    elevation: 1.8,
  },
  accrualTitle: {
    fontSize: 30,
    lineHeight: 45,
    color: colors.mine_shaft,
  },
  accuralItemsMainContainer: {
    width: "100%",
    gap: 20,
  },
  accuralItemContainer: {
    flex: 1,
    gap: 10,
  },

  accuralItemNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accuralItemNameTitle: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.mine_shaft,
  },
  accuralItemNameText: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.silver,
  },
  accuralItemNamePayment: {
    fontSize: 14,
    lineHeight: 21,
  },
});
