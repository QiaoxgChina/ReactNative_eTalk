/**
 * Sample React Native app
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './app/splash/SplashScreen';
import {MainScreen} from './app/main/MainScreen';
import ChatRoomScreen from './app/main/home/ChatRoomScreen';
import {FriendInfoScreen} from './app/main/friend/FriendInfoScreen';

const AppStack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator  mode="modal"  headerMode="none">
                <AppStack.Screen
                    name='splash'
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <AppStack.Screen
                    name='main'
                    component={MainScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <AppStack.Screen
                    name='chatRoom'
                    component={ChatRoomScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <AppStack.Screen
                    name='friendInfo'
                    component={FriendInfoScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
