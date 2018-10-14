import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
    return (
        <ScrollView style={styles.viewBox}>
            {props.places.map((place, i) => {
                return <ListItem key={i} placename={place} onItemPressed={() => props.onItemPressed(i)} />;
            })}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    viewBox: {
        width: "90%",
        marginTop: "2%"
    }
});

export default placeList;
