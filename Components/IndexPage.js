import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ToastAndroid,
    DeviceEventEmitter,
    Text,
    Button,
    View,
    Alert
} from 'react-native';
import WeChat from 'react-native-wechat-android';

const appId = 'wxc7fec887ec1fb03c';


const onPressAbout = () => {
    Alert.alert('欢迎使用 Shinepans Todos');
};

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'WELCOME'
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Todos
                </Text>
                <Text style={styles.instructions}>
                    v 1.0 CopyRight 2017-2017 Shinepans
                </Text>
                <View style={styles.button}>
                    <Button
                        onPress={this.registerApp}
                        title="注册微信"
                        color="#60B452"
                        accessibilityLabel="Welcome"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={this.openApp}
                        title="打开微信"
                        color="#60B452"
                        accessibilityLabel="Welcome"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={this.hasWx}
                        title="检查微信"
                        color="#60B452"
                        accessibilityLabel="Welcome"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={this.oauth}
                        title="请求Oauth"
                        color="#60B452"
                        accessibilityLabel="Welcome"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={this.onStartUse}
                        title="开始使用"
                        color="#841584"
                        accessibilityLabel="Welcome"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={onPressAbout}
                        style={styles.button}
                        title="关        于"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }

    componentWillMount = () => {
        DeviceEventEmitter.addListener('finishedShare',function(event){                            
            if(event.success){
                ToastAndroid.show('分享成功',ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('分享失败',ToastAndroid.SHORT);
            }
        });

        DeviceEventEmitter.addListener('finishedAuth',function(event){
            if(event.success){
                console.log(' code = ' + JSON.stringify(event.code)
                    + ' state = ' + JSON.stringify(event.state));
            }else{
                ToastAndroid.show('授权失败',ToastAndroid.SHORT);
            }
        });
    };

    onStartUse = () => {
        this.props.CRFN('index');
    };  

    onWechat = () => {

    };

    oauth = () => {
        WeChat.sendAuthReq('snsapi_userinfo','123',(err,authReqOK) => {
            console.log(authReqOK);
        });
    };

    hasWx = () => {
        WeChat.isWXAppInstalled(
            (err,isInstalled) => {
                if(isInstalled){
                    ToastAndroid.show('装了微信',ToastAndroid.SHORT);
                }else{
                    ToastAndroid.show('没装微信',ToastAndroid.SHORT);
                }
            }
        );
    };

    registerApp = () => {
        WeChat.registerApp(appId,(err,registerOK) => {
            ToastAndroid.show(registerOK.toString() + '注册成功',ToastAndroid.SHORT);
        });
    };

    openApp = () => {
        WeChat.openWXApp((err,res) => {

        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 32,
        color: '#000',
        textAlign: 'center',
        position: 'absolute',
        top: 60,
        left: 140,
    },
    instructions: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 16,
        marginBottom: 5,
        position: 'absolute',
        bottom: 120,
        left: 40,
    },
    button: {
        marginTop: 20,
        width: 120,
    },
});

export default IndexPage;
