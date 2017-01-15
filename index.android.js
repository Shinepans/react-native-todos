import React, { Component } from 'react';
import IndexPage from './Components/IndexPage';
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

const onStartUse = () => {

};

class ReactNativeTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'main'
        };
    }
    render() {
        switch(this.state.route){
            case 'main':
                return (
                    <IndexPage CRFN={this.CRFN}/>
                );
            default: 
                return (
                    <Text>
                        err
                    </Text>
                );
        }
    }
    CRFN = (route) => {
        this.setState({route: route});
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

AppRegistry.registerComponent('ReactNativeTodos', () => ReactNativeTodos);
