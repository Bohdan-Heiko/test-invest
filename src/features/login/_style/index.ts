import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  loginContainer: {
    // flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    color: colors.tundora,
    marginBottom: 16,
    lineHeight: 42,
  },

});
