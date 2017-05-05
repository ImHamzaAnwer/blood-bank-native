import { DONOR_VAL_UPDATE, DONOR_CREATED, DONORS_FETCH_SUCCESS } from './types'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'


export const donorValUpdate = ({ prop, value }) => {
    return {
        type: DONOR_VAL_UPDATE,
        payload: { prop, value }
    }
}

export const donorCreate = ({ name, city, age, bloodGroup }) => {
    return (dispatch) => {
        // const { currentUser } = firebase.auth();
        firebase.database().ref(`/donors/`)
            .push({ name, age, city, bloodGroup })
            .then(() => {
                Actions.donorsList({type: 'reset'});
                dispatch({ type: DONOR_CREATED })
            })
    }
}

export const donorsFetch = () =>{
    return (dispatch) =>{
        firebase.database().ref(`/donors/`)
        .on('value', snapshot =>{
            dispatch({type: DONORS_FETCH_SUCCESS, payload: snapshot.val()})
        })
    }
}
