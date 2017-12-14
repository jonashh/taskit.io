'use strict';
import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.outerView}>
                <StatusBar barStyle="light-content" />
                <View style={styles.titleView}>
                    <Text style={styles.title}>Task<Text style={styles.opacity}>it</Text>.io</Text>
                    <Text style={styles.subtitle}>Simple Task Manager</Text>
                </View>
                <View style={styles.loginFormView}>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
            </View>
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
    opacity: {
        opacity: .6
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "400",
        color: "rgba(255, 255, 255, .6)"
    },
    loginFormView: {
        alignSelf: 'stretch',
        padding: 20
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, .7);",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        borderRadius: 5,
        marginBottom: 10
    }
});
