import { ScrollView, View } from "react-native"
import { FC } from "react"

import { useAuthContext } from "@/context/auth.context"
import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { BuidersResponse, TransformedData } from "@/types"

import { style } from "../_style"

interface IProps {
  data: TransformedData<BuidersResponse> | undefined
}

export const Builders: FC<IProps> = ({ data }) => {
  const { handlePushRoute } = useAuthContext()

  return (
    <View style={style.ourProjectsContainer}>
      <Title style={style.ourProjectTitle}>Наші забудовники</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {data?.data?.map(({ id, description, title, photos }) => (
            <ProjectItem
              key={id}
              title={title}
              text={description}
              imageUri={photos.contentUrl}
              handlePress={() => handlePushRoute("/(tabs)/payment")}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
