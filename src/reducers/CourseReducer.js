import { INIT_CONTENT_LIST, INIT_COURSE_INFO, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

const CourseReducer = (state, action) => {
    switch (action.type) {
        case INIT_CONTENT_LIST:
            return { ...state, contentList: action.value }
        case UPDATE_REGISTER:
            return { ...state, register: action.value }
        case INIT_COURSE_INFO:
            return {...state, course: action.value}
        default:
            return state;
    }
}

export default CourseReducer;