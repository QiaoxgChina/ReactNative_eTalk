import React from 'react';

import {
    StyleSheet,
    TouchableNativeFeedback,
    View,
    Image,
    Text,
} from 'react-native';

export const ItemFriend = (item, navigation) => {
    if (item.type === 1) {
        return (
            <View>
                <ItemFriendType item={item} nav={navigation} key={item.id + item.title}/>
                <View style={{flexDirection: 'row', height: 0.5}}>
                    <View style={{backgroundColor: '#ffffff', width: 65}}/>
                    <View style={{backgroundColor: '#e8e8e8', flex: 1}}/>
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <ItemPeopleType item={item} nav={navigation}/>
                <View style={{flexDirection: 'row', height: 0.5}}>
                    <View style={{backgroundColor: '#ffffff', width: 65}}/>
                    <View style={{backgroundColor: '#e8e8e8', flex: 1}}/>
                </View>
            </View>
        );
    }

};

class ItemFriendType extends React.Component {


    render() {
        return (
            <TouchableNativeFeedback>
                <View style={styles.item}>
                    <View style={{
                        backgroundColor: this.props.item.bgColor,
                        width: 40,
                        height: 40,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={this.props.item.icon}
                               style={{width: 20, height: 20}}
                               resizeMode='center'
                        />
                    </View>

                    <Text style={{flex: 1, paddingLeft: 10}}>{this.props.item.title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}


class ItemPeopleType extends React.Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    this.props.nav.navigate('friendInfo',
                        {
                            id: this.props.item.id,
                        },
                    );
                }}
            >
                <View
                    style={styles.item}>

                    <Image source={this.props.item.avatar == null ? this.props.item.icon : this.props.item.avatar}
                           style={{width: 40, height: 40, borderRadius: 5}}/>

                    <View style={{flex: 1, paddingLeft: 10}}>
                        <Text>{this.props.item.title}</Text>
                        <Text style={{color: '#909090', fontSize: 12}}>职业：{this.props.item.profession}</Text>
                    </View>

                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        height: 60,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
    },

});

