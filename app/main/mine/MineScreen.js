import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
} from 'react-native';
import {FocusAwareStatusBar} from '../../AppTitleBar';
import SafeAreaView from 'react-native-safe-area-view';
import {ItemSetting} from './ItemSetting';
import {loginUser} from '../../data/LoginUserData';


const ItemList = [
    {icon: require('./img/icon_pay_01.png'), title: '支付'},
    {icon: require('./img/icon_heart.png'), title: '收藏'},
    {icon: require('./img/icon_pic_02.png'), title: '相册'},
    {icon: require('./img/icon_card.png'), title: '卡包'},
    {icon: require('./img/icon_smile.png'), title: '表情'},
    {icon: require('./img/icon_setting.png'), title: '设置'},
];

export const MineScreen = () => {

    return (
        <SafeAreaView>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff"/>
            <View>
                <ScrollView>

                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        marginBottom: 10,
                        paddingRight: 15,
                        paddingLeft: 20,
                        paddingBottom: 35,
                        paddingTop: 15,
                    }}>
                        <Image source={require('./img/icon_camera_01.png')}
                               style={{width: 25, height: 18, alignSelf: 'flex-end'}}/>
                        <View style={{flexDirection: 'row', paddingTop: 20}}>
                            <Image source={loginUser.icon}
                                   style={{width: 60, height: 60, borderRadius: 5}}/>
                            <View style={{
                                justifyContent: 'space-between',
                                flex: 1,
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                    flex: 1,
                                    paddingTop: 5,
                                }}>{loginUser.nickname}</Text>
                                <View style={{
                                    marginLeft: 10,
                                    flexDirection: 'row',
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                    <Text style={{color: '#8a8a8a', fontSize: 13, flex: 1}}>微信号：{loginUser.name}</Text>
                                    <Image source={require('./img/icon_qrcode.png')}
                                           style={{width: 15, height: 15, marginRight: 10}}/>
                                    <Image source={require('../../image/icon_right.png')}
                                           style={{width: 15, height: 15}}/>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{marginBottom: 10}}>
                        <ItemSetting item={ItemList[0]}/>
                    </View>

                    <View>
                        {
                            ItemList.map(item => {
                                if (item.title === '支付' || item.title === '设置') {
                                    return;
                                }
                                return <ItemSetting item={item} key={item.title}/>;
                            })
                        }
                    </View>

                    <View style={{marginTop: 10}}>
                        <ItemSetting item={ItemList[ItemList.length - 1]}/>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    );
};
