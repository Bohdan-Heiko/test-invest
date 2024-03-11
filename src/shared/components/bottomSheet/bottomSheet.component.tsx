import { forwardRef, useCallback, useMemo, useRef } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet"
import { colors } from "@/utils/constants/colors"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export type Ref = BottomSheet

interface CustomBottomSheetProps {
  children?: JSX.Element
}

const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>((props, ref) => {
  const initialSnapPoints = useMemo(() => ["10%"], [])
  const insets = useSafeAreaInsets();

  const renderBackdrop = useCallback(
    (props: any) => (
      console.log(props),
      (<BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />)
    ),
    []
  )

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={initialSnapPoints}
      enableDynamicSizing={true}
      enablePanDownToClose={true}
      topInset={insets.top}
      handleIndicatorStyle={{ backgroundColor: colors.silver }}
      backgroundStyle={{ backgroundColor: colors.white }}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={{ paddingHorizontal: 20 }}>
        {props.children}
      </BottomSheetView>
    </BottomSheet>
  )
})

export default CustomBottomSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center"
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20
  }
})
