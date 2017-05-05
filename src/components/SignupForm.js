import React, { Component } from 'react';
import { Container, Content, Form, Text, Spinner } from 'native-base';
import Input from './common/Input';
import Button from './common/Button';
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux';
import { emailChanged, passwordChanged, signup, renderSignup } from '../store/actions'
class SignupForm extends Component {
    componentWillMount(){
        this.props.renderSignup();
    }
    
    onEmailChange(text) {
       this.props.emailChanged(text) 
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onSignup(){
        const {email,password} = this.props;
        this.props.signup({email,password});
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner/>
        }
        return <Button onPress={this.onSignup.bind(this)} styles={styles.buttonStyles} label="Signup"/>;
    }

    render() {
        return (
            <Container style={styles.containerStyles}>
                <Content>
                    <Form>
                        <Input onChangeText={this.onEmailChange.bind(this)} label="Email" />
                        <Input onChangeText={this.onPasswordChange.bind(this)} label="password" secureTextEntry={true} />
                        <Text>{this.props.error}</Text>
                        {this.renderButton()}
                        <Text style ={styles.textStyles} onPress={()=>Actions.login()}>Already have an account ? login here !</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = {
    containerStyles: {
        backgroundColor: "#fff"
    },

    textStyles:{
        alignSelf: "center",
        marginTop: 20
    },

    buttonStyles: {
        marginTop: 20,
        marginBottom: 7,
        marginLeft: 45,
        marginRight: 45,
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, loading, error } = auth
    return { email, password, loading, error }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, signup, renderSignup })(SignupForm);