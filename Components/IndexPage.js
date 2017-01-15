import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View,
    Alert
} from 'react-native';

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
    onStartUse = () => {
        this.props.CRFN('index');
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
