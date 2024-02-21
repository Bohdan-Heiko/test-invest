import usePagination from "@/hooks/usePagination"
import { ItemText, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import { FC } from "react"
import { Pressable, StyleSheet, View } from "react-native"

interface IProps {
  totalCount: number
  currentPage: number
  pageSize: number
}

export const Pagination: FC<IProps> = ({ currentPage, pageSize = 25, totalCount }) => {
  const paginationRange = usePagination({
    pageSize,
    totalCount,
    currentPage,
    siblingCount: 1
  })

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1]
  return (
    <View style={style.paginationContainer}>
      {/* ARRORW */}
      <Pressable
        disabled={currentPage === 1}
        style={({ pressed }) => [
          style.paginationItemContainer,
          {
            borderColor: pressed ? colors.blue : style.paginationItemContainer.borderColor
          }
        ]}
      >
        <VectorExpoIcons
          size={20}
          name="arrowleft"
          type={"AntDesign"}
          color={currentPage === 1 ? colors.alto : colors.dove_graya}
        />
      </Pressable>
      {/* ARRORW */}

      {/* NUMBERS */}
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === "DOTS") {
          return (
            <View key={pageNumber} style={style.paginationItemContainer}>
              <ItemText style={{ color: colors.dove_graya }}>...</ItemText>
            </View>
          )
        }

        return (
          <Pressable
            key={pageNumber}
            style={({ pressed }) => [
              style.paginationItemContainer,
              pageNumber === currentPage && style.active,
              {
                borderColor: pressed
                  ? colors.blue
                  : style.paginationItemContainer.borderColor
              }
            ]}
          >
            <ItemText
              style={{
                color: pageNumber === currentPage ? colors.white : colors.dove_graya
              }}
            >
              {pageNumber}
            </ItemText>
          </Pressable>
        )
      })}
      {/* NUMBERS */}

      {/* ARRORW */}
      <Pressable
        disabled={currentPage === lastPage}
        style={({ pressed }) => [
          style.paginationItemContainer,
          {
            borderColor: pressed ? colors.blue : style.paginationItemContainer.borderColor
          }
        ]}
      >
        <VectorExpoIcons
          size={20}
          type={"AntDesign"}
          name="arrowright"
          color={currentPage === lastPage ? colors.alto : colors.dove_graya}
        />
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  paginationContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  paginationItemContainer: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.alto
  },

  active: {
    backgroundColor: colors.blue,
    color: colors.blue,
    borderColor: colors.blue,
    opacity: 0.7
  }
})
