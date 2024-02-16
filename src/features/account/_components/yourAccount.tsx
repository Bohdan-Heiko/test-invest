import { Text, View } from "react-native"

import { ButtonWithIcon, Paragraph, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"
import { FC } from "react"
import { useSumAccuralsProceentsQuery } from "@/store/services/usersApi"

interface IProps {
  investments: string | undefined
}

export const YourAccount: FC<IProps> = ({ investments }) => {
  const {data: sumAccrualData} = useSumAccuralsProceentsQuery()
  
  return (
    <View style={style.yourAccountContainer}>
      <View style={style.yourAccountInfo}>
        <Title style={style.yourAccountInfoTitle}>Ваш рахунок</Title>
        <View style={style.yourAccountInfoData}>
          <View style={style.yourAccountInfoDataMoneyContainer}>
            <Paragraph style={style.yourAccountInfoDataProcent}>
              +{sumAccrualData ?? 0}% з минулого кварталу
            </Paragraph>
            <Paragraph style={style.yourAccountInfoDataMoney}>
              {investments ?? 0} <Text style={{ fontSize: 24 }}>USDT</Text>
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
