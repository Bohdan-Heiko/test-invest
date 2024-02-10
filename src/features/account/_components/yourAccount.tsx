import { Text, View } from "react-native"

import { colors } from "@/constants/colors"
import { ButtonWithIcon, Paragraph, Title } from "@/shared/ui"

import { style } from "../_style"

export const YourAccount = () => {
  return (
    <View style={style.yourAccountContainer}>
      <View style={style.yourAccountInfo}>
        <Title style={style.yourAccountInfoTitle}>Ваш рахунок</Title>
        <View style={style.yourAccountInfoData}>
          <View style={style.yourAccountInfoDataMoneyContainer}>
            <Paragraph style={style.yourAccountInfoDataProcent}>+14% з минулого кварталу</Paragraph>
            <Paragraph style={style.yourAccountInfoDataMoney}>
              29,475.00 <Text style={{ fontSize: 24 }}>USDT</Text>
            </Paragraph>
          </View>

          <ButtonWithIcon
            iconName="Arrow_Up_Right"
            title="Інвестувати"
            variant="secondary"
            iconColor={colors.blue}
            style={{ paddingHorizontal: 20 }}
          />
        </View>
      </View>
    </View>
  )
}
