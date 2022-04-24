/* eslint-disable react/prop-types */
import ResultSorter from '@components/search/ResultSorter'
import SearchBar from '@components/search/SeachBar'
import SearchView from '@components/search/SearchView'
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
          panelStyle={styles.panel}
        >
          {dragHandler  => (
            <View style={styles.panel}>
              <View {...dragHandler}>
                <TouchableOpacity onPress={() => this._panel.show()}>
                  <View aria-label='SearchPanel' style={styles.panelHandle}></View>
                </TouchableOpacity>
                <SearchBar />
                <ResultSorter buttonTextStyle={styles.buttonStyle}/>
              </View>
              <View style={styles.listContainer}>
                <SearchView navigation={this.props.navigationProp} />
              </View>
            </View>
          )}
        </SlidingUpPanel>
      </React.Fragment>
    )
  }
}

export const styles = StyleSheet.create({

  listContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    flex: 1,
    justifyContent: 'flex-start',
  },
  panel: {
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    flex: 1,
    position: 'relative',
  },
  panelHandle: {
    alignSelf: 'center',
    backgroundColor: '#E7E7E7',
    borderRadius: 5,
    height: 5,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    width: '36%',
  }
})

export default MapSlideUpSheet
