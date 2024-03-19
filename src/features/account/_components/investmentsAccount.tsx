import { ActivityIndicator, TouchableOpacity, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"

import { useModalContext } from "@/context/modal.context"
import { Button, Devider, ItemText, Title, VectorExpoIcons } from "@/shared/ui"
import { useConfirmCancellationInvestmentMutation } from "@/store/services/userOperationsApi"
import { TransformedData, UserInvestmentsDataResponse } from "@/types"
import { colors } from "@/utils/constants/colors"
import {
  CONFIRM_MODDAL_TEXT,
  REJECT_CANCEL_INVEST_TEXT,
  SUCCES_CANCEL_INVEST_TEXT
} from "@/utils/constants/constants"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"

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

  const [confirmCancellationInvestment] = useConfirmCancellationInvestmentMutation()

  const onConfirmCancellationInvestment = async (id: number) => {
    await confirmCancellationInvestment(id)
      .unwrap()
      .then(() => {
        openModal({
          type: "success-modal",
          data: {
            btnTitle: "Ok",
            btnVariant: "primary",
            title: t(SUCCES_CANCEL_INVEST_TEXT.title),
            subTitle: t(SUCCES_CANCEL_INVEST_TEXT.subTitle)
          }
        })
      })
      .catch(() => {
        openModal({
          type: "success-modal",
          data: {
            title: t(REJECT_CANCEL_INVEST_TEXT.title)
          }
        })
      })
  }

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
                  {building.status === "Pending" && (
                    <TouchableOpacity
                      onPress={() =>
                        openModal({
                          type: "confirm-modal",
                          data: {
                            handlePress: () =>
                              onConfirmCancellationInvestment(building.id),
                            title: "Ви впевнені?",
                            subTitle: t(CONFIRM_MODDAL_TEXT)
                          }
                        })
                      }
                    >
                      <VectorExpoIcons type={"Feather"} name="x" />
                    </TouchableOpacity>
                  )}
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
