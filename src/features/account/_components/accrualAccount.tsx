import { View } from "react-native"
import { FC } from "react"

import { Button, Devider, ItemText, Title } from "@/shared/ui"

import { style } from "../_style"

interface IAccrualAccount {
  title: string
}

export const AccrualAccount: FC<IAccrualAccount> = ({ title }) => {
  return (
    <View style={style.accrualContainer}>
      <Title style={style.accrualTitle}>{title}</Title>
      <View style={style.accuralItemsMainContainer}>
        <View style={style.accuralItemContainer}>
          <View style={style.accuralItemNameContainer}>
            <Title style={style.accuralItemNameTitle}>ЖК Millennium Park</Title>
            <ItemText style={style.accuralItemNameText}>+14%</ItemText>
          </View>
          <View style={[style.accuralItemNameContainer, { marginBottom: 10 }]}>
            <Title style={style.accuralItemNameText}>12.10.2023</Title>
            <ItemText style={style.accuralItemNamePayment}>500 USD</ItemText>
          </View>
        </View>
        <Devider />
      </View>
      <View style={style.accuralItemsMainContainer}>
        <View style={style.accuralItemContainer}>
          <View style={style.accuralItemNameContainer}>
            <Title style={style.accuralItemNameTitle}>ЖК Millennium Park</Title>
            <ItemText style={style.accuralItemNameText}>+14%</ItemText>
          </View>
          <View style={[style.accuralItemNameContainer, { marginBottom: 10 }]}>
            <Title style={style.accuralItemNameText}>12.10.2023</Title>
            <ItemText style={style.accuralItemNamePayment}>500 USD</ItemText>
          </View>
        </View>
        <Devider />
      </View>
      <View style={style.accuralItemsMainContainer}>
        <View style={style.accuralItemContainer}>
          <View style={style.accuralItemNameContainer}>
            <Title style={style.accuralItemNameTitle}>ЖК Millennium Park</Title>
            <ItemText style={style.accuralItemNameText}>+14%</ItemText>
          </View>
          <View style={[style.accuralItemNameContainer, { marginBottom: 10 }]}>
            <Title style={style.accuralItemNameText}>12.10.2023</Title>
            <ItemText style={style.accuralItemNamePayment}>500 USD</ItemText>
          </View>
        </View>
        <Devider />
      </View>
      <Button title="Дивитись всі" />
    </View>
  )
}
