import { StyleSheet } from "react-native"

import { colors } from "@/utils/constants/colors"

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  projectContainer: {
    gap: 20,
    marginBottom: 15
  },
  projectImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 320 / 220,
    resizeMode: "stretch",
    borderRadius: 20
  },
  projectText: {
    fontSize: 28,
    lineHeight: 38,
    textAlign: "left",
    color: colors.mine_shaft
  },

  // Our projects
  ourProjectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
    paddingBottom: 37
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5
  },

  projectsContainer: {
    gap: 20,
    display: "flex",
    flexDirection: "row"
  },

  ourProjectTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: colors.mine_shaft
  },

  // QUESTION FORM
  questionFormContainer: {
    height: 465,
    borderRadius: 20,
    marginBottom: 20
  },
  backgroundImage: {
    flex: 1
  },
  backGroundDarkening: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    alignItems: "flex-start"
  },
  contentTitle: {
    color: colors.white,
    fontSize: 28,
    textAlign: "left",
    lineHeight: 42,
    marginBottom: 5
  },
  contentText: {
    maxWidth: "63%",
    textAlign: "left",
    color: colors.silver,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20
  },
  contentFormContainer: {
    width: "100%"
  }
})
