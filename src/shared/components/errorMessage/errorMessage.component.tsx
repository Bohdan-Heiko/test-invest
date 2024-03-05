import { StyleSheet, View } from "react-native"

import { Title, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <View style={style.errorMessagContainer}>
      <VectorExpoIcons type={"AntDesign"} name="warning" color={colors.red} size={20} />
      <View style={style.messageContainer}>
        <Title style={style.message}>{message}</Title>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  errorMessagContainer: {
    gap: 5,
    display: "flex",
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  messageContainer: {
    flex: 1,
    marginLeft: 5
  },
  message: {
    color: colors.red,
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 3,
    textAlign: "left"
  }
})
