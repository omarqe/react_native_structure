import React from 'react'
import { NavigationActions } from 'react-navigation'
import { showLocation } from 'react-native-map-link'
import { Alert, StatusBar, Platform, Linking } from 'react-native'
import CONST from './Constants'
import call from 'react-native-phone-call'

export default {
    alert( title, message ) {
        Alert.alert( title, message );
    },

    renderif( condition, component, otherwise = null ) {
        return condition ? component : otherwise;
    },

    setStatusBar( backgroundColor = CONST.YELLOW_DARK, barStyle = 'dark-content' ) {
        if ( CONST.IS_ANDROID ){
            return (
                <StatusBar backgroundColor={ backgroundColor } barStyle={ barStyle } />
            );
        } else {
            return (
                <StatusBar barStyle={ barStyle } />
            );
        }
    },

    openLocation( lat = CONST.CONTACT_INFO.LATITUDE, lng = CONST.CONTACT_INFO.LONGITUDE, label = CONST.CONTACT_INFO.COMPANY_NAME ) {
        if ( CONST.IS_ANDROID ){
            const scheme = Platform.select({ ios:'maps:0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `${lat},${lng}`;
            const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`
            });

            Linking.openURL(url);
        } else {
            showLocation({
                title: label,
                latitude: lat,
                longitude: lng,
                appsWhiteList: [
                    'google-maps',
                    'apple-maps',
                    'waze'
                ],
            });
        }
    },

    openFacebook( pageID = CONST.CONTACT_INFO.FB_PAGEID ){
        var appURL = `fb://page/${pageID}`;
        var browserURL = `https://fb.com/${pageID}`;

        Linking.canOpenURL(appURL)
        .then(supported => {
            Linking.openURL(supported ? appURL : browserURL);
        })
        .catch(e => console.log('An error has occured.', e));
    },

    call( number ){
        const args = {
            number,
            prompt: true,
        }

        call(args).catch(e => console.log('An error has occred.', e));
    },

    goBack( props ) {
        if ( typeof props.navigation === 'undefined' )
            return false;

        return props.navigation.dispatch(NavigationActions.back());
    },
}