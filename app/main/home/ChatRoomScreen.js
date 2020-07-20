import React, {Component} from 'react';

import {
    Alert,
    FlatList,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StatusBar,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import {AppTitleBar} from '../../AppTitleBar';
import {ChatRoomItem} from './ChatRoomItem';
import {chatHistory, createNewMessage, createRandomNewMessage} from '../../data/ChatRoomData';
import {loginUser} from '../../data/LoginUserData';
import {emojiData} from '../../data/EmojiData';
import {ViewMoreFunction} from './ViewMoreFunction';
import {ViewEmoji} from './ViewEmoji';
// import {useWindowDimensions} from 'react-native';


// const windowWidth = useWindowDimensions().width / 4;

class ChatRoomScreenClass extends React.Component {

    constructor(props) {
        super(props);

        const {session} = this.props.route.params;
        const {id} = this.props.route.params;

        this.state = {
            currSession: session,
            name: session.name,
            id: id,
            value: '',
            showSendBtn: false,
            viewType: 0,
            keyboardIsShow: false,
            masterName: 'B',
            data: chatHistory,
            refreshing: false,
        };

        this.changeViewType = this.changeViewType.bind(this);
        this.keyboardDidHide = this.keyboardDidHide.bind(this);
        this.keyboardDidShow = this.keyboardDidShow.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        this.inputEmoji = this.inputEmoji.bind(this);
    }

    componentDidMount(): void {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', () => this.keyboardDidShow());
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', () => this.keyboardDidHide());
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
        clearTimeout(this.timeoutId);
        clearTimeout(this.scrollTimeoutId);
    }

    keyboardDidHide() {
        // 做想做的事,比如解决键盘弹出遮挡input框的问题

        this.setState({
            keyboardIsShow: false,
        });
    };

    keyboardDidShow() {
        this.setState({
            keyboardIsShow: true,
            viewType: 0,
        });

        this.scrollToEnd(10);
    };


    changeViewType(type) {
        this.timeoutId && clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
            this.setState({
                viewType: type,
            });

        }, 100);
    }

    scrollToEnd(delayTime) {
        this.scrollTimeoutId && clearTimeout(this.scrollTimeoutId);
        this.scrollTimeoutId = setTimeout(() => {
            this.refs.FlatList.scrollToEnd();
        }, delayTime);
    }

    _refresh() {
        if (!this.state.refreshing) {
            for (var i = 0; i < 6; i++) {
                chatHistory.splice(0, 0, createRandomNewMessage('加载更多消息 : ' + Math.random() * 100, i * 7 % 3 === 0 ? 'A' : loginUser.name));
            }

            this.setState({
                data: chatHistory,
            });

            setTimeout(() => {
                this.refs.FlatList.scrollToIndex({
                    index: 0,
                });
            }, 200);
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar barStyle="dark-content" backgroundColor="#E8E8E8"/>
                <AppTitleBar title={this.state.name} bgColor="#E8E8E8" moreInfo={goMoreInfo}
                             nav={this.props.navigation}/>

                <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
                    <FlatList
                        ref={'FlatList'}
                        data={this.state.data}
                        renderItem={({item, index}) => ChatRoomItem(item, index, this.state.currSession)}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this._refresh();
                        }}
                    />
                </View>

                <View style={{height: 0.5, backgroundColor: '#E8E8E8'}}/>
                <KeyboardAvoidingView>
                    <View style={{
                        backgroundColor: '#F6F6F6',
                        height: 50,
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>

                        <Image source={require('../../image/ic_cheat_voice.png')}
                               style={{width: 30, height: 30, backfaceVisibility: 'hidden'}}/>


                        {/*输入框*/}
                        <TextInput
                            ref={'TextInput'}
                            placeholder={'输入消息内容'}
                            placeholderTextColor={'gray'}
                            value={this.state.value}
                            onChangeText={(text) => {
                                this.setState({
                                    value: text,
                                    showSendBtn: text !== '' && text.length > 0,
                                });

                            }}
                            multiline={true}
                            style={{
                                textAlignVertical: 'top',
                                flex: 1,
                                backgroundColor: 'white',
                                marginTop: 8,
                                marginBottom: 8,
                                marginLeft: 5,
                                marginRight: 5,
                                borderRadius: 5,
                                paddingTop: 8,
                                paddingBottom: 8,
                            }}
                        />

                        {/*点击表情图标*/}
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.refs.TextInput.blur();
                                this.changeViewType(1);
                            }}
                        >
                            <Image source={require('../../image/ic_cheat_emo.png')} style={{width: 30, height: 30}}/>
                        </TouchableWithoutFeedback>

                        {/*点击发送图标*/}
                        <TouchableWithoutFeedback
                            onPress={() => {
                                if (this.state.showSendBtn) {
                                    this.sendMessage(this.state.value);
                                } else {
                                    this.refs.TextInput.blur();
                                    this.changeViewType(2);
                                }
                            }}
                        >

                            <Image
                                source={this.state.showSendBtn ? require('../../image/icon_send_message_gray_8a.png') : require('../../image/ic_cheat_add.png')}
                                style={{width: 30, height: 30}}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                </KeyboardAvoidingView>
                <View style={{height: 0.5, backgroundColor: '#E8E8E8'}}/>
                {this.state.viewType === 2 ? ViewMoreFunction() : null}
                {this.state.viewType === 1 ? <ViewEmoji callback={this.inputEmoji}/> : null}
            </SafeAreaView>
        );

    }

    inputEmoji(item) {
        const content = ' &#' + item.ID;
        this.setState({
            value: this.state.value + content,
            showSendBtn: content !== '' && content > 0,
        });
    }


    sendMessage(message) {
        var newData = createNewMessage(message);
        chatHistory.push(newData);
        this.setState(
            {
                data: chatHistory,
                value: '',
                showSendBtn: false,
            },
        );

        this.scrollToEnd(10);
    }

    createEmoView(viewType) {
        this.scrollToEnd(100);
    }
}

const ChatRoomScreen = ({route, navigation}) => {

    return <ChatRoomScreenClass navigation={navigation} route={route}/>;
};

function goBack(navigation) {
    navigation.goBack();
}

function goMoreInfo(navigation) {

    // navigation.navigate('friendInfo', {id: (Math.random() * 100) % 15, nav: navigation});
    Alert.alert('提示', '查看更多信息', [{text: '继续', onPress: goon(navigation)}, {text: '关闭'}]);
}

function goon(navigation) {
    alert('继续');
    // navigation.navigate('friendCircle');

}

export default ChatRoomScreen;
