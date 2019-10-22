import {NavigationActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

function navigation(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

export default {
    navigation, 
    setTopLevelNavigator,
};