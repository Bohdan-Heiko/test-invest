import { View } from "react-native"
import { FC, useState } from "react"

import { Button, Devider, ItemText, Title, VectorExpoIcons } from "@/shared/ui"
import { TransformedData, UserInvestmentsDataResponse } from "@/types"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"

interface InvestmentAccount {
  title: string
  investmentsData?: TransformedData<UserInvestmentsDataResponse>
}

export const InvestmentAccount: FC<InvestmentAccount> = ({ title, investmentsData }) => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <View style={style.accrualContainer}>
      <Title style={style.accrualTitle}>{title}</Title>
      {investmentsData?.data
        .slice(0, showAll ? investmentsData?.data.length : 3)
        .map((building) => (
          <View key={building.id} style={style.accuralItemsMainContainer}>
            <View style={style.accuralItemContainer}>
              <View style={style.accuralItemNameContainer}>
                <Title style={style.accuralItemNameTitle}>
                  {building.building.title}
                </Title>
                <VectorExpoIcons type={"Feather"} name="x" />
              </View>
              <View style={[style.accuralItemNameContainer, { marginBottom: 10 }]}>
                <Title style={style.accuralItemNameText}>
                  {datesHelpers.dateFormated(building.createdAt, "DD.MM.YYYY")}
                </Title>
                <ItemText style={style.accuralItemNamePayment}>
                  {building.amount} USD
                </ItemText>
              </View>
            </View>
            <Devider />
          </View>
        ))}

      <Button title={showAll ? "Приховати" : "Дивитись всі"} onPress={handleShowAll} />
    </View>
  )
}
