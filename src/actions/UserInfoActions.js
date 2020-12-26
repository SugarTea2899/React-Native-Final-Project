import { SHOW_VIDEO } from "../globals/ActionTypes/CourseType";
import { INIT_USER_CATEGORIES, INIT_USER_INFO, RELOAD_PROFILE_SCREEN } from "../globals/ActionTypes/UserInfoActionType";

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

export function reloadProfileScreen() {
    return {
        type: RELOAD_PROFILE_SCREEN,
        value: Math.random()
    }
}

