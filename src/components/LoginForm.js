import React, { Component } from 'react';
import { Container, Content, Form, Text, Spinner, InputGroup } from 'native-base';
import Input from './common/Input';
import Button from './common/Button';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, login, renderLogin } from '../store/actions'
import { Actions } from 'react-native-router-flux';
class LoginForm extends Component {
    componentWillMount() {
        this.props.renderLogin();
    }

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onLogin() {
        const { email, password } = this.props;
        this.props.login({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />
        }
        return <Button onPress={this.onLogin.bind(this)} styles={styles.buttonStyles} label="Login" />
    }

    render() {
        return (
            <Container style={styles.containerStyles}>
                <Content>
                    <Form>
                        <InputGroup>
                            <Input onChangeText={this.onEmailChange.bind(this)} label="Email" />
                        </InputGroup>

                        <InputGroup>
                            <Input onChangeText={this.onPasswordChange.bind(this)} label="password" secureTextEntry={true} />
                        </InputGroup>
                        <Text>{this.props.error}</Text>
                        {this.renderButton()}
                        <Text style={styles.textStyles} onPress={() => Actions.signup()}>dont have an account ? signup here</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = {
    containerStyles: {
        backgroundColor: "#fff",
        padding: 20
    },
    buttonStyles: {
        marginTop: 20,
        marginBottom: 7,
        marginLeft: 45,
        marginRight: 45,
    },
    textStyles: {
        marginTop: 15,
        alignSelf: "center"
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth
    return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, login, renderLogin })(LoginForm);