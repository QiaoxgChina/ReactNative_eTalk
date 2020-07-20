import React, {Component, useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
    StyleSheet,
    FlatList, SectionList,
} from 'react-native';


export const ViewSkill = ({people}) => {

    const [currSelectSkillIndex, setCurrSelectSkillIndex] = useState(0);
    const [currSelectSkill, setCurrSelectSkill] = useState(people.skill[currSelectSkillIndex]);


    const renderItem = (item, index) => {
        return (
            <TouchableWithoutFeedback
                onPress={
                    () => {
                        setCurrSelectSkillIndex(index);
                        setCurrSelectSkill(people.skill[index]);
                    }
                }
            >
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    {/*<View*/}
                    {/*    style={index === currSelectSkillIndex ? styles.skillImgBg_focus : styles.skillImgBg}*/}
                    {/*>*/}
                    {/*    <Image source={item.icon} style={{width: 46, height: 46}}/>*/}
                    {/*</View>*/}

                    <ImageBackground
                        source={index === currSelectSkillIndex ? require('../../image/bg_03.png') : require('../../image/bg_05.png')}
                        style={{
                            width: 55,
                            height: 49.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image source={item.icon} style={{width: 40, height: 40}}
                               resizeMethod='scale'/>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View>
            <View style={{
                height: 80,
                flexDirection: 'row',
                backgroundColor: 'white',
                marginTop: 0.5,
                paddingLeft: 15,
                paddingRight: 15,
            }}>

                <FlatList
                    keyExtractor={(item, index) => item.title + index}
                    data={people.skill}
                    horizontal={true}
                    renderItem={({item, index}) => {
                        return renderItem(item, index);
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{width: 10}}/>
                        );
                    }}
                />

            </View>


            <View style={{
                paddingLeft: 15,
                backgroundColor: 'white',
                paddingRight: 15,
                paddingBottom: 20,
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>{currSelectSkill.title}</Text>

                <Text style={{color: '#909090', fontSize: 13}}>{currSelectSkill.consume}</Text>

                <Text style={{
                    fontSize: 14,
                    lineHeight: 25,
                    textAlign: 'auto',
                    marginTop: 10,
                }}>{currSelectSkill.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    skillImgBg: {
        width: 50,
        height: 50,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#c8c8c8',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    skillImgBg_focus: {
        width: 50,
        height: 50,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FFCC00',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
});
