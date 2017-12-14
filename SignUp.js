'use strict';
import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, TouchableOpacity, Button, Modal } from 'react-native';

export default class SignUp extends React.Component {
    
    render() {
        return (
            <Modal animationType = {"slide"} transparent = {false} visible = {this.state.modalVisible} onRequestClose = {() => { console.log("Modal has been closed.") } }>
                <View style={styles.outerView}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Sign up</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({

    outerView: {
        backgroundColor: "#4ba38d",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 70,
        fontWeight: "600",
        color: "white",
    },
    
});
