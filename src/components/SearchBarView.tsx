import * as React from 'react';
import { SafeAreaView, View, StyleSheet} from "react-native"
import { Icon, Input } from 'react-native-elements';

const SearchBar = () => {
    const [value, onChangeText] = React.useState('');

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


