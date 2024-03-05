import { ActivityIndicator, ScrollView, View } from "react-native"
import { useMemo, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import { useTranslation } from "react-i18next"

import { Pagination } from "@/shared/components"
import { useGetOnePublicBuildingQuery } from "@/store/services/buildingsApi"
import { colors } from "@/utils/constants/colors"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { ProjectCards } from "./_components/projectCards"
import { ProjectInformation } from "./_components/projectInformation"
import { ProjectReports } from "./_components/projectReports"
import { ProjectTeams } from "./_components/projectTeams"
import { style } from "./_style"

const PAGE_SIZE = 5

const Project = () => {
  const { t } = useTranslation("project")
  const { slug: buildingId } = useLocalSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  const { data: projectData } = useGetOnePublicBuildingQuery(buildingId as string, {
    skip: !buildingId
  })

  const currentBuildingReportsData = useMemo(() => {
    if (!projectData?.buildingReports) return
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE
    const lastPageIndex = firstPageIndex + PAGE_SIZE
    return projectData.buildingReports.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, projectData])

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      {!projectData ? (
        <ActivityIndicator size={"large"} color={colors.blue} />
      ) : (
        <View style={style.mainContainer}>
          <ProjectCards t={t} data={projectData.photos} status={projectData.status} />

          <ProjectInformation
            title={projectData.title}
            description={projectData.description}
            additionalInformation={[
              {
                title: t("Тривалість інвестування"),
                text: datesHelpers.dateFormated(projectData.duration, "DD.MM.YYYY")
              },
              { title: t("Ціна за 1 кв. м."), text: `${projectData.price}$` }
            ]}
          />
          <ProjectInformation
            title={t("Місцезнаходження")}
            description={projectData.location}
            titleStyle={style.title}
          />
          <ProjectInformation
            title={t("Інфраструктура")}
            description={projectData.infrastructure}
            titleStyle={style.title}
          />

          <ProjectInformation
            title={t("Безпека та комфорт")}
            description={projectData.safety}
            titleStyle={style.title}
          />
          <ProjectTeams t={t} data={projectData.team ?? null} />
          <ProjectReports
            t={t}
            data={currentBuildingReportsData ?? null}
            buildingId={buildingId as string}
          />
          <Pagination
            pageSize={PAGE_SIZE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCount={projectData.buildingReports?.length ?? 0}
          />
        </View>
      )}
    </ScrollView>
  )
}

export default Project
