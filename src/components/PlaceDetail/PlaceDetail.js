import React from 'react';
import { Modal, Text, View, Button, Image, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {

    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={ props.selectedPlace.image } style={styles.modalImage}/>
                <Text style={styles.modalText}>{ props.selectedPlace.value }</Text>
            </View>
        );
    }

    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">

            <View style={styles.modalContainer}>

                {modalContent}

                <View>
                    <Button title="Delete" color="red" onPress={() => props.onItemDeleted(props.selectedPlace.key)}/>
                    <Button title="Cancel" color="blue" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 40
    },
    modalImage: {
        width: "100%",
        height: 200
    },
    modalText: {
        fontWeight: "700",
        fontSize: 18,
        textAlign: "center"
    }
})

export default PlaceDetail;
