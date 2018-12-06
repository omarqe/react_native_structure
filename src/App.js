import React, { Component } from 'react'
import ReduxThunk from 'redux-thunk'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// Redux Persist
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import CONST from './includes/Constants'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'
import RootNavigator from './RootNavigator'
import * as func from './includes/Functions'

const persistConfig = {
    key: 'root',
    // blacklist: ['message'],
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export default class App extends Component {
    constructor(props) {
        super(props);

        // Set global variables
        global.func = func;
        global.CONST = CONST;
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        );
    }
}