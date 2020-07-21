import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    TouchableWithoutFeedback,
    Dimensions,
    StyleSheet,
    Button,
    Image,
    ToastAndroid,
} from 'react-native';
import {FocusAwareStatusBar} from '../../AppTitleBar';
import SafeAreaView from 'react-native-safe-area-view';
import {ItemFriend} from './ItemFriend';
import {MainTitleBar} from '../MainTitleBar';
import {friendItemList, friendList, getFriendCount} from '../../data/FriendData';


let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const returnTrue = () => true;

class FriendScreenClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedWord: '',
        };

        this.renderHeaderView = this.renderHeaderView.bind(this);

        this.select_nav = this.select_nav.bind(this);
        this.select_null = null;
    }

    select_nav(e) { //滑动触发事件
        // 输出当前 view
        const ev = e.nativeEvent.touches[0]; //获取多个触摸事件的第一个。比如你放了三根手指在屏幕上，他只算第一个放到屏幕上的
        const targetY = ev.pageY; //动态获取屏幕上触摸点垂直方向的距离
        const localY = ev.locationY; //第一次触摸到屏幕上距离顶部的距离
        const {y, width, height} = this.measure;
        this.getZM(y, targetY); //定位字母，并且触发相应的事件

    }

    resetSection() {
        this.select_null = null;
    }

    fixSectionItemMeasure() {
        const sectionItem = this.refs.view;
        if (!sectionItem) {
            return;
        }
        this.measureTimer = setTimeout(() => {
            sectionItem.measure((x, y, width, height, pageX, pageY) => {
                //console.log([x, y, width, height, pageX, pageY]);
                this.measure = {
                    y: pageY,
                    width,
                    height,
                };
            });
        }, 0);
    }

    getZM(topHeight, currentHeight) { //定位字母 topHeight:外层元素到顶部的距离 currentHeight:当前触摸点距离y高度
        var navItemHeight = 20;//字母行高 如果有边框请注意把边框也加上
        var navHeight = navItemHeight * friendList.length; //计算字母导航高度
        var indexNav = Math.ceil((currentHeight - topHeight) / navItemHeight) - 1;
        // 触发相应的事件 比如切换state
        // ...


        if (indexNav > friendList.length - 1 || indexNav < 0) {
            return;
        }

        this.setState({
            selectedWord: friendList[indexNav].title,
        });

        this.scrollToLocation(indexNav);
        this.hiddenSelectedWordView && clearTimeout(this.hiddenSelectedWordView);

        this.hiddenSelectedWordView = setTimeout(() => {
            this.setState({
                selectedWord: '',
            });
        }, 1000);
    }

    componentDidMount() {
        this.fixSectionItemMeasure();
    }

    // fix bug when change data
    componentDidUpdate() {
        this.fixSectionItemMeasure();
    }

    componentWillUnmount() {
        this.measureTimer && clearTimeout(this.measureTimer);
        this.hiddenSelectedWordView && clearTimeout(this.hiddenSelectedWordView);
    }


    _sectionComp = (info) => {
        var txt = info.section.title;

        let show = false;

        info.section.data.map(item => {
            if (item.show) {

            }
        });

        for (let i = 0; i < info.section.data.length; i++) {
            if (info.section.data[i].show) {
                show = true;
                break;
            }
        }

        if (txt === null || txt.length <= 0 || !show) {
            return;
        }

        return <Text
            style={{
                height: 20,
                textAlignVertical: 'center',
                backgroundColor: '#eeeeee',
                color: '#515151',
                paddingLeft: 20,
                fontSize: 12,
            }}>{txt}</Text>;
    };

    /**
     *
     * @param I Item 点击事件传递过来的index
     * 'viewPosition' (number) - 为0时将这个列表项滚动到可视区顶部
     * (可能会被顶部粘接的header覆盖),
     * 为1时将它滚动到可视区底部, 为0.5时将它滚动到可视区中央。
     * 'viewOffset' (number) - 继续偏移30像素的位置
     * 'sectionIndex' (number) - 第number个section
     * 'itemIndex' (number) - 的第number个item
     * 'animated' (boolean) -  是否启用动画
     */
    scrollToLocation(i) {
        this.refs.SectionList.scrollToLocation({
            animated: true,
            itemIndex: 0,
            sectionIndex: i,
            viewOffset: 0,
        });
    }

    renderHeaderView() {
        return (
            <View>
                {/*<SectionList*/}
                {/*    keyExtractor={(item, index) => item + index}*/}
                {/*    renderItem={({item}) =>*/}
                {/*        ItemFriend(item, this.props.nav)*/}
                {/*    }*/}
                {/*    sections={friendItemList}*/}
                {/*/>*/}

                {
                    friendItemList.map(item => {
                        return ItemFriend(item, this.props.nav);
                    })
                }
            </View>
        );
    }

    renderLine() {
        return (
            <View style={{flexDirection: 'row', height: 1}}>
                <View style={{backgroundColor: '#ffffff', width: 55}}/>
                <View style={{backgroundColor: '#f8f8f8', flex: 1}}/>
            </View>
        );
    }

    render() {

        let friends = friendList.map(item => {

        });

        return (
            <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
                <FocusAwareStatusBar barStyle="light-content" backgroundColor="#BF360C"/>
                <MainTitleBar title='通讯录' bgColor='#BF360C'/>

                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <SectionList
                            //指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素
                            initialNumToRender={11}
                            renderSectionHeader={this._sectionComp}
                            renderItem={({item, index}) => {
                                if (item.show) {
                                    return ItemFriend(item, this.props.nav);
                                } else {
                                    return null;
                                }

                            }

                            }
                            // ItemSeparatorComponent={() => {
                            //     return this.renderLine();
                            // }}
                            sections={friendList}
                            refreshing={true}
                            ref='SectionList'
                            ListHeaderComponent={this.renderHeaderView()}
                            ListFooterComponent={<Text style={{
                                color: '#909090',
                                fontSize: 14,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                                textAlign: 'center',
                                backgroundColor: 'white',
                                paddingTop: 15,
                                paddingBottom: 15,
                                marginTop: 0
                            }}>{getFriendCount()}位联系人</Text>}
                        />

                    </View>

                    {/*<View style={{*/}
                    {/*    position: 'absolute',*/}
                    {/*    alignSelf: 'flex-end',*/}
                    {/*    width: 30,*/}
                    {/*    alignItems: 'center',*/}
                    {/*    justifyContent: 'center',*/}
                    {/*    paddingTop: 20,*/}
                    {/*    paddingBottom: 20,*/}
                    {/*}}>*/}

                    {/*    {*/}
                    {/*        friendList.map((item, index) => {*/}
                    {/*            return (*/}
                    {/*                <TouchableWithoutFeedback*/}
                    {/*                    key={item.title + index}*/}
                    {/*                    onPressIn={() => {*/}
                    {/*                        // alert(item);*/}
                    {/*                        this.scrollToLocation(index);*/}
                    {/*                    }}*/}
                    {/*                >*/}
                    {/*                    <Text style={{flex: 1, color: '#909090'}}>{item.title}</Text>*/}
                    {/*                </TouchableWithoutFeedback>*/}
                    {/*            );*/}
                    {/*        })*/}
                    {/*    }*/}

                    {/*</View>*/}
                </View>

                <View ref="view" style={styles.container}
                      onStartShouldSetResponder={returnTrue}
                      onMoveShouldSetResponder={returnTrue}
                      onResponderGrant={this.select_nav}
                      onResponderMove={this.select_nav}
                      onResponderRelease={this.select_null}
                >
                    {
                        friendList.map((item, index) => {
                            return <Text style={styles.oit} key={item.title + index}>{item.title}</Text>;
                        })
                    }

                </View>

                {
                    this.showSelectedWord()
                }

            </SafeAreaView>
        );
    }

    showSelectedWord() {
        if (this.state.selectedWord === '' || this.state.selectedWord.length <= 0) {
            return null;
        } else {
            return (
                <Text style={{
                    position: 'absolute',
                    width: 80,
                    alignSelf: 'center',
                    backgroundColor: '#E8E8E8',
                    borderRadius: 10,
                    textAlign: 'center',
                    paddingBottom: 25,
                    paddingTop: 25,
                    fontSize: 20,
                    color: '#515151',
                }}>{this.state.selectedWord}</Text>
            );
        }

    }
}

export const FriendScreen = ({navigation}) => {
    return <FriendScreenClass nav={navigation}/>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 50,
        borderColor: '#000',
        position: 'absolute',
        alignSelf: 'flex-end',
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    icon: {
        width: 25,
        height: 25,
    },
    oit: {
        color: '#909090',
        height: 20,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
