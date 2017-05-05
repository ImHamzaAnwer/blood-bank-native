import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import DonorsList from './components/DonorsList';
import DonorCreate from './components/DonorCreate';
import firebase from 'firebase';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 50 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
                <Scene key="signup" component={SignupForm} title="Please Signup" />
            </Scene>

            <Scene key="donors">
                <Scene
                    key="donorsList"
                    component={DonorsList}
                    title="Donor's List"
                    rightTitle="Donate"
                    onRight={() => Actions.donorCreate()}
                />
                <Scene
                    key="donorCreate"
                    component={DonorCreate}
                    title="Register Yourself as Donor"
                />
            </Scene>
        </Router>
    );
}

export default RouterComponent;