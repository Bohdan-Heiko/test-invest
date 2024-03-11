import { forwardRef, useCallback, useMemo, useRef } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"

export type Ref = BottomSheetModal

interface CustomBottomSheetProps {
  children: JSX.Element
}

const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "75%"], [])

  const renderBackdrop = useCallback(
    (props: any) => (
      console.log(props),
      (<BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />)
    ),
    []
  )

  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View style={styles.contentContainer}>
        <Text style={styles.containerHeadline}>Bottom Modal 😎</Text>
      </View>
    </BottomSheetModal>
  )
})

export default CustomBottomSheet

{
  /* <GestureHandlerRootView style={{ flex: 1 }}>
<BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
  <View style={styles.contentContainer}>
    <Text style={styles.containerHeadline}>Bottom Modal 😎</Text>
  </View>
</BottomSheetModal>
</GestureHandlerRootView> */
}

// <GestureHandlerRootView style={{ flex: 1 }}>
//       <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
//         <View style={styles.contentContainer}>
//           <Text style={styles.containerHeadline}>Bottom Modal 😎</Text>
//         </View>
//       </BottomSheetModal>
{
  /* <View style={styles.container}>
        <BottomSheet
          ref={ref}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          handleIndicatorStyle={{ backgroundColor: "#fff" }}
          backgroundStyle={{ backgroundColor: "#1d0f4e" }}
          backdropComponent={renderBackdrop}
        >
          {props.children}
          <View style={styles.contentContainer}>
            <Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
            <Button title="Close" />
          </View>
        </BottomSheet>
      </View> */
}
// </GestureHandlerRootView>

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
