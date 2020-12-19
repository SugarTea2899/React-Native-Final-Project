import { INIT_CONTENT_LIST, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

const CourseReducer = (state, action) => {
    switch (action.type) {
        case INIT_CONTENT_LIST:
            return {...state, contentList: action.value}
        case UPDATE_REGISTER:
            return {...state, register: action.value}
        default:
            return state;
    }
}

export default CourseReducer;