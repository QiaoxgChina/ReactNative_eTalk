import {Image, Text, View, StatusBar} from 'react-native';
import React from 'react';
import * as ColorUtils from '../utils/ColorUtil';
import {useIsFocused} from '@react-navigation/core';

export function MainTitleBar(props) {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: props.bgColor,
            height: 50,
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
        }}>
            <Text style={{flex: 1, color: 'white', fontSize: 16, fontWeight: 'bold'}}>{props.title}</Text>

            <Image source={require('../image/icon_search_03.png')} style={{width: 18, height: 18}}/>
            <Image source={require('../image/icon_add.png')} style={{width: 18, height: 18, marginLeft: 10}}/>
        </View>
    );
}

export function FocusAwareStatusBar(props) {
    const isFocus = useIsFocused();
    return isFocus ? <StatusBar {...props} /> : null;
}
