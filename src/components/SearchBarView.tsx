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
    // Search field
    const [value, onChangeText] = React.useState('');
    
    // Query
    const [executeSearch, {loading, error, data}] = useLazyQuery(
        COMPANY_TILE_DATA
      );


    // MAYBE USE THIS: https://github.com/slorber/awesome-debounce-promise

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
        padding:20,     // Screen padding
        flexDirection: 'column'     // order objets going in the column direction
    },
    searchInput: {
        borderRadius:10,
        borderWidth:2,
        borderColor:'#FFFFFF',  // white border colour
        backgroundColor:'#FFFFFF',  // white background colour
    },
    searchBarView:{
        // Send search bar to the bottom
        marginTop: 'auto',
        marginBottom:'10%',
    }
})

export default SearchBar;


/*
/////////////// USING PROMISES
// Promise; used for query
    const handleReturnedData = () => {
        console.log(data);
    }

    const handleError = () => {
        console.log("An error occured. Maybe it took too long to load?");
    }

    // Debounce query
    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const searchPromise = new Promise((executeSearch) => {
                setTimeout(() => {
                    executeSearch({
                        variables: {String: value}
                    });
                }, 200);
            });
            searchPromise.then(handleReturnedData, handleError);
        }, 400)
      
        return () => clearTimeout(delayDebounceFn)
      }, [value])

*/