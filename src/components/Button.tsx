import React from 'react';
import { Pressable, StyleSheet, Text} from 'react-native';

const Button = (props: { onPress: any; title?: string; }) => {
    const { onPress, title = 'Apply' } = props;

    return (
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.button]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "#1ea853",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        paddingTop: 10,
        paddingBottom: 10
    },
});

export default Button