import Actions from '../../redux/actionType';

const INITIAL_STATE = {
    counter: 0,
    error: '',
    door1: ''
    
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.UPDATECOUNTER:
            return { ...state, counter: action.payload};
        case Actions.ERRORCOUNTER:
            return { ...state, error: action.payload};
        case Actions.UPDATEDOOR:
            return { ...state, door1: action.payload};
        case Actions.RESTARTCOUNTER:
            return { ...state, counter: 0};
        default:
            return state;
    }
};