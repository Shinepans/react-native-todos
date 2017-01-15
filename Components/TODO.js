import React, { Component } from 'react';
import TodoList from './TodoList';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View,
    ListView,
    TouchableHighlight,
    Alert
} from 'react-native';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'all',
            items: [
                {txt: '开始使用Shinepans Todos 吧~', complete: false},
                {txt: '今天要做点什么事呢?', complete: true}
            ]
        };
    }
    render() {
        switch(this.state.route){
            case 'all' :
                return (
                    <View style={{flex:1}}>
                        <TodoList
                            items={this.state.items}
                            onPressItem={this.Edit}/>
                        <TouchableHighlight
                            style={[styles.button, styles.newButton]}
                            underlayColor='#99d9f4'
                            onPress={this.Edit}>
                            <Text style={styles.buttonText}>新增</Text>
                        </TouchableHighlight>
                    </View>
                );
            case 'edit' :
                return (
                    <Text>
                    </Text>
                )
        }
    }

    // this CRFN
    CRFN = (route, rowData, rowID) => {
        this.setState({
            rowData: rowData,
            rowID: rowID,
            route: route
        });
    };

    // 回主页
    onHome = () => {
        this.props.CRFN('main');
    };

    // 删除
    DEL = (idx) => {
        let items = this.state.items;
        items.splice(idx, 1);
        this.setState({items: items})
    };

    // 更新
    UP = (item, idx) => {
        let items = this.state.items;
        if (idx) {
            items[idx] = item;
        }
        else {
            items.push(item)
        }
        this.setState({items: items});
    };

    // 编辑
    Edit = (rowData, rowID) => {
        this.CRFN('edit', rowData, rowID);
    };
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: 120,
        bottom: 60,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },

    newButton: {
        marginBottom: 0,
        borderRadius: 0,
    },

    todo: {
        marginTop: 100,
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },

    txt: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },

    completed: {
        color: '#cccccc'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    }
});

export default TODO;
