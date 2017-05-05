import React from 'react';
import { H1, Item, Input, Label, Button, Text } from 'native-base';

const Inputs = ({label, secureTextEntry, onChangeText}) => {
    return (
        <Item fixedLabel>
            <Label>{label}</Label>
            <Input 
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry} />
        </Item>
    );
};

export default Inputs;