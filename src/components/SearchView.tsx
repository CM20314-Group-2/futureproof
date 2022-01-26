import React from "react"
import { SafeAreaView, View, FlatList, Text, StyleSheet } from "react-native"

const TEST_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    businessName: 'Starbucks Coffee',
    distance: '1.2'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    businessName: 'Costa Coffee',
    distance: '1.3'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    businessName: 'Pret A Manger',
    distance: '1.5'
  }
];

const SearchItemView = ({ businessName, distance }: {businessName: String, distance: String}) => (
  <View
    style={{
      backgroundColor: '#FAF9F9',
      flexDirection: "column",
      height: 100,
      padding: 20
    }}
  >
    <Text style={styles.businessTitleText}>{businessName}</Text>
    <Text>{distance + "miles"}</Text>
    <Text>FutureProof Rating:</Text>
    <Text>User Rating:</Text>
  </View>
)

const SearchView = () => {
  const renderSearchItem = ({ item }) => {
    return (
      <SearchItemView
      businessName={item.businessName}
      distance={item.distance}
      />
    )
  };

  return (
    <SafeAreaView style={styles.searchList}>
      <FlatList
        data={TEST_DATA}
        renderItem={renderSearchItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    backgroundColor: '#FAF9F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchList: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  businessTitleText: {
    fontSize: 34
  },
  subtitleText: {
    fontSize: 20
  }
})

export default SearchView