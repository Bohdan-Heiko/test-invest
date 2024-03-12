import { ActivityIndicator, TouchableOpacity, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"

import { Button, Devider, ItemText, Title, VectorExpoIcons } from "@/shared/ui"
import { TransformedData, UserInvestmentsDataResponse } from "@/types"
import { colors } from "@/utils/constants/colors"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"
import { useModalContext } from "@/context/modal.context"

interface InvestmentAccount {
  t: TFunction
  title: string
  isLoading?: boolean
  investmentsData?: TransformedData<UserInvestmentsDataResponse>
}

export const InvestmentAccount: FC<InvestmentAccount> = ({
  t,
  title,
  isLoading,
  investmentsData
}) => {
  const [showAll, setShowAll] = useState<boolean>(false)
  const { openModal } = useModalContext()

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <View style={style.accrualContainer}>
      <View style={style.titleContainer}>
        <Title style={style.accrualTitle}>{title}</Title>
        <ActivityIndicator
          size={"small"}
          color={colors.blue}
          style={{ display: isLoading ? "flex" : "none" }}
        />
      </View>
      {investmentsData?.data.length ? (
        investmentsData?.data
          .slice(0, showAll ? investmentsData?.data.length : 3)
          .map((building) => (
            <View key={building.id} style={style.accuralItemsMainContainer}>
              <View style={style.accuralItemContainer}>
                <View style={style.accuralItemNameContainer}>
                  <Title
                    style={[style.accuralItemNameTitle, { maxWidth: "88%" }]}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {building.building.title}
                  </Title>
                  <TouchableOpacity onPress={() => openModal('invest-modal')}>
                    <VectorExpoIcons type={"Feather"} name="x" />
                  </TouchableOpacity>
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
          ))
      ) : (
        <ItemText style={[style.accuralNoDataInfo]}>
          {t("У вас ще немає інвестицій")}
        </ItemText>
      )}

      {!!investmentsData?.data.length && (
        <Button
          title={showAll ? t("Приховати") : t("Дивитись всі")}
          onPress={handleShowAll}
        />
      )}
    </View>
  )
}
