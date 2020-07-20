import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';


const featureBgColor = ['#1C91EB', '#E7CA63', '#5DD473', '#E84A33'];
const featureImage = [
    require('../../image/icon_feature_01.png'),
    require('../../image/icon_feature_02.png'),
    require('../../image/icon_feature_03.png'),
    require('../../image/icon_feature_04.png'),
];

export function createViewFeature(people) {
    return (
        <View style={{
            marginRight: 15,
        }}>'l
            {
                people.feature.map((item, index) => {
                    return ItemFeature(item, index);
                })
            }
        </View>
    );
}


function ItemFeature(item, index) {
    return (
        <View
            key={item.title}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:2
            }}>

            <Text
                style={{color: '#909090', fontSize: 13, marginRight: 5}}>{item.title}</Text>

            <View style={{
                width: 15,
                height: 15,
                backgroundColor: featureBgColor[index],
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                zIndex: 99999,
            }}>
                <Image source={featureImage[index]}
                       style={{width: 10, height: 10}}/>
            </View>


            <Svg height="10" width="110" style={{marginLeft: -8}}>
                <G fill="none" stroke="#eeeeee">
                    <Path strokeLinecap="round" strokeWidth="5" d="M5 5 l100 0"/>
                </G>
                <G fill="none" stroke={featureBgColor[index]}>
                    <Path strokeLinecap="round" strokeWidth="5"
                          d={'M5 5 l' + item.value + ' 0'}/>
                </G>
            </Svg>

        </View>
    );
}
