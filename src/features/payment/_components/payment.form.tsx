import { Pressable, ScrollView, View } from "react-native"
import { useState } from "react"
import { useLocalSearchParams, useNavigation } from "expo-router"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { OrganizationInfo } from "@/shared/components"
import { Button, CheckBox, Input, ItemText, Paragraph, SVGIcon, Title } from "@/shared/ui"
import { VectorExpoIcons } from "@/shared/ui/icons/vectorExpoIcons"
import { useCreateInvestmentsMutation } from "@/store/services/userOperationsApi"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

type SearchParams = { title: string; id: string }
type DefaultInvestValues = {
  amount: string
  isCheckRules: boolean
}

const defaultValues: DefaultInvestValues = { amount: "", isCheckRules: false }

export const PaymentForm = () => {
  const navigate = useNavigation()
  const params = useLocalSearchParams<SearchParams>()

  const [createInvestments] = useCreateInvestmentsMutation()

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
    await createInvestments(data)
      .unwrap()
      .then(navigate.goBack)
      .then(() => reset())
      .catch(console.log)
  }
  return (
    <View style={style.paymentMainContainer}>
      <View style={style.titleContainer}>
        <Title style={style.title}>Оплата</Title>
        <ItemText style={style.text}>{params.title}</ItemText>
      </View>

      <View style={style.paymentContainer}>
        <View style={style.paymentMethodsContainer}>
          <View style={style.paymentMethod}>
            <SVGIcon name="Visa_Logo" width={40} height={25} />
            <SVGIcon name="Visa_Name" width={55} height={15} />
          </View>
          <View style={[style.paymentMethod, { justifyContent: "center" }]}>
            <SVGIcon name="Tether_Usdt" width={36} height={36} />
          </View>
        </View>
        <View style={style.investInfoContainer}>
          <VectorExpoIcons
            type="MaterialIcons"
            name="info-outline"
            size={25}
            color={colors.orange}
          />
          <View style={style.investInfoDescription}>
            <ItemText style={style.investInfoDescriptionText}>
              Ціна за 1 кв. м. - 589$
            </ItemText>
            <ItemText
              style={style.investInfoDescriptionText}
            >{`Завершення інвестування\n24.01.2025`}</ItemText>
            <View style={style.investInfoDescriptionPaymentCard}>
              <ItemText>Оплата картами</ItemText>
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
                placeholder: "Введіть суму",
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
                Ознайомлений з умовами використання
              </ItemText>
            </View>
          )}
        />

        <Button title="Далі" onPress={handleSubmit(handleCreateInvestment)} />
      </View>
    </View>
  )
}
