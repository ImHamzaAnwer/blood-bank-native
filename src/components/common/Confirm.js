import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose = {()=>{}}
        >
            <View style={styles.containerStyles}>
                <CardSection style={styles.cardSectionStyles}>
                    <Text style={styles.textStyles}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept} label="Yes"/>
                    <Button onPress={onDecline} label="No"/>
                </CardSection>
            </View>
        </Modal>
    );
}

const styles = {
    cardSectionStyles:{
        justifyContent: "center"
    },
    textStyles:{
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        lineHeight: 40
    },
    containerStyles:{
        backgroundColor: "rgba(0,0,0,0.75)",
        position: "relative",
        flex: 1,
        justifyContent: 'center'
    }
}

export default Confirm;