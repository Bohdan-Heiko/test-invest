import { ScrollView, View } from "react-native"

import { OrganizationInfo } from "@/shared/components"
import { colors } from "@/utils/constants/colors"

import { Descriptions } from "./_components/description"
import { PaymentForm } from "./_components/payment.form"
import { style } from "./_style"

export const Payment = () => {
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <Descriptions />
        <PaymentForm />
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
