import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
} from 'react-native';
import {FocusAwareStatusBar} from '../../AppTitleBar';
import {ItemSetting} from '../mine/ItemSetting';
import SafeAreaView from 'react-native-safe-area-view';
import {MainTitleBar} from '../MainTitleBar';


const ItemList = [
    {icon: require('./img/icon_friendcircle.png'), title: '朋友圈'},
    {icon: require('./img/icon_scan.png'), title: '扫一扫'},
    {icon: require('./img/icon_location.png'), title: '附近的人'},
    {icon: require('./img/icon_shopping.png'), title: '购物'},
    {icon: require('./img/icon_topic.png'), title: '话题'},
];

export const DiscoverScreen = () => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#1E6F82"/>
            <MainTitleBar title='发现' bgColor='#1E6F82'/>
            <ScrollView style={{flex: 1}}>

                <View style={{marginBottom: 10}}>
                    <ItemSetting item={ItemList[0]}/>
                </View>

                <View>
                    {
                        ItemList.map((item, index) => {
                            if (index === 0) {
                                return;
                            }
                            return <ItemSetting item={item} key={item.title}/>;
                        })
                    }
                </View>


            </ScrollView>
        </SafeAreaView>
    );
};
