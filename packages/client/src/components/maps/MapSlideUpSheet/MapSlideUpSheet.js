/* eslint-disable react/prop-types */
import ResultSorter from '@components/search/ResultSorter/ResultSorter'
import SearchBar from '@components/search/SearchBarView'
import SearchView from '@components/search/SearchView/SearchView'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel'

const { height } = Dimensions.get('window')

class MapSlideUpSheet extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={{ top: height / 1.15, bottom: 120 }}
          animatedValue={this._draggedValue}
          showBackdrop={true}
        >
          <View style={styles.panel}>
            <TouchableOpacity onPress={() => this._panel.show()}>
              <View aria-label='SearchPanel' style={styles.panelHeader}></View>
            </TouchableOpacity>
            <View style={styles.container}>
              <SearchBar />
              <ResultSorter />
              <SearchView navigation={this.props.navigationProp} />
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
