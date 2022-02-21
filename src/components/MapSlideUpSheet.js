import React from 'react'
import { View, StyleSheet, Button, Text, Dimensions, TouchableHighlight } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'
import SearchBar from '@components/SearchBarView'
import SearchView from '@components/SearchView'

const {height} = Dimensions.get('window')

class MapSlideUpSheet extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height / 1.15, bottom: 140}}
          animatedValue={this._draggedValue}
          showBackdrop={true}>
          <View style={styles.panel}>
            <TouchableHighlight onPress={() => this._panel.show()}>
              <View style={styles.panelHeader} >
              </View>
            </TouchableHighlight>
            <View style={styles.container}>
              <SearchBar/>
              <SearchView/>
            </View>
          </View>
        </SlidingUpPanel>
      </React.Fragment>
    )
  }
  
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  panelHeader: {
    height: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
})

export default MapSlideUpSheet