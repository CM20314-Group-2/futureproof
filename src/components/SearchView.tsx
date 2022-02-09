import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import {Business} from '@typings/types'
import SearchItem from './Search_Components/SearchItem'

var TEST_BUSINESSES_DATA: Business[] = []

const SearchView = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderSearchItem = ({ item } : { item : Business}) => (
    <SearchItem
      business={item}
      onPress={() => {
        //setSelectedId(item.id)
      }}
    />
  );
  return (
    <SafeAreaView style={styles.searchList}>
      <FlatList
        data={TEST_BUSINESSES_DATA}
        renderItem={renderSearchItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchList: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default SearchView