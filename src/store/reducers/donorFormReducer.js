import { DONOR_VAL_UPDATE, EMPLOYEE_CREATED } from '../actions/types';

const INITIAL_STATE = { name: '', age: '', city: '', bloodGroup: '' };

export default (state, action) => {
    switch (action.type) {
        case DONOR_VAL_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }

        case EMPLOYEE_CREATED:
            return INITIAL_STATE;
            
        default:
            return INITIAL_STATE;
    }
}