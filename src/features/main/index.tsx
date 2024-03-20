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
import ContentLoader, { Rect, Circle, Instagram } from "react-content-loader/native"

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
      <ContentLoader
        speed={2}
        width={280}
        height={350}
        viewBox="0 0 280 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Circle cx="815" cy="67" r="8" />
        <Rect x="587" y="36" rx="5" ry="5" width="220" height="10" />
        <Circle cx="741" cy="118" r="8" />
        <Rect x="709" y="68" rx="5" ry="5" width="220" height="10" />
        <Circle cx="815" cy="125" r="8" />
        <Rect x="738" y="126" rx="5" ry="5" width="220" height="10" />
        <Circle cx="540" cy="468" r="8" />
        <Rect x="672" y="191" rx="5" ry="5" width="220" height="10" />
        <Rect x="402" y="452" rx="23" ry="23" width="234" height="106" />
        <Rect x="5" y="207" rx="0" ry="0" width="236" height="10" />
        <Rect x="150" y="341" rx="0" ry="0" width="1" height="9" />
        <Rect x="2" y="3" rx="20" ry="20" width="271" height="155" />
        <Rect x="6" y="171" rx="0" ry="0" width="182" height="18" />
        <Rect x="5" y="226" rx="0" ry="0" width="236" height="10" />
        <Rect x="5" y="245" rx="0" ry="0" width="236" height="10" />
        <Rect x="4" y="265" rx="0" ry="0" width="236" height="10" />
        <Rect x="4" y="284" rx="0" ry="0" width="236" height="10" />
        <Rect x="5" y="305" rx="0" ry="0" width="236" height="10" />
        <Rect x="3" y="324" rx="0" ry="0" width="236" height="10" />
      </ContentLoader>
      {/* <MainProjectBanner text={t(TEXT1)} /> */}
      <Buildings data={buildingsData} isLoading={isBuildingsDataLoading} />
      <Builders data={buildersData} isLoading={isBuildersLoading} />

      <CallBackForm />
      <OrganizationInfo />
    </ScrollView>
  )
}
