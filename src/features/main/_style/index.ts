import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  projectContainer: {
    gap: 20,
  },
  projectImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 320 / 220,
    resizeMode: "stretch",
    borderRadius: 20,
  },
  projectText: {
    fontSize: 28,
    lineHeight: 42,
    textAlign: "left",
    color: colors.mine_shaft,
  },

  // Our projects
  ourProjectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
    paddingBottom: 37,
  },

  projectsContainer: {
    gap: 20,
    display: "flex",
    flexDirection: "row",
  },

  ourProjectItemContainer: {
    gap: 20,
    maxWidth: 280,
    display: "flex",
    flexDirection: "column",
  },
  ourProjectTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: colors.mine_shaft,
  },
  ourProjectItem: {
    width: 280,
    height: 220,
  },
  ourProjectItemImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 280 / 220,
    resizeMode: "stretch",
    borderRadius: 20,
  },

  ourProjectItemInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },

  ourProjectItemInfoTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.tundora,
  },
  ourProjectItemInfoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    color: colors.dove_graya,
  },
  ourProjectItemInfoLink: {
    fontSize: 20,
    lineHeight: 30,
  },
});
