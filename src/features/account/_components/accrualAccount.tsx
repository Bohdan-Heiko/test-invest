import { ActivityIndicator, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"

import { Button, Devider, ItemText, Title } from "@/shared/ui"
import { TransformedData, UserAccrualsDataResponse } from "@/types"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"
import { colors } from "@/utils/constants/colors"

interface IAccrualAccount {
  t: TFunction
  title: string
  isLoading?: boolean
  accrualData?: TransformedData<UserAccrualsDataResponse>
}

export const AccrualAccount: FC<IAccrualAccount> = ({
  t,
  title,
  accrualData,
  isLoading
}) => {
  const [showAll, setShowAll] = useState<boolean>(false)

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
      {accrualData?.data.length ? (
        accrualData?.data
          .slice(0, showAll ? accrualData?.data.length : 3)
          .map((accrual) => (
            <View key={accrual.id} style={style.accuralItemsMainContainer}>
              <View style={style.accuralItemContainer}>
                <View style={style.accuralItemNameContainer}>
                  <Title
                    style={[style.accuralItemNameTitle, { maxWidth: "88%" }]}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {accrual.building.title}
                  </Title>
                  <ItemText style={style.accuralItemNameText}>
                    +{accrual.percent}%
                  </ItemText>
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
          ))
      ) : (
        <Title style={style.accuralNoDataInfo}>{t("У вас ще немає нарахувань")}</Title>
      )}

      {!!accrualData?.data?.length && (
        <Button
          title={showAll ? t("Приховати") : t("Дивитись всі")}
          onPress={handleShowAll}
        />
      )}
    </View>
  )
}
