import React, { Component } from 'react'
import CONST from '../includes/Constants'
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import Shimmer from 'react-native-shimmer'
import _ from 'lodash'

class Photo extends Component {
    render() {
        var props = this.props;
        var { style, shimmer = true, borderRadius } = props;
        var { placeholder, width, shimmerStyle } = styles;

        if ( typeof style !== 'undefined' ){
            placeholder = [placeholder, style];
            shimmerStyle = [shimmerStyle, style];
        } else if ( typeof width !== 'undefined' ){
            placeholder = [placeholder, { width: width }];
            shimmerStyle = [shimmerStyle, { width: width }];
        }

        // Add borderRadius
        if ( typeof borderRadius !== 'undefined' ){
            shimmerStyle = [shimmerStyle, { borderRadius }]
            placeholder = [placeholder, { borderRadius }];
            style = [style, { borderRadius }];
        }

        if ( shimmer === false ){
            return (
                <View style={ placeholder }>
                    <ActivityIndicator size='small' style={ styles.loading } />
                    <AutoHeightImage {...props} />
                </View>
            );
        } else {
            return (
                <View style={ placeholder }>
                    <Shimmer style={[placeholder, {position: 'absolute'}]} endFadeDuration={3}>
                        <Image style={ shimmerStyle } />
                    </Shimmer>

                    <AutoHeightImage {...props} />
                </View>
            );
        }
    }
};

const styles = StyleSheet.create({
    shimmerStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#cfcfcf',
    }, 

    placeholder: {
        // alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: CONST.BASE,
    },

    loading: {
        position: 'absolute',
        alignSelf: 'center'
    }
});

export { Photo };