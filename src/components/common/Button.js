import React from 'react';
import { Button, Text } from 'native-base';

const ButtonCom = ({label, onPress, styles}) => {
    return (
        <Button style={styles} rounded block onPress={onPress}>
            <Text> {label} </Text>
        </Button>
    );
}

export default ButtonCom;