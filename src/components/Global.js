import React from 'react'
import CONST from '../includes/Constants'
import fn from '../includes/Functions'
import { View, StyleSheet } from 'react-native'

/**
 * Gives padding to the whole UI (on iOS) from the top to give space for
 * StatusBar on iOS platform.
 * 
 * @param   Object  children        The child elements.
 * @param   boolean useStatusBar    Set to true to use color
 * 
 * @since   1.0
 */
const Global = ({ children, statusBarBackground = null, barStyle = 'dark-content' }) => {
    let { statusBar, mainContainer } = styles;

    if ( typeof statusBarBackground !== null ){
        statusBar = [
            statusBar,
            { backgroundColor: statusBarBackground }
        ];

        return (
            <View style={{ flex: 1, backgroundColor: CONST.BASE }}>
                { fn.setStatusBar(statusBarBackground, barStyle) }
                <View style={ statusBar } />
                { children }
            </View>
        );
    } else {
        if ( CONST.IS_ANDROID && statusBarBackground == CONST.YELLOW )
            backgroundColor = CONST.YELLOW_DARK;

        return (
            <View style={ mainContainer }>
                { fn.setStatusBar(statusBarBackground, barStyle) }
                { children }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 20,
        backgroundColor: CONST.YELLOW,
    },

    mainContainer: {
        flex: 1,
        marginTop: CONST.IS_IOS ? 20 : 0,
        backgroundColor: CONST.IS_IOS ? CONST.BASE : '#F5F5F5'
    }
});

export { Global };
