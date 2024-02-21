import usePagination from "@/hooks/usePagination"
import { ItemText, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import { FC } from "react"
import { Pressable, StyleSheet, View } from "react-native"

interface IProps {
  totalCount: number
  currentPage: number
  pageSize: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination: FC<IProps> = ({
  currentPage,
  pageSize = 25,
  totalCount,
  setCurrentPage
}) => {
  if (!totalCount || totalCount === 1) return

  const paginationRange = usePagination({
    pageSize,
    totalCount,
    currentPage,
    siblingCount: 1
  })

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1]
  return (
    <View style={[style.paginationContainer, {
      justifyContent: totalCount / pageSize >= 5 ? 'space-between' : 'flex-start',
      gap: totalCount / pageSize <= 5 ? 10 : 0
    }]}>
      {/* ARRORW */}
      <Pressable
        onPress={() => setCurrentPage(currentPage - 1)}
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
            onPress={() => setCurrentPage(pageNumber as number)}
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
        onPress={() => setCurrentPage(currentPage + 1)}
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
    // gap: 11,
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
