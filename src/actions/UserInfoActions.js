import { INIT_USER_CATEGORIES, INIT_USER_INFO } from "../globals/ActionTypes/UserInfoActionType";

export function initUserInfo (userInfo) {
    return {
        type: INIT_USER_INFO,
        value: userInfo
    }
}

export function initUserCategories (categories) {
    return {
        type: INIT_USER_CATEGORIES,
        value: categories
    }
}