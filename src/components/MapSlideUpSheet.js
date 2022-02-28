import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'
import SearchBar from '@components/SearchBarView'
import SearchView from '@components/SearchView'
import SearchResultSorter from '@components/SortSearchResults/SearchResultSorter'

const { height } = Dimensions.get('window')

class MapSlideUpSheet extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={{ top: height / 1.15, bottom: 140 }}
          animatedValue={this._draggedValue}
          showBackdrop={true}
        >
          <View style={styles.panel}>
            <TouchableOpacity onPress={() => this._panel.show()}>
              <View aria-label='SearchPanel' style={styles.panelHeader}></View>
            </TouchableOpacity>
            <View style={styles.container}>
              <SearchBar />
              <SearchResultSorter />
              <SearchView />
            </View>
          </View>
        </SlidingUpPanel>
      </React.Fragment>
    )
  }
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  panel: {
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    opacity: 0.95,
    position: 'relative',
  },
  panelHeader: {
    alignSelf: 'center',
    backgroundColor: '#E7E7E7',
    borderRadius: 5,
    height: 5,
    justifyContent: 'center',
    marginTop: 10,
    width: '36%',
  },
})

export default MapSlideUpSheet
