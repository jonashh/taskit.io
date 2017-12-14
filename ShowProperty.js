'use strict';

import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class ShowProperty extends React.Component {
    
    render() {    
    const property = this.props.property;
    
    console.log(property);
    
    return (
        <View style={styles.outerView}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: property.img_url }} />
            </View>
            <View style={styles.container}>
                <Text>{property.title}</Text>
            </View>
        </View>
    );
  }
    
}

const styles = StyleSheet.create({
    outerView: {
        marginTop: 65,
    },
    imageView: {
        alignItems: 'center'
    },
    image: {
        width: 320,
        height: 320,
        marginTop: 30
    },
    container: {
        padding: 30
    }
});