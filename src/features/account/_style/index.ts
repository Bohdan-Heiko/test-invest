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
  yourAccountInfoDataMoneyContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  yourAccountInfoDataProcent: {
    fontSize: 14,
    lineHeight: 27,
    color: colors.white,
  },
  yourAccountInfoDataMoney: {
    fontSize: 40,
    lineHeight: 60,
    color: colors.white,
  },
  //YOUR ACCOUNT

  // PERSONAL INFO
  personalInfoMainContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 20,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 11,
    shadowColor: "#777777",
    shadowOpacity: 0.1,
    elevation: 1.8,
  },
  personalInfoTitle: {
    fontFamily: "Inter600",
    fontSize: 30,
    lineHeight: 45,
    textAlign: "left",
    color: colors.mine_shaft,
  },
  personalInfoContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 15,
  },
  personalInfoContainerTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.mine_shaft,
  },
  personalInfoText: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.dove_graya,
  },

  yourRieltorContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 15,
  },
  yourRieltorTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.mine_shaft,
  },
  yourRieltorInfo: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: "left",
    color: colors.tundora,
  },

  functionsContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 15,
  },
  functionsTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.mine_shaft,
  },
  functionsLinks: {
    fontSize: 20,
    lineHeight: 30,
  },
  // PERSONAL INFO

  //RIELTOR ACCOUNT
  rieltorInfoMainContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 11,
    shadowColor: "#777777",
    shadowOpacity: 0.1,
    elevation: 1.8,
  },
  descriptionContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 5,
  },
  descriptionTitle: {
    fontSize: 30,
    lineHeight: 45,
    color: colors.mine_shaft,
  },
  description: {
    textAlign: "left",
    fontSize: 18,
    lineHeight: 27,
    color: colors.mine_shaft,
  },
  infoContainer: {
    gap: 15,
  },
  infoLinksContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
  },
  infoLinksTitleContainer: {
    display: "flex",
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  infoLinksTitle: {
    fontSize: 18,
    lineHeight: 30,
    color: colors.mine_shaft
  },
  //RIELTOR ACCOUNT

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
  //ACCRUAL

  // MY PROJECTS
  myProjectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
  },
  myProjectTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: colors.mine_shaft,
  },
  projectsContainer: {
    gap: 20,
    display: "flex",
    flexDirection: "row",
  },
});
