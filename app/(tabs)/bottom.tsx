import { useCallback, useMemo, useRef } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"

const BottomExample = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], [])

  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()
  const handleCollapsePress = () => bottomSheetRef.current?.collapse()
  const snapeToIndex = (index: number) => bottomSheetRef.current?.snapToIndex(index)
  const renderBackdrop = useCallback(
    (props: any) => (
      console.log(props),
      (<BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />)
    ),
    []
  )
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Open" onPress={handleOpenPress} />
        <Button title="Close" onPress={handleClosePress} />

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          handleIndicatorStyle={{ backgroundColor: "#fff" }}
          backgroundStyle={{ backgroundColor: "#1d0f4e" }}
          backdropComponent={renderBackdrop}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
            <Button title="Close" onPress={handleClosePress} />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

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

export default BottomExample
