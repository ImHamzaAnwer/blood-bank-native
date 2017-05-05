import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Text, Spinner } from 'native-base';
import Input from './common/Input';
import Button from './common/Button';
import { donorCreate, donorValUpdate } from '../store/actions';

class DonorForm extends Component {
    render() {
        return (
            <Content>
                <Form>
                    <Input
                        label="Name"
                        value={this.props.name}
                        onChangeText={text => this.props.donorValUpdate({ prop: 'name', value: text })} />

                    <Input
                        label="Age"
                        value={this.props.age}
                        onChangeText={text => this.props.donorValUpdate({ prop: 'age', value: text })} />

                    <Input
                        label="City"
                        value={this.props.city}
                        onChangeText={text => this.props.donorValUpdate({ prop: 'city', value: text })} />

                    <Text style={{ alignSelf: 'center' }}>Blood Group</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.bloodGroup}
                        onValueChange={group => this.props.donorValUpdate({ prop: 'bloodGroup', value: group })}>
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="O-" value="O-" />
                    </Picker>
                </Form>
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, age, city, bloodGroup } = state.donorForm;
    return { name, age, city, bloodGroup };
}

export default connect(mapStateToProps, { donorValUpdate })(DonorForm);