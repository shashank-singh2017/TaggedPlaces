import React from 'React';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity style={styles.viewBoxWrapper} onPress={props.onItemPressed}>
        <View style={styles.listitem}>
            <Text>{props.placename}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listitem: {
        width: "100%",
        backgroundColor: "gray",
        height: 25,
        paddingTop: 4,
        paddingLeft: "4%",
        marginTop: 5,
        borderRadius: 5
    },
    viewBoxWrapper: {
        width: "90%"
    }
});

export default ListItem;
