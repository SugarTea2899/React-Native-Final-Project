import { INIT_CONTENT_LIST, INIT_COURSE_INFO, OPEN_REVIEW_COURSE, RELOAD, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

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

export function openReviewCourse(open) {
    return {
        type: OPEN_REVIEW_COURSE,
        value: open,
    }
}

export function reload() {
    return {
        type: RELOAD,
        value: Math.random()
    }
}