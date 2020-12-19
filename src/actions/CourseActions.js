import { INIT_CONTENT_LIST, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

export function initContentList(contentList) {
    return {
        type: INIT_CONTENT_LIST,
        value: contentList
    }
}

export function updateRegister(registerStatus){
    return {
        type: UPDATE_REGISTER,
        value: registerStatus
    }
}