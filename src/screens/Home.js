import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to { CONST.APP_NAME }, Omar!</Text>
                <Text>Screen resolution is { CONST.WINDOW_WIDTH } x { CONST.WINDOW_HEIGHT }</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, actions)(Home);