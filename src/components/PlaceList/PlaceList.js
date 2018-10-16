import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
    return (
        <FlatList
            style={styles.viewBox}
            data={props.places}
            renderItem={(info) => (
                 <ListItem
                    placename={info.item.value}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemPressed(info.item.key)}
                />
            )}
        />
    );
};


const styles = StyleSheet.create({
    viewBox: {
        width: "90%",
        marginTop: "2%"
    }
});

export default placeList;
