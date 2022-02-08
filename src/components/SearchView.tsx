import React, {useState} from "react"
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import Business from '../typings/types'
import SearchItem from './Search_Components/SearchItem'

const TEST_BUSINESSES_DATA: Business[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    businessName: 'Starbucks Coffee',
    distance: '1.2',
    futureProofRating: 75,
    userRating: 62,
    logoURL: '../../assets/icon.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    businessName: 'Costa Coffee',
    distance: '1.3',
    futureProofRating: 88,
    userRating: 40,
    logoURL: '../../assets/icon.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    businessName: 'Pret A Manger',
    distance: '1.5',
    futureProofRating: 85,
    userRating: 38,
    logoURL: '../../assets/icon.png'
  }
];

const SearchView = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderSearchItem = ({ item } : { item : Business}) => (
    <SearchItem
      business={item}
      onPress={() => {
        setSelectedId(item.id)

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