import { ActivityIndicator, StyleSheet, View } from "react-native"

import { Button, Title, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"

export const PaymentStatus = () => {
  return (
    <View style={style.mainContainer}>
      <ActivityIndicator size={"large"} color={colors.blue} />
      <View style={style.titleContainer}>
        <VectorExpoIcons type="MaterialCommunityIcons" name="check" color="green" />
        <Title style={style.title}>
          Ваші гроші успішно заблоковані
          {/* Перевіряемо статус оплати... */}
        </Title>
      </View>
      <Button variant="primary" title="Далі" disabled />
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    display: "flex",
    justifyContent: "space-between"
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    lineHeight: 35,
    color: colors.mine_shaft
  }
})
