import { ActivityIndicator, ScrollView, View } from "react-native"
import { FC } from "react"
import { useTranslation } from "react-i18next"

import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { BuidersResponse, TransformedData } from "@/types"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

interface IProps {
  data: TransformedData<BuidersResponse> | undefined
  isLoading: boolean
}

export const Builders: FC<IProps> = ({ data, isLoading }) => {
  const { t } = useTranslation("main")

  return (
    <View style={style.ourProjectsContainer}>
      <View style={style.titleContainer}>
        <Title style={style.ourProjectTitle}>{t("Наші забудовники")}</Title>
        {(isLoading || !data) && <ActivityIndicator size={"small"} color={colors.blue} />}
      </View>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {data?.data?.map(({ id, description, title, photos }) => (
            <ProjectItem
              t={t}
              key={id}
              title={title}
              text={description}
              imageUri={photos.contentUrl}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
