import {
    Image,
    Text,
    View,
    StatusBar,
    TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/core';

/**
 * 通用标题栏
 * @param props bgColor:背景色；title：标题名; moreInfo:更多按钮回调函数; nav：导航器
 * @returns {*}
 * @constructor
 */
export function AppTitleBar(props) {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: props.bgColor,
            height: 50,
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 20,
        }}>
            <TouchableNativeFeedback
                onPress={() => {
                    props.nav.goBack();
                    // props.moreInfo(props.nav);
                }}
            >
                <Image
                    source={require('./image/icon_left_black_01.png')}
                    style={{width: 20, height: 20}}
                />
            </TouchableNativeFeedback>

            <Text style={{flex: 1, color: '#515151', fontSize: 16, marginLeft: 10}}>{props.title}</Text>

            <TouchableNativeFeedback
                onPress={() => {
                    props.moreInfo(props.nav);
                }}
            >
                <Image source={require('./image/icon_more_black.png')} style={{width: 20, height: 20}}/>
            </TouchableNativeFeedback>
        </View>
    );
}

export function FocusAwareStatusBar(props) {
    const isFocus = useIsFocused();
    return isFocus ? <StatusBar {...props} /> : null;
}
