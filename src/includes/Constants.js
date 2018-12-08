import { Dimensions, Platform } from 'react-native'
import { displayName } from '../../app.json'

export default {
    RED: '#D13E3E',
    BASE: '#F0F2F4',
    GREEN: '#519F67',
    YELLOW: '#F7AA00',
    PURPLE: '#755DA3',
    DARK_BLUE: '#455D7A',
    YELLOW_DARK: '#E69F00',
    GREEN_DARK: '#52815F',
    GREEN_DARKEST: '#446E5C',
    WHITE: '#FFFFFF',

    APP_NAME: displayName,
    FONT_SIZE: 16,
    FONT_COLOR: '#333333',
    WINDOW_WIDTH: Dimensions.get('window').width,
    WINDOW_HEIGHT: Dimensions.get('window').height,
    CONTENT_WIDTH: Dimensions.get('window').width - 20 * 2,

    IS_IOS: Platform.OS == 'ios',
    IS_ANDROID: Platform.OS == 'android',
}