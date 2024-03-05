import { ScrollView, View } from "react-native"

import { OrganizationInfo } from "@/shared/components"
import { colors } from "@/utils/constants/colors"

import { Descriptions } from "./_components/description"
import { PaymentForm } from "./_components/payment.form"
import { style } from "./_style"
import { useTranslation } from "react-i18next"

export const Payment = () => {
  const {t} = useTranslation('payment')
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <Descriptions t={t} />
        <PaymentForm t={t} />
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
