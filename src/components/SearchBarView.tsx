import * as React from 'react';
import { SafeAreaView, View, StyleSheet} from "react-native"
import { Icon, Input } from 'react-native-elements';
import { gql, useLazyQuery} from '@apollo/client'
import * as GetTypes from '../typings/src/ts/types'

// GraphQL fragment
const COMPANY_TILE_DATA = gql` {
    fragment CompanyTile on Business{
        __typename
        id
        name
        profilePicture
        sustainabilityScore
        customerScore
    }
}
`
;


const SearchBar = () => {
    const [value, onChangeText] = React.useState('');
    const [executeSearch, {loading, error, data}] = useLazyQuery(
        COMPANY_TILE_DATA
      );

    // Debounce query
    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          executeSearch({
              variables: {String: value}
          })
          console.log(data)
        }, 400)
      
        return () => clearTimeout(delayDebounceFn)
      }, [value])

    

    const updateSearch = (text : string) => {
        onChangeText(text);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.searchBarView}>
                <Input 
                    inputContainerStyle={styles.searchInput}
                    placeholder='Search here'
                    onChangeText={text => updateSearch(text)}

                    // Search Icon
                    leftIcon = {
                        <Icon
                        name='search'
                        size={25}
                        onPress={() => console.log('Pressed')}
                        />
                    }
                    leftIconContainerStyle = {{marginLeft:'2%'}}

                    // Filter Icon
                    rightIcon = {<Icon
                        name='options-outline'
                        type='ionicon'
                        size={25}
                        onPress={() => console.log('Pressed')}
                        />
                    }
                    value={value}
                />
            </View>
        </SafeAreaView>
        
    );
}; 

const styles = StyleSheet.create({
    safeAreaView: {
        flex:1,
        padding:20,
        flexDirection: 'column'
    },
    searchInput: {
        borderRadius:10,
        borderWidth:2,
        borderColor:'#FFFFFF',
        backgroundColor:'#FFFFFF',
    },
    searchBarView:{
        marginTop: 'auto',
        marginBottom:'10%',
    }
})

export default SearchBar;


/*

// Query 
//      (hasMore field indicates whether there are additional launches beyond the list returned by the server.)
//      (cursor field indicates the client's current position within the list of launches. We can execute the query again and provide our most recent cursor as the value of the $after variable to fetch the next set of launches in the list.)
export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore 
      launches {
        ...LaunchTile
      }
    }
  }
  ${COMPANY_TILE_DATA}
`;

*/