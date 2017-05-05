import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Text, Content, Card, CardItem, Body } from 'native-base';
import Button from './Button';

const DonorDetail = ({ children, visible, onDecline }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { }}
        >
            <Content>
                <Card style = {styles.containerStyles}>
                    <CardItem>
                        <Body>
                            {children}
                        </Body>
                    </CardItem>
                <Button styles={styles.buttonStyles} onPress={onDecline} label="close" />
                </Card>
            </Content>
        </Modal>
    );
}

const styles = {
    textStyles: {
        color: "#fff",
        flex: 1,
        fontSize: 18,
        textAlign: "center",
        lineHeight: 40
    },
    buttonStyles:{
        marginTop: 5
    },
    containerStyles: {
        padding: 20,
        marginTop: 90,
        marginLeft: 40,
        marginRight: 40,
        // backgroundColor: "rgba(168, 6, 6, 0.75)",
        // position: "relative",
        // flex: 1,
        // justifyContent: 'center'
    }
}

export default DonorDetail;