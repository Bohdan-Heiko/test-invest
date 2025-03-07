import { ScrollView } from "react-native"
import { useTranslation } from "react-i18next"

import { OrganizationInfo } from "@/shared/components"
import { useGetAllPublicBuidersQuery } from "@/store/services/buildersApi"
import { useGetAllPublicBuildingsQuery } from "@/store/services/buildingsApi"

import { Builders } from "./_components/builders"
import { Buildings } from "./_components/buildings"
import { CallBackForm } from "./_components/callBack"
import { MainProjectBanner } from "./_components/mainProjectBanner"
import { style } from "./_style"

const TEXT1 =
  "Модерн Хайтс - інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та зручне місцерозташування задля створення прекрасного життєвого простору."

export const Main = () => {
  const { t } = useTranslation("main")

  const { data: buildingsData, isFetching: isBuildingsDataLoading } =
    useGetAllPublicBuildingsQuery()

  const { data: buildersData, isFetching: isBuildersLoading } =
    useGetAllPublicBuidersQuery()

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={style.mainContainer}
    >
      <MainProjectBanner text={t(TEXT1)} />
      <Buildings data={buildingsData} isLoading={isBuildingsDataLoading} />
      <Builders data={buildersData} isLoading={isBuildersLoading} />

      <CallBackForm />
      <OrganizationInfo />
    </ScrollView>
  )
}
