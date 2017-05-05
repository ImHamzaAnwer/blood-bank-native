import React, { Component } from 'react';
import { H2, H3, Text, Content, ListItem, Card, CardItem, Body } from 'native-base';
import DonorDetail from './common/Modal';
class ListItemN extends Component {

    state = { showModal: false }

    onDecline() {
        this.setState({ showModal: false });
    }

    onRowPress() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const { name, bloodGroup, city, age } = this.props.donor;
        return (
            <Content>
                <DonorDetail
                    onDecline={this.onDecline.bind(this)}
                    visible={this.state.showModal}>
                    <H2 style={styles.headingStyles}>Donor Details</H2>
                    
                    <Text style={styles.detailStyles} >
                        Name: <H3>{name}</H3>
                    </Text>
                    
                    <Text style={styles.detailStyles}>
                        Blood Group: <H3>{bloodGroup}</H3>
                    </Text>
                    
                    <Text style={styles.detailStyles}>
                        City: <H3>{city}</H3>
                    </Text>
                    
                    <Text style={styles.detailStyles}>
                        Age: <H3>{age}</H3>
                    </Text>
                </DonorDetail>

                <ListItem onPress={this.onRowPress.bind(this)}>
                    <Text>{name}</Text>
                </ListItem>
            </Content>
        );
    }
}

const styles = {
    headingStyles:{
        alignSelf: "center",
        marginBottom: 20,
        fontWeight: "500"
    },
    detailStyles: {
        paddingBottom: 10,
        marginBottom: 10
    }
}

export default ListItemN;