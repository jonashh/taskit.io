'use strict';
import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, TouchableOpacity, Button, Modal, KeyboardAvoidingView, Alert } from 'react-native';

export default class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            signUpVisible: false,
            signUpEmail: "",
            signUpPassword: "",
            signUpPasswordRepeat: "",
            signUpErrors: false,
            signUpMailError: false,
            signUpPasswordError: false,
            signUpPasswordRepeatError: false,
            message: ""
        };
    }
        
    _toggleSignUp = () => {
        
        if(this.state.signUpVisible) {
            this.setState({ signUpVisible: false });
        } else {
            this.setState({ signUpVisible: true });
        }
        
    };
    
    _doSignup = () => {
        
        console.log(this.state.signUpEmail);
        console.log(this.state.signUpPassword);
        console.log(this.state.signUpPasswordRepeat);
          
    };
    
    _validateEmail = (email) => {
        
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        if(reg.test(email) === false) {
            return false;
        } else {
            return true;
        }
        
    }
    
    _checkSignUp = () => {
        
        this.state.message = "";
        this.state.signUpErrors = false;
        
        if(!this._validateEmail(this.state.signUpEmail)) {
            this.state.message += "Please enter a valid email\n";
            this.setState({ signUpMailError: true });
            this.state.signUpErrors = true;
        } else {
            this.setState({ signUpMailError: false });
        }
        
        if(this.state.signUpPassword == "") {
            this.state.message += "Please enter a password";
            this.setState({ signUpPasswordError: true });
            this.state.signUpErrors = true;
        } else if(this.state.signUpPassword != this.state.signUpPasswordRepeat) {
            this.state.message += "Please enter matching passwords";
            this.setState({ signUpPasswordRepeatError: true });
            this.state.signUpErrors = true;
        }
        
        if(this.state.signUpErrors === false) {
            this._doSignup();   
        }
        
    }
    
    render() {
        
        return (
            <View style={styles.outerView}>
                <StatusBar barStyle="light-content" />
                <Modal visible={this.state.signUpVisible} animationType = {"slide"} transparent = {true}>
                    <KeyboardAvoidingView behavior="padding" style={styles.signUpView}>
                        <Text style={styles.signUpTitle}>Sign up</Text>
                        {this.state.signUpErrors &&
                            <Text style={styles.validateErrors}>{this.state.message}</Text>
                        }
                        <TextInput
                            style={[styles.signUpInput, this.state.signUpMailError && styles.error]}
                            placeholder="Email"
                            value={this.state.signUpEmail}
                            placeholderTextColor="rgba(255, 255, 255, .5);"
                            onChangeText={signUpEmail => this.setState({signUpEmail})}
                            returnKeyType="next"
                            ref={(input) => this.emailInput = input}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput
                            style={[styles.signUpInput, this.state.signUpPasswordError && styles.error]}
                            placeholder="Password"
                            placeholderTextColor="rgba(255, 255, 255, .5);"
                            onChangeText={signUpPassword => this.setState({signUpPassword})}
                            secureTextEntry
                            returnKeyType="next"
                            ref={(input) => this.passwordInput = input}
                            onSubmitEditing={() => this.passwordRepeatInput.focus()}
                        />
                        <TextInput
                            style={[styles.signUpInput, this.state.signUpPasswordRepeatError && styles.error]}
                            placeholder="Repeat password"
                            placeholderTextColor="rgba(255, 255, 255, .5);"
                            onChangeText={signUpPasswordRepeat => this.setState({signUpPasswordRepeat})}
                            secureTextEntry
                            returnKeyType="go"
                            ref={(input) => this.passwordRepeatInput = input}
                        />
                        <TouchableOpacity style={styles.signUpButton} onPress={this._checkSignUp}>
                            <Text style={styles.signUpButtonText}>Sign up</Text>
                        </TouchableOpacity>
                        <Button onPress={this._toggleSignUp} title="Cancel" color="rgba(255, 255, 255, .7)" />
                    </KeyboardAvoidingView>
                </Modal>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Task<Text style={styles.opacity}>it</Text>.io</Text>
                    <Text style={styles.subtitle}>Simple Task Manager</Text>
                </View>
                <View style={styles.loginFormView}>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Password" />
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <Button onPress={this._toggleSignUp} title="Sign up" color="white" />
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
    signUpView: {
        backgroundColor: "rgba(0, 0, 0, .9)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
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
        backgroundColor: "rgba(255, 255, 255, .5);",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: "stretch",
    },
    signUpInput: {
        backgroundColor: "rgba(255, 255, 255, .2);",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: "stretch",
        color: "white"
    },
    loginButton: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        marginBottom: 20,
        alignSelf: "stretch"
    },
    loginButtonText: {
        fontSize: 18,
        color: "#4ba38d",
        fontWeight: "700"
    },
    signUpTitle: {
        fontSize: 32,
        alignSelf: "stretch",
        color: "white",
        fontWeight: "600",
        marginBottom: 20,
        textAlign: "center"
    },
    signUpButton: {
        backgroundColor: "#4ba38d",
        alignItems: "center",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        marginBottom: 20,
        alignSelf: "stretch"
    },
    signUpButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "700"
    },
    error: {
        backgroundColor: "rgba(255, 59, 48, .7)",
    },
    validateErrors: {
        color: "white",
        textAlign: "left",
        alignSelf: "stretch",
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 20
    }
});
