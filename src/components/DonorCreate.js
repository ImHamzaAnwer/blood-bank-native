import React, { Component } from 'react';
import { connect } from 'react-redux';
import DonorForm from './DonorForm';
import { Content } from 'native-base'
import Button from './common/Button';
import { donorCreate } from '../store/actions';
import { Actions } from 'react-native-router-flux';
class DonorCreate extends Component {
    onButtonPress(donor) {
        const { name, age, city, bloodGroup } = this.props;
        this.props.donorCreate({ name, age, city, bloodGroup: bloodGroup || 'A+' })
    }

    render() {
        return (
            <Content>
                <DonorForm {...this.props} />
                <Button
                    styles={styles.buttonStyles}
                    onPress={this.onButtonPress.bind(this)}
                    label="Donate" />
            </Content>
        );
    }
}


const styles = {
    buttonStyles: {
        marginTop: 20,
        marginBottom: 7,
        marginLeft: 45,
        marginRight: 45,
    }
}

const mapStateToProps = (state) => {
    const { name, city, age, bloodGroup } = state.donorForm
    return { name, city, age, bloodGroup };
}

export default connect(mapStateToProps, { donorCreate })(DonorCreate);