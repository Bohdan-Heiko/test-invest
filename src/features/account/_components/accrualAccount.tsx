import { View } from "react-native"
import { FC } from "react"

import { Button, Devider, ItemText, Title } from "@/shared/ui"
import { TransformedData, UserAccrualsDataResponse } from "@/types"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"

interface IAccrualAccount {
  title: string
  accrualData?: TransformedData<UserAccrualsDataResponse>
}

export const AccrualAccount: FC<IAccrualAccount> = ({ title, accrualData }) => {
  return (
    <View style={style.accrualContainer}>
      <Title style={style.accrualTitle}>{title}</Title>
      {accrualData?.data.map((accrual) => (
        <View key={accrual.id} style={style.accuralItemsMainContainer}>
          <View style={style.accuralItemContainer}>
            <View style={style.accuralItemNameContainer}>
              <Title style={style.accuralItemNameTitle}>{accrual.building.title}</Title>
              <ItemText style={style.accuralItemNameText}>+{accrual.percent}%</ItemText>
            </View>
            <View style={[style.accuralItemNameContainer, { marginBottom: 10 }]}>
              <Title style={style.accuralItemNameText}>
                {datesHelpers.dateFormated(accrual.createdAt, "DD.MM.YYYY")}
              </Title>
              <ItemText style={style.accuralItemNamePayment}>
                {accrual.amount} USD
              </ItemText>
            </View>
          </View>
          <Devider />
        </View>
      ))}

      <Button title="Дивитись всі" />
    </View>
  )
}
