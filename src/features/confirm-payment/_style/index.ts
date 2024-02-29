import { StyleSheet } from "react-native"

import { colors } from "@/utils/constants/colors"

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  confirmContainer: {
    borderWidth: 2,
    borderColor: colors.blue,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    gap: 10,
    alignItems: "flex-start"
  },
  confirmTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: colors.tundora
  },
  subTitle: {
    fontSize: 22,
    lineHeight: 42,
    textAlign: "left",
    color: colors.tundora
  },

  userDataContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    flexWrap: "wrap"
  },

  userInfo: {
    fontSize: 18,
    lineHeight: 22,
    color: colors.dove_graya
  },

  // DESCRIPTION
  descriptionContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 11,
    shadowColor: "#777777",
    shadowOpacity: 0.1,
    elevation: 4,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  descriptionTitleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  descriptionTitle: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.tundora
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "left",
    color: colors.dove_graya
  },

  checkBoxCoantiner: {
    display: "flex",
    flexDirection: "row",
    gap: 13
    // flex: 1 / 4,
  },
  politicCheck: {
    textAlign: "left",
    fontSize: 14,
    lineHeight: 21,
    color: colors.mine_shaft,
    flex: 2 / 3
  }
})
