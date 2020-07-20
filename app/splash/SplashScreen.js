import React, {Component} from 'react';
import {
    Text,
    Modal,
    ImageBackground,
    TouchableWithoutFeedback,
    View, AppRegistry,
} from 'react-native';


/**
 * 引导页
 * @param navigation 参数必须带{}
 * @returns {*}
 * @constructor
 */

class SplashScreenClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            delayTime: 5,
            nav: this.props.nav,
            modalVisible: true,
        };

    }

    componentDidMount(): void {

        this.timerId = setInterval(() => {

            if (this.state.delayTime <= 0) {

                this.setState({
                    modalVisible: false,
                });

                clearInterval(this.timerId);
                this.state.nav.replace('main');
                return;
            }

            this.setState((prevState) => (
                {
                    delayTime: prevState.delayTime - 1,
                }
            ));
        }, 1000);
    }


    componentWillUnmount(): void {
        this.setState({
            modalVisible: true,
        });
        clearInterval(this.timerId);
    }

    render() {
        return (
            <ImageBackground source={require('../image/splash.jpg')}
                             style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>

                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({
                            modalVisible: false,
                        });
                        clearInterval(this.timerId);
                        if (this.state.nav === null) {
                            alert('navigation is null');
                        }

                        this.state.nav.replace('main');
                    }}
                >

                    <Text
                        style={{
                            backgroundColor: '#ffffff',
                            width: 65,
                            textAlign: 'center',
                            paddingTop: 5,
                            paddingBottom: 5,
                            fontSize: 12,
                            marginBottom: 20,
                            marginRight: 20,
                            borderRadius: 30,
                            borderColor: '#eeeeee',
                            borderWidth: 1,
                        }}
                    >跳过{this.state.delayTime}s</Text>
                </TouchableWithoutFeedback>
            </ImageBackground>
        );
    }
}

export const SplashScreen = ({navigation}) => {
    return <SplashScreenClass nav={navigation}/>;
};

AppRegistry.registerComponent('splash', () => SplashScreen);
