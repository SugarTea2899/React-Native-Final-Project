import { INIT_CONTENT_LIST, INIT_COURSE_INFO, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

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

export function initCourseInfo(course){
    return {
        type: INIT_COURSE_INFO,
        value: course
    }
}