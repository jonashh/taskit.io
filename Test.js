'use strict';
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

export default class Test extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    
    test = () => {
        console.log("Hejsa");
        this.setState({toggle: true});
    }
    
    render() {
        return (
            <View style={styles.container}>
                 <TextInput 
                  style={[styles.textInput, this.state.toggle && styles.textInputAlt]}  
                /> 
                <TouchableHighlight
                  onPress={this.test}
                  style={styles.button}>
                  <Text style={styles.buttonText}>
                    Go
                  </Text>
                </TouchableHighlight>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textInput: {
    borderColor: '#000',
    borderWidth: 2.0,
    backgroundColor: '#fff',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 30,
    padding: 2,
    width: 100
  },
  textInputAlt: {
    borderColor: '#e71636',
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
    
});
