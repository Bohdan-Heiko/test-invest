import { ActivityIndicator, ScrollView, View } from "react-native"
import { useMemo, useState } from "react"
import { useLocalSearchParams } from "expo-router"

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
  const { slug } = useLocalSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  const { data: projectData } = useGetOnePublicBuildingQuery(slug as string, {
    skip: !slug
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
          <ProjectCards data={projectData.photos} status={projectData.status} />

          <ProjectInformation
            title={projectData.title}
            description={projectData.description}
            additionalInformation={[
              {
                title: "Тривалість інвестування",
                text: datesHelpers.dateFormated(projectData.duration, "DD.MM.YYYY")
              },
              { title: "Ціна за 1 кв. м.", text: `${projectData.price}$` }
            ]}
          />
          <ProjectInformation
            title={"Місцезнаходження"}
            description={projectData.location}
            titleStyle={style.title}
          />
          <ProjectInformation
            title={"Інфраструктура"}
            description={projectData.infrastructure}
            titleStyle={style.title}
          />

          <ProjectInformation
            title={"Безпека та комфорт"}
            description={projectData.safety}
            titleStyle={style.title}
          />

          <ProjectTeams data={projectData.team ?? null} />
          <ProjectReports data={currentBuildingReportsData ?? null} />
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
