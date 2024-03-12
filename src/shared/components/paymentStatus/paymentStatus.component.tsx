import { ActivityIndicator, StyleSheet, View } from "react-native"
import { useEffect, useRef } from "react"
import { AllRoutes, useLocalSearchParams } from "expo-router"
import { useTranslation } from "react-i18next"

import { useAuthContext } from "@/context/auth.context"
import { Button, Title, VectorExpoIcons } from "@/shared/ui"
import { useCheckPaymentStatusQuery } from "@/store/services/paymentsApi"
import { colors } from "@/utils/constants/colors"

import { ErrorMessage } from "../errorMessage/errorMessage.component"

type LocalParams = { uuid: string }

const STATUSES_PAYMENT = {
  Declined: { title: "Оплата не пройшла", url: `/(tabs)` as AllRoutes },
  WaitingAuthComplete: {
    title: "Ваші гроші успішно заблоковані",
    url: `/confirm-payment/` as AllRoutes
  },
  InProcessing: { title: "", url: "" },
  Approved: { title: "", url: "" }
}

export const PaymentStatus = () => {
  const { t } = useTranslation("status")
  const { uuid } = useLocalSearchParams<LocalParams>()
  const { handleReplaceRoute } = useAuthContext()
  const successRef = useRef<boolean>(false)

  const {
    data: paymentStatus,
    isError,
    error
  } = useCheckPaymentStatusQuery(uuid, {
    skip: !uuid,
    pollingInterval: !successRef.current ? 500 : 0
  })

  console.log(paymentStatus);
  

  const handleReedirect = () => {
    if (paymentStatus?.status !== "WaitingAuthComplete") {
      handleReplaceRoute("/(tabs)" as AllRoutes)
    } else {
      handleReplaceRoute(`(private)/confirm-payment/${uuid}` as AllRoutes, {
        ...paymentStatus
      })
    }
  }

  useEffect(() => {
    if (paymentStatus?.status || isError) {
      successRef.current = true
    }
  }, [paymentStatus, isError])

  return (
    <View style={style.mainContainer}>
      {!paymentStatus?.status && !isError ? (
        <ActivityIndicator size={"large"} color={colors.blue} />
      ) : (
        <View></View>
      )}
      {!isError ? (
        <View style={style.titleContainer}>
          {paymentStatus?.status == "WaitingAuthComplete" ? (
            <VectorExpoIcons type="MaterialCommunityIcons" name="check" color="green" />
          ) : null}
          <Title style={style.title}>
            {paymentStatus?.status
              ? t(STATUSES_PAYMENT[paymentStatus?.status].title)
              : t("Перевіряемо статус оплати")}
          </Title>
        </View>
      ) : (
        <>
          <ErrorMessage message={t("Щось пішло не так!")} />
          <ErrorMessage message={JSON.stringify(error)} />
        </>
      )}
      <Button
        title={t("Далі")}
        variant="primary"
        disabled={!paymentStatus?.status}
        onPress={handleReedirect}
      />
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40,
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
