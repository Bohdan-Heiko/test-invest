import { Linking, View } from "react-native"
import { AllRoutes, useLocalSearchParams } from "expo-router"
import { TFunction } from "i18next"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { useAuthContext } from "@/context/auth.context"
import { Button, CheckBox, Input, ItemText, SVGIcon, Title } from "@/shared/ui"
import { VectorExpoIcons } from "@/shared/ui/icons/vectorExpoIcons"
import { useCreatePaymentDepositMutation } from "@/store/services/paymentsApi"
import { colors } from "@/utils/constants/colors"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"
import { useAppSelector } from "@/store"

type SearchParams = { title: string; id: string; price?: string; duration?: string }
type DefaultInvestValues = {
  amount: string
  isCheckRules: boolean
}

const defaultValues: DefaultInvestValues = { amount: "", isCheckRules: false }

export const PaymentForm = ({ t }: { t: TFunction }) => {
  const { isAllowCryptoPayment } = useAppSelector((state) => state.user_data)
  const { handlePushRoute } = useAuthContext()
  const params = useLocalSearchParams<SearchParams>()

  const [createPaymentDeposit, { isLoading: isCreatePaymentLoading }] =
    useCreatePaymentDepositMutation()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "all",
    defaultValues
  })

  const handleCreateInvestment: SubmitHandler<DefaultInvestValues> = async ({
    amount
  }) => {
    if (!params) return

    const data = { building: { id: Number(params.id) }, amount: amount }
    await createPaymentDeposit(data)
      .unwrap()
      .then((res) => {
        Linking.openURL(res.url)
        handlePushRoute(`(private)/(statuses)/payment-status/${res.uuid}` as AllRoutes)
      })
      .then(() => reset())
      .catch(console.log)
  }
  return (
    <View style={style.paymentMainContainer}>
      <View style={style.titleContainer}>
        <Title style={style.title}>{t("Оплата")}</Title>
        <ItemText style={style.text}>{params.title}</ItemText>
      </View>

      <View style={style.paymentContainer}>
        {isAllowCryptoPayment ? (
          <View style={style.paymentMethodsContainer}>
            <View style={style.paymentMethod}>
              <SVGIcon name="Visa_Logo" width={40} height={25} opacity={1} />
              <SVGIcon name="Visa_Name" width={55} height={15} opacity={1} />
            </View>
            <View style={[style.paymentMethod, { justifyContent: "center" }]}>
              <SVGIcon name="Tether_Usdt" width={36} height={36} opacity={1} />
            </View>
          </View>
        ) : null}
        <View style={style.investInfoContainer}>
          <VectorExpoIcons
            type="MaterialIcons"
            name="info-outline"
            size={25}
            color={colors.orange}
          />
          <View style={style.investInfoDescription}>
            <ItemText style={style.investInfoDescriptionText}>
              {t("Ціна за 1 кв. м.")} - {params.price ?? 0}$
            </ItemText>
            <ItemText style={style.investInfoDescriptionText}>{`${t(
              "Завершення інвестування"
            )}\n${
              params.duration
                ? datesHelpers.dateFormated(params.duration, "DD.MM.YYYY")
                : ""
            }`}</ItemText>
            <View style={style.investInfoDescriptionPaymentCard}>
              <ItemText>{t("Оплата картами")}</ItemText>
              <SVGIcon name="Visa_Logo" width={25} height={16} />
              <SVGIcon name="Visa_Name" width={37} height={24} />
            </View>
          </View>
        </View>
        <Controller
          name="amount"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              isDotNeed={false}
              error={errors.amount}
              inputProps={{
                placeholder: t("Введіть суму"),
                keyboardType: "decimal-pad",
                onChangeText: field.onChange
              }}
            />
          )}
        />
        <Controller
          name="isCheckRules"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <View style={style.checkBoxCoantiner}>
              <CheckBox
                value={field.value}
                error={!!errors.isCheckRules}
                onPressHandler={field.onChange}
                iconSize={{ height: 23, width: 23 }}
              />
              <ItemText style={style.politicCheck}>
                {t("Ознайомлений з умовами використання")}
              </ItemText>
            </View>
          )}
        />

        <Button
          title={t("Далі")}
          onPress={handleSubmit(handleCreateInvestment)}
          loading={{ isNeed: true, isLoading: isCreatePaymentLoading }}
        />
      </View>
    </View>
  )
}
