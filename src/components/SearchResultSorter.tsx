import React, {useState} from "react"
import { Alert, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native"
import Button from "./Button"
import SortOptions from "./SortOptions"

const sortOptions = [
    { label: "Name: A to Z", value: "name_asc" },
    { label: "Name: Z to A", value: "name_desc" },
    { label: "Distance: Near to Far", value: "distance_asc" },
    { label: "Distance: Far to Near", value: "distance_desc" },
    { label: "Rating: High to Low", value: "rating_asc" },
    { label: "Rating: Low to High", value: "rating_desc" }
];

const INITIAL_OPTION_INDEX = 4;

const SearchResultSorter = () => {
    const [sortOption, setSortOption] = useState<string | null>(sortOptions[INITIAL_OPTION_INDEX].value);

    return (
        <View style={styles.view}>
            <View style={styles.background}></View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Sort Results</Text>
                <SortOptions
                    options={sortOptions}
                    initial={INITIAL_OPTION_INDEX}
                    onChange={(value: React.SetStateAction<string | null>) => {
                        setSortOption(value);
                        // potentially extract options for query
                    }}
                />
                <Button onPress={ () => {Alert.alert("" + sortOption)} /* perform query and maybe hide menu */}/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: Platform.OS === "android" ? 35 : 0
    },
    title: {
        fontSize: 25,
        marginTop: 20
    },
    view: {
        flex: 1,
        justifyContent: "flex-end"
    }
});

export default SearchResultSorter
