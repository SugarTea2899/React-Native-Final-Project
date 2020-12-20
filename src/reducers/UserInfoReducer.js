import { INIT_USER_CATEGORIES, INIT_USER_INFO, RELOAD_PROFILE_SCREEN } from "../globals/ActionTypes/UserInfoActionType";

const UserInfoReducer = (state, action) => {
    switch (action.type) {
        case INIT_USER_INFO:
            return {...state, userInfo: action.value};
        case INIT_USER_CATEGORIES:
            return {...state, userCategories: action.value};
        case RELOAD_PROFILE_SCREEN:
            return {...state, reload: action.value}
        default:
            return state;
    }
}

export default UserInfoReducer;