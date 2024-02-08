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

  // QUESTION FORM
  questionFormContainer: {
    height: 465,
    borderRadius: 20,
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
  },
  backGroundDarkening: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
  },
  contentTitle: {
    color: colors.white,
    fontSize: 28,
    textAlign: "left",
    lineHeight: 42,
    marginBottom: 5,
  },
  contentText: {
    maxWidth: "63%",
    textAlign: "left",
    color: colors.silver,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },
  contentFormContainer: {
    width: "100%",
  },
});
