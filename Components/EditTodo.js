import React, { Component } from 'react';
import t from 'tcomb-form-native';
import { Text, View, TouchableHighlight,StyleSheet } from 'react-native';
let Form = t.form.Form;

let ToDo = t.struct({txt: t.Str, complete: t.Bool});

let options = {
    fields: {
        txt: {
            label: 'To-Do Item',
            placeholder: 'enter a to do item here',
            autoFocus: true
        }
    }
};

class ToDoEdit extends React.Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        let value = this.refs.form.getValue();
        if (value) {
            this.props.UP(value, this.props.id);
        }
        this.props.CRFN('all');
    }

    onBack = () => {
        this.props.CRFN('all');
    };

    render() {
        return (
            <View style={styles.todo}>
                <Form
                    ref="form"
                    type={ToDo}
                    onChange={this._onChange}
                    options={options}
                    value={this.props.rowData}/>
                <TouchableHighlight
                    style={[styles.button, styles.saveButton]}
                    onPress={this.onUpdate}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>保存</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.button, styles.saveButton]}
                    onPress={this.onBack}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>返回</Text>
                </TouchableHighlight>
            </View>
        )
    }
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
        justifyContent: 'center',
        marginTop: 8,
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


module.exports = ToDoEdit;