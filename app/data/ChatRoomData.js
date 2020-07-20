/**
 * 聊天记录
 * @type {({name: string, icon: any, id: string, time: string, contentType: number, content: string}|{name: string, icon: any, id: string, time: string, contentType: number, content: string}|{name: string, icon: any, id: string, time: string, contentType: number, content: string}|{name: string, icon: any, id: string, time: string, contentType: number, content: string}|{name: string, icon: any, id: string, time: string, contentType: number, content: string})[]}
 */
import {loginUser} from './LoginUserData';

export const chatHistory = [
    {
        id: '111111',
        name: 'A',
        content: '在干么呢？',
        contentType: 1,
        icon: require('../main/home/avatar/icon_10.png'),
        time: '15:10',
    },
    {
        id: '22222222',
        name: loginUser.name,
        content: '吃饭',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '15:10',
    },
    {
        id: '3333333333',
        name: 'A',
        content: '吃什么饭，赶紧出来嗨',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '15:10',
    },
    {
        id: '444444',
        name: loginUser.name,
        content: '你在哪儿呢？',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '16:10',
    },
    {
        id: '55555',
        name: 'A',
        content: '不夜城',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '16:10',
    },
    {
        id: '6666',
        name: loginUser.name,
        content: '稍等...洗一下碗，马上到',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '17:10',
    },
    {
        id: '777777',
        name: 'A',
        content: '洗什么碗，磨磨唧唧的，给你十分钟，时间一到我们就撤了',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '17:10',
    },
    {
        id: '888888',
        name: loginUser.name,
        content: '不洗碗就出去，回来得跪搓衣板的兄弟，洗什么碗，磨磨唧唧的，给你十分钟，时间一到我们就撤了',
        contentType: 1,
        icon: require('../main/home/avatar/icon_11.png'),
        time: '17:10',
    },
];

export function createNewMessage(message) {
    return createRandomNewMessage(message, loginUser.name);
}


export function createRandomNewMessage(message, name) {
    var date = new Date();

    // var year = date.getFullYear().toString();
    // var month = (date.getMonth() + 1).toString();
    // var day = date.getDate().toString();
    var time = date.getTime().toString();

    var hour = date.getHours().toString();

    if (hour.length === 1) {
        hour = '0' + hour;
    }

    var minute = date.getMinutes().toString();
    if (minute.length === 1) {
        minute = '0' + minute;
    }

    return {
        id: time + Math.random() * 100,
        name: name,
        content: message.toString(),
        contentType: 1,
        time: hour + ':' + minute,
        icon: require('../main/home/avatar/icon_11.png'),
    };
}
