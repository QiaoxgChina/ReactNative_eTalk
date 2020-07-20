import React, {Component} from 'react';
import {
    FlatList,
    StatusBar,
    View,
    Text,
    Button,
    Image,
    ScrollView,
} from 'react-native';
import {FocusAwareStatusBar} from '../../AppTitleBar';
import ItemSession from './ItemSession';
import SafeAreaView from 'react-native-safe-area-view';
import {MainTitleBar} from '../MainTitleBar';



const sessionList = [
    {id: '1', avatar: require('./avatar/avatar_1.png'), name: '非蛋不捣', content: '今晚加班，谁都不许走', time: '18:00'},
    {id: '2', avatar: require('./avatar/avatar_2.png'), name: '情何以堪', content: '约吗？小龙虾', time: '17:34'},
    {id: '3', avatar: require('./avatar/avatar_3.png'), name: '安外彭于晏', content: '兄弟额，借点钱？', time: '12:43'},
    {id: '4', avatar: require('./avatar/avatar_4.png'), name: '望京周瑞发', content: '买片儿吗？啥类型都有...', time: '11:32'},
    {id: '5', avatar: require('./avatar/icon_10.png'), name: '华贸谢亭丰', content: '动次打次', time: '11:12'},
    {id: '6', avatar: require('./avatar/icon_7.png'), name: '朝阳邓庄庄', content: '朝阳哦个逆光源走一波？', time: '10:12'},
];

export const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusAwareStatusBar barStyle='light-content' backgroundColor='#0288D1'/>
            <MainTitleBar title="会话" bgColor='#0288D1'/>
            <View style={{
                flex: 1,
            }}>

                <FlatList
                    data={sessionList}
                    renderItem={({item}) =>
                        <ItemSession sessionInfo={item} nav={navigation}/>
                    }
                    keyExtractor={item => item.id}/>

            </View>
        </SafeAreaView>
    );
};
