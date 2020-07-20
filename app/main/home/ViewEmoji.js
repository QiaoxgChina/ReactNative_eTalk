import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import {emojiData} from '../../data/EmojiData';

export class ViewEmoji extends Component {
    render(): React.ReactNode {
        return (<View
                style={{
                    height: 200,
                    backgroundColor: '#F6F6F6',
                    paddingBottom: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                    flexDirection: 'row',
                }}>
                <FlatList
                    keyExtractor={(item) => item.ID}
                    data={emojiData}
                    renderItem={({item}) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                this.props.callback(item);
                            }}>
                                <View style={{
                                    flex: 1,
                                    marginTop: 10,
                                    paddingLeft: 8,
                                }}>
                                    <Image source={item.File} style={{width: 25, height: 25}}/>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    }}
                    horizontal={false}
                    numColumns={8}
                />

            </View>
        );
    }
};
