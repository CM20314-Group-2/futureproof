import { StyleSheet, View } from 'react-native'
import MapView from './components/MapView'

const App = () => {
  return (
    <View style={styles.container}>
      <MapView/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

export default App
