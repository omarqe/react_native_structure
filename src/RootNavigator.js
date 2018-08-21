import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRootNavigator } from './Router'
import * as actions from './actions'

class RootNavigator extends Component {
    render() {
        const RootNavigator = createRootNavigator();
        return (
            <RootNavigator />
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, actions)(RootNavigator);