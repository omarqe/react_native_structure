import App from './src/App';
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Class RCTCxxModule',
    'Remote debugger is in a background tab',
    'Task orphaned for request',
    'Warning: Can\'t call setState (or forceUpdate) on an unmounted component.',
    'Warning: Cannot update during an existing state transition',
    'Native TextInput',
    'Warning: Overriding previous layout animation with new one before the first began:',
    'Attempted to invoke',
    'Warning: Failed child context type:'
]);

AppRegistry.registerComponent(appName, () => App);
