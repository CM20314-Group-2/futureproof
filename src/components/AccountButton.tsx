import React from 'react';
import {View, StyleSheet, useWindowDimensions, Platform} from 'react-native';

const AccountButton = () => {

    const screenWidth  = useWindowDimensions().width

    return (
        <React.Fragment>
            <View style={[styles.circleInside, {marginLeft: screenWidth-80}]}>
                <View style={styles.circleHead}/>
                <View style={styles.ovalBody}/>
            </View>
        </React.Fragment>
        
    )



}


const styles = StyleSheet.create({
    circleInside: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "white",
        ...Platform.select({
            ios: {
                marginTop: 10,
            },
            android: {
                marginTop: 70,
            }
          }),
        borderWidth: 7.5,
        borderColor: "black",
    },
    circleHead: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: "black",
        marginTop: 5,
        marginLeft: 15
    },
    ovalBody: {
        width: 30,
        height: 20,
        borderRadius: 30 / 2,
        backgroundColor: "black",
        marginTop: 5,
        marginLeft: 7.5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transform: [{ scaleY: 1.2 }],
        
    },
  })
  
  export default AccountButton