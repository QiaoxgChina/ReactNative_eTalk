import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
} from 'react-native';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './home/HomeScreen';
import {FriendScreen} from './friend/FriendScreen';
import {DiscoverScreen} from './discover/DiscoverScreen';
import {MineScreen} from './mine/MineScreen';


const TabArray = [
    {
        name: 'home',
        label: '会话',
        component: HomeScreen,
        focus: require('../image/icon_message_black_focus.png'),
        normal: require('../image/icon_message.png'),
    },
    {
        name: 'friend',
        label: '通讯录',
        component: FriendScreen,
        focus: require('../image/icon_friend_focus.png'),
        normal: require('../image/icon_friend.png'),
    },
    {
        name: 'discover',
        label: '发现',
        component: DiscoverScreen,
        focus: require('../image/icon_discover_black_focus.png'),
        normal: require('../image/icon_discover.png'),
    },
    {
        name: 'setting',
        label: '我的',
        component: MineScreen,
        focus: require('../image/icon_mine_black_focus.png'),
        normal: require('../image/icon_mine.png'),
    }];

const MainTab = createBottomTabNavigator();

export class MainScreen extends Component {
    render(): React.ReactNode {
        return (
            <MainTab.Navigator
                tabBarOptions={{
                    activeTintColor: '#2296F3',
                    inactiveTintColor: '#515151',
                    //设置TabNavigator的位置
                    tabBarPosition: 'top',
                    //是否在更改标签时显示动画
                    animationEnabled: true,
                    //是否允许在标签之间进行滑动
                    swipeEnabled: true,
                }}
                //后退按钮处理的行为。 initialRoute 返回初始标签;order 返回上一个标签页（按照标签页中显示的顺序）;history 返回上次访问的标签页;none 不处理后退按钮
                backBehavior={'initialRoute'}
                initialRouteName={'home'}
            >
                {
                    TabArray.map((item) => {
                        return <MainTab.Screen
                            key={item.name}
                            name={item.name}
                            component={item.component}
                            options={{
                                tabBarLabel: item.label,
                                tabBarIcon: ({focused, tintColor}) => {
                                    return <Image source={focused ? item.focus : item.normal}
                                                  style={{width: 23, height: 23}}/>;
                                },
                            }}/>;
                    })
                }

            </MainTab.Navigator>
        );
    }
}
