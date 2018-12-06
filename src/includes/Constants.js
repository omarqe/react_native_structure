import { Dimensions } from 'react-native'
import { displayName } from '../../app.json'

export default {
    COLOR: {
        RED: '#D13E3E',
        BASE: '#F7F7F7',
        GREEN: '#519F67',
        YELLOW: '#F7AA00',
        GREEN_DARK: '#52815F',
        GREEN_DARKEST: '#446E5C'
    },

    APP_NAME: displayName,
    FONT_COLOR: '#333333',
    WINDOW_WIDTH: Dimensions.get('window').width,
    WINDOW_HEIGHT: Dimensions.get('window').height
}