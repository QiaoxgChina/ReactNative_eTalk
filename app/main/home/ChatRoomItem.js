import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
} from 'react-native';
import {chatHistory} from '../../data/ChatRoomData';
import {loginUser} from '../../data/LoginUserData';

export const ChatRoomItem = (item, index, session) => {

    return (
        <View style={{flex: 1, marginTop: 10, marginBottom: 10}}>
            {
                createTimeView(item, index)
            }
            {
                createItemView(item, session)
            }

        </View>);

};

function createTimeView(item, index) {
    if (index === 0) {
        return (<Text style={{alignSelf: 'center', fontSize: 12, color: '#909090'}}>{item.time}</Text>);
    }

    if (item.time !== chatHistory[index - 1].time) {
        return (<Text style={{alignSelf: 'center', fontSize: 12, color: '#909090'}}>{item.time}</Text>);
    } else {
        return null;
    }
}

function createItemView(item, session) {
    if (item.name === loginUser.name) {
        return (RightItem(item));
    } else {
        return (LeftItem(item, session));
    }
}

const RightItem = (item) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 85,
            marginTop: 10,
            marginRight: 15,
            alignSelf: 'flex-end',
        }}>
            <Text style={{
                backgroundColor: '#3399FF',
                borderRadius: 5,
                marginRight: 10,
                paddingLeft: 10,
                paddingTop: 8,
                paddingRight: 10,
                paddingBottom: 8,
                color: 'white',
                lineHeight: 20,
                fontSize: 14,
            }}>{item.content}</Text>

            <Image source={loginUser.icon} style={{width: 35, height: 35, borderRadius: 5}}/>
        </View>);
};

const LeftItem = (item, session) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, marginTop: 10, marginRight: 85}}>
            <Image source={session.avatar} style={{width: 35, height: 35, borderRadius: 5}}/>
            <Text style={{
                backgroundColor: 'white',
                borderRadius: 5,
                marginLeft: 10,
                paddingLeft: 10,
                paddingTop: 8,
                paddingRight: 10,
                paddingBottom: 8,
                lineHeight: 20,
                fontSize: 14,
            }}>{item.content}</Text>
        </View>
    );
};
