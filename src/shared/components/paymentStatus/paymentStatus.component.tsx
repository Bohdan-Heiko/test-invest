import { ActivityIndicator, StyleSheet, View } from "react-native"

import { Button, Title, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import { useCheckPaymentStatusQuery } from "@/store/services/paymentsApi"
import { AllRoutes, useLocalSearchParams } from "expo-router"
import { useAuthContext } from "@/context/auth.context"
import { ErrorMessage } from "../errorMessage/errorMessage.component"
import { useEffect, useRef } from "react"

type LocalParams = { uuid: string }

export const PaymentStatus = () => {
  const { uuid } = useLocalSearchParams<LocalParams>()
  const { handlePushRoute } = useAuthContext()
  const successRef = useRef<boolean>(false)

  const {
    data: paymentStatus,
    isError,
    isFetching
  } = useCheckPaymentStatusQuery(uuid, {
    skip: !uuid,
    pollingInterval: !successRef.current ? 2000 : 0
  })

  useEffect(() => {
    if (paymentStatus?.reason === "Ok") {
      successRef.current = true
    }
  }, [paymentStatus])

  return (
    <View style={style.mainContainer}>
      {isFetching ? (
        <ActivityIndicator size={"large"} color={colors.blue} />
      ) : (
        <View></View>
      )}
      {!isError ? (
        <View style={style.titleContainer}>
          {!paymentStatus?.status ? null : (
            <VectorExpoIcons type="MaterialCommunityIcons" name="check" color="green" />
          )}
          <Title style={style.title}>
            {paymentStatus?.status == "WaitingAuthComplete"
              ? "Ваші гроші успішно заблоковані"
              : "Перевіряемо статус оплати..."}
          </Title>
        </View>
      ) : (
        <ErrorMessage message="Щось пішло не так!" />
      )}
      <Button
        title="Далі"
        variant="primary"
        disabled={!paymentStatus?.status}
        onPress={() => handlePushRoute(`/confirm-payment/${uuid}` as AllRoutes)}
      />
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
