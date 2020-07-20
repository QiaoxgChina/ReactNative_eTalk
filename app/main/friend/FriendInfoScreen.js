import React, {Component} from 'react';
import {
    StatusBar,
    View,
    Text,
    Image,
    TouchableNativeFeedback,
    ScrollView,
} from 'react-native';
import {getFriendById} from '../../data/FriendData';
import SafeAreaView from 'react-native-safe-area-view';
import {AppTitleBar} from '../../AppTitleBar';
import {createViewFeature} from './ViewFeature';
import {ViewSkill} from './ViewSkill';

export function FriendInfoScreen({route, navigation}) {
    return <FriendInfoScreenClass route={route} navigation={navigation}/>;
};

class FriendInfoScreenClass extends React.Component {
    constructor(props) {
        super(props);

        const {id} = this.props.route.params;
        const people = getFriendById(id);
        this.state = {
            navigation: this.props.navigation,
            people: people,
        };

        // this.myRef = React.createRef();
    }

    moreInfo(navigation) {
        alert('更多');
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={{flex: 1}}>

                <StatusBar barStyle='dark-content' backgroundColor='#ffffff'/>
                <AppTitleBar title="通讯录" bgColor='#ffffff' nav={this.state.navigation} moreInfo={this.moreInfo}/>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        paddingLeft: 15,
                        paddingTop: 20,
                        paddingBottom: 30,
                        flex: 1,
                        backgroundColor: 'white',
                    }}>
                        <Image
                            source={this.state.people.avatar}
                            style={{width: 60, height: 60, borderRadius: 5}}
                            resizeMode='stretch'/>
                        <View style={{marginLeft: 10, flex: 1}}>

                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                fontFamily: '宋体',
                            }}>{this.state.people.title}</Text>
                            <Text style={{fontSize: 14, color: '#909090'}}>职业：{this.state.people.profession}</Text>

                            {/*<Text*/}
                            {/*    style={{fontSize: 14, color: '#909090'}}*/}
                            {/*>技巧：{this.state.people.tips}</Text>*/}
                        </View>

                        {
                            createViewFeature(this.state.people)
                        }
                    </View>

                    <ViewSkill people={this.state.people}/>

                    <TouchableNativeFeedback
                        onPress={() => {
                            const session = {
                                id: this.state.people.id,
                                avatar: this.state.people.avatar,
                                name: this.state.people.title,
                                content: '今晚加班，谁都不许走',
                                time: '18:00',
                            };
                            this.props.navigation.navigate('chatRoom', {
                                session: session,
                                id: Math.random() * 100,
                            });
                        }}
                    >

                        <View style={{
                            backgroundColor: 'white',
                            height: 45,
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 0.5,
                            flexDirection: 'row',
                        }}>
                            <Image source={require('../../image/icon_message_info.png')}
                                   style={{width: 20, height: 20}}/>
                            <Text style={{marginLeft: 5, fontSize: 15, color: '#586AA0', marginBottom: 2}}>发消息</Text>
                        </View>

                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>

                        <View style={{
                            backgroundColor: 'white',
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 20,
                            flexDirection: 'row',
                        }}>
                            <Image source={require('../../image/icon_video.png')} style={{width: 25, height: 20}}/>
                            <Text style={{marginLeft: 5, fontSize: 15, color: '#586AA0', marginBottom: 0}}>音视频通话</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

