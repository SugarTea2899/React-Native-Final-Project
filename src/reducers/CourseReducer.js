import { INIT_CONTENT_LIST, INIT_COURSE_INFO, OPEN_REVIEW_COURSE, RELOAD, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

const CourseReducer = (state, action) => {
    switch (action.type) {
        case INIT_CONTENT_LIST:
            return { ...state, contentList: action.value }
        case UPDATE_REGISTER:
            return { ...state, register: action.value }
        case INIT_COURSE_INFO:
            return {...state, course: action.value}
        case OPEN_REVIEW_COURSE:
            return {...state, openReviewCourse: action.value}
        case RELOAD:
            return {...state, reload: action.value}
        default:
            return state;
    }
}

export default CourseReducer;