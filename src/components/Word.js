import React from 'react'
import CONST from '../includes/Constants'
import { Text, StyleSheet } from 'react-native'
import _ from 'lodash'

const Word = props => {
    var { textStyle } = styles;
    var { children, style, markdown = false } = props;

    if ( typeof style !== 'undefined' )
        textStyle = [textStyle, style];
        
    var actualProps = _.omit(props, ['children', 'style', 'markdown']);

    if ( true === markdown ){
        if ( typeof style !== 'undefined' ){
            markdownStyle = [markdownStyle, style];
        }

        return (
            <Markdown styles={ markdownStyle } {...actualProps}>{ children }</Markdown>
        );
    } else {
        return (
            <Text style={ textStyle } {...actualProps}>{ children }</Text>
        );
    }
}

var markdownStyle = StyleSheet.create({
    text: {
        color: CONST.FONT_COLOR,
        fontSize: CONST.FONT_SIZE
    }
});

var styles = StyleSheet.create({
    textStyle: {
        color: CONST.FONT_COLOR,
        fontSize: CONST.FONT_SIZE,
    }
});

export { Word };
