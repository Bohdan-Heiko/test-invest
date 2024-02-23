import { Title, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import { StyleSheet, View } from "react-native"

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <View style={style.errorMessagContainer}>
      <VectorExpoIcons type={"AntDesign"} name="warning" color={colors.red} size={20} />
      <Title style={style.message}>
        {message}
      </Title>
    </View>
  )
}

const style = StyleSheet.create({
  errorMessagContainer: {
    gap: 5,
    display: "flex",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    color: colors.red,
    fontSize: 15,
    lineHeight: 20,
    paddingTop: 3
  }
})
