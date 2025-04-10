import { StatusBar } from 'expo-status-bar'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Routes from './src/routes'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <StatusBar style="light" />
        <Routes />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    paddingHorizontal: 10,
  },
  mainContainer: {
    flex: 1,
  },
})
