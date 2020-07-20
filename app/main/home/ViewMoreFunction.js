import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView, FlatList,
    TouchableWithoutFeedback,
} from 'react-native';


const moreFunction = [
    {title: '相册', icon: require('../../image/more_pic.png')},
    {title: '拍摄', icon: require('../../image/more_camera.png')},
    {title: '位置', icon: require('../../image/more_location.png')},
    {title: '我的收藏', icon: require('../../image/more_collection.png')},
    {title: '名片', icon: require('../../image/more_people.png')},
    {title: '文件', icon: require('../../image/more_file.png')},
    {title: '红包', icon: require('../../image/more_red.png')},
    {title: '转账', icon: require('../../image/icon_pay.png')},
];

export const ViewMoreFunction = () => {
    return <View
        style={{height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F6F6F6'}}>
        <FlatList
            keyExtractor={(item) => item.title}
            data={moreFunction}
            renderItem={({item}) => {
                return (
                    <TouchableWithoutFeedback
                        onPress={() => {

                        }}
                    >
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 100,
                            width: 80,
                        }}>
                            <View style={{
                                width: 45,
                                height: 45,
                                backgroundColor: 'white',
                                borderRadius: 8,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image source={item.icon} style={{width: 25, height: 25}}/>
                            </View>
                            <Text style={{fontSize: 12, marginTop: 5, color: '#a8a8a8'}}>{item.title}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                );
            }}
            horizontal={false}
            numColumns={4}
        />

    </View>;
};
