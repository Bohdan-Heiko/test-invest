import { ScrollView } from "react-native"
import { SplashScreen, usePathname } from "expo-router"

import { Dropdown, OrganizationInfo } from "@/shared/components"
import { useGetAllPublicBuidersQuery } from "@/store/services/buildersApi"
import { useGetAllPublicBuildingsQuery } from "@/store/services/buildingsApi"

import { Builders } from "./_components/builders"
import { Buildings } from "./_components/buildings"
import { CallBackForm } from "./_components/callBack"
import { MainProjectBanner } from "./_components/mainProjectBanner"
import { style } from "./_style"

const TEXT1 =
  "Модерн Хайтс - інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та зручне місцерозташування задля створення прекрасного життєвого простору."

SplashScreen.preventAutoHideAsync()

export const Main = () => {
  const path = usePathname()

  const { data: buildingsData, isFetching: isBuildingsDataLoading } =
    useGetAllPublicBuildingsQuery("", {
      skip: path !== "/"
    })

  const { data: buildersData } = useGetAllPublicBuidersQuery("", {
    skip: path !== "/"
  })

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={style.mainContainer}
    >
      <Dropdown />
      <MainProjectBanner text={TEXT1} />
      <Buildings data={buildingsData} isLoading={isBuildingsDataLoading} />
      <Builders data={buildersData} />

      <CallBackForm />
      <OrganizationInfo />
    </ScrollView>
  )
}
