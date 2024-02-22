import { StyleSheet } from "react-native"

import { colors } from "@/utils/constants/colors"

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20
  },

  // TITLE
  titleContainer: {
    display: "flex",
    gap: 10
  },
  mainTitle: {
    fontSize: 28,
    lineHeight: 42,
    textAlign: "left",
    color: colors.mine_shaft
  },
  startedBuildingTime: {
    textAlign: "left",
    fontSize: 14,
    lineHeight: 21,
    color: colors.dove_graya
  },

  // REPORT IMAGES
  reportsImagesContainer: {
    gap: 20,
    display: "flex",
    flexDirection: "row"
  },
  reportItem: {
    width: 300,
    height: 210
  },
  reportItemImage: {
    width: "100%",
    height: undefined,
    position: "relative",
    aspectRatio: 300 / 210,
    resizeMode: "stretch",
    borderRadius: 20,
    zIndex: 10
  }
})
