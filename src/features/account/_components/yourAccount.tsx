import { Text, View } from "react-native"
import { FC } from "react"

import { ButtonWithIcon, Paragraph, Title } from "@/shared/ui"
import { useSumAccuralsProceentsQuery } from "@/store/services/usersApi"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"
import { usePathname } from "expo-router"

interface IProps {
  investments: string | undefined
}

export const YourAccount: FC<IProps> = ({ investments }) => {
  const pathName =  usePathname()
  const { data: sumAccrualData } = useSumAccuralsProceentsQuery('', {
    skip: pathName !== '/account'
  })
  
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
              {investments ?? 0} <Text style={{ fontSize: 24 }}>USD</Text>
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
