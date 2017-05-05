import React, { Component } from 'react';
import { Container, Content, Picker, Item } from 'native-base';

const Item = Picker.Item;
class PickerN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange() {
        this.setState({
            selected1: value
        });
    }
    render() {
        return (
            <Picker style={{ flex: 1 }}>
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
        );
    }
}

export default PickerN