import React from 'React';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity style={styles.viewBoxWrapper} onPress={props.onItemPressed}>
        <View style={styles.listitem}>
            <Image
                source={props.placeImage}
                style={styles.placeImage}
            />
            <Text>{props.placename}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listitem: {
        width: "100%",
        backgroundColor: "gray",
        height: 40,
        paddingLeft: "4%",
        marginTop: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    viewBoxWrapper: {
        width: "90%"
    },
    placeImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        resizeMode: "cover"
    }
});

export default ListItem;
