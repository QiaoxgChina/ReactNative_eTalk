import React from 'react';

import {
    TouchableNativeFeedback,
    View,
    Image,
    Text,
} from 'react-native';

export class ItemSetting extends React.Component {
    render(): React.ReactNode {
        return (
            <TouchableNativeFeedback key={this.props.item.title}>
                <View
                    key={this.props.item.title}
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        alignItems: 'center',
                        height: 50,
                        backgroundColor: 'white',
                        paddingLeft: 20,
                        paddingRight: 15,
                        marginBottom: 0.5,
                    }}>
                    <Image source={this.props.item.icon} style={{width: 25, height: 25, marginRight: 10}}/>
                    <Text style={{flex: 1}}>{this.props.item.title}</Text>
                    <Image source={require('../../image/icon_right.png')} style={{width: 15, height: 15}}/>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
