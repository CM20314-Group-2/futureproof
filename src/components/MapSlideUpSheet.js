import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import SearchBar from "@components/SearchBarView";
import SearchView from "@components/SearchView";
import SearchResultSorter from "@components/SortSearchResults/SearchResultSorter";

const { height } = Dimensions.get("window");

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
              <View style={styles.panelHeader}></View>
            </TouchableOpacity>
            <View style={styles.container}>
              <SearchBar />
              <SearchResultSorter />
              <SearchView />
            </View>
          </View>
        </SlidingUpPanel>
      </React.Fragment>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    opacity: 0.95,
    borderRadius: 15,
  },
  panelHeader: {
    height: 5,
    backgroundColor: "#E7E7E7",
    alignSelf: "center",
    justifyContent: "center",
    width: "36%",
    borderRadius: 5,
    marginTop: 10,
  },
  favoriteIcon: {
    position: "absolute",
    top: -24,
    right: 24,
    backgroundColor: "#2b8a3e",
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1,
  },
});

export default MapSlideUpSheet;
