import React from 'react';

import {
    TouchableNativeFeedback,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';

class ItemSession extends React.Component {


    render(): React.ReactNode {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    // this.goToChatRoom(this.props.nav, this.props.sessionInfo);
                    // this.props.click(this.props.sessionInfo.name, this.props.nav);

                    this.props.nav.navigate('chatRoom', {
                        session: this.props.sessionInfo,
                        id: (Math.random() * 100) % 15,
                    });
                }}
            >
                <View style={styles.item}>
                    <Image source={this.props.sessionInfo.avatar} style={styles.avatar}/>

                    <View style={styles.txtContainer}>
                        <Text style={styles.title}>{this.props.sessionInfo.name}</Text>
                        <Text style={styles.content}>{this.props.sessionInfo.content}</Text>
                    </View>

                    <Text style={styles.time}>{this.props.sessionInfo.time}</Text>

                </View>
            </TouchableNativeFeedback>
        );
    }
};

export default ItemSession;


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 65,
        alignItems: 'center',
        marginBottom: 0.3,
    },
    avatar: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },

    txtContainer: {
        marginLeft: 10,
        flex: 1,
    },

    title: {
        color: 'black',
        fontSize: 15,
    },
    content: {
        color: '#8a8a8a',
        fontSize: 12,
        marginTop: 5,
    },

    time: {
        color: '#8a8a8a',
        marginRight: 10,
        fontSize: 11,
    },
});
