import { StyleSheet } from "react-native"

import { colors } from "@/utils/constants/colors"

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  title: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.mine_shaft,
    textAlign: "left"
  },

  //PROJECT CARDS
  projectsContainer: {
    gap: 20,
    display: "flex",
    flexDirection: "row"
  },
  projectItem: {
    width: 300,
    height: 210
  },
  projectItemImage: {
    width: "100%",
    height: undefined,
    position: "relative",
    aspectRatio: 300 / 210,
    resizeMode: "stretch",
    borderRadius: 20,
    zIndex: 10
  },
  projectItemTitleContainer: {
    flex: 1,
    position: "absolute",
    top: 7,
    left: 7,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: colors.blue
  },

  projectItemTitleContainerTitle: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.white
  },

  // PROJECT INFO
  infoContainer: {
    gap: 10,
    display: "flex",
    alignItems: "flex-start"
  },
  infoContainerTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.mine_shaft
  },
  infoContainerDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.mine_shaft,
    textAlign: "left"
  },
  infoDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  infoDetailsContainerText: {
    fontSize: 16,
    lineHeight: 24
  },

  // TEAMS
  teamsContainer: {
    gap: 20
  },

  teamsMainTitle: {
    textAlign: "left"
  },
  memberContainer: {
    gap: 10
  },

  socialMainContainer: {
    display: "flex",
    position: "absolute",
    top: 7,
    left: 7,
    zIndex: 100,
    gap: 10
  },

  socialContainer: {
    backgroundColor: colors.blue,
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  memberJobTitle: {
    fontSize: 18,
    lineHeight: 27,
    textAlign: "left",
    color: colors.tundora
  },
  memberJobDescription: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "left",
    color: colors.dove_graya
  }
})
