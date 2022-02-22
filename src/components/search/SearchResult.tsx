import BusinessLogo from "@components/Search/BusinessLogo";
import SearchItemStats from "@components/Search/SearchItemStats";
import { DisplayableBusiness } from "@futureproof/typings";
import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

<<<<<<< HEAD
const SearchResult = ({
  business,
  onPress,
}: {
  business: DisplayableBusiness;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.searchItemStyle}>
    {business.profilePicture ? (
      <BusinessLogo profilePicture={business.profilePicture} />
    ) : null}
    <SearchItemStats business={business} />
=======
interface ComponentProps {
  business : DisplayableBusiness,
  onPress : (event : GestureResponderEvent) => void
}

const SearchResult = ({ business, onPress } : ComponentProps ) => (
  <TouchableOpacity onPress={onPress} style={styles.searchItemStyle}>
    {/* Don't use null check built in BusinessLogo to match design */}
    {business.profilePicture
      ? <BusinessLogo profilePicture={business.profilePicture}/>
      : null}
    <SearchItemStats {...business}/>
>>>>>>> origin/sprint-2
  </TouchableOpacity>
);

const styles = StyleSheet.create({
<<<<<<< HEAD
  searchItemStyle: {
    backgroundColor: "#FAF9F9",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 25,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  logoContainerViewStyle: {
    paddingRight: 10,
  },
  logoStyle: {
    width: 58,
    height: 58,
  },
});

export default SearchResult;
=======
  logoContainerViewStyle : {
    paddingRight : 10
  },
  logoStyle : {
    height : 58,
    width : 58
  },
  searchItemStyle : {
    alignItems : 'center',
    backgroundColor : '#FAF9F9',
    borderRadius : 10,
    flexDirection : 'row',
    marginHorizontal : 25,
    marginVertical : 10,
    padding : 12
  }
})

export default SearchResult
>>>>>>> origin/sprint-2
