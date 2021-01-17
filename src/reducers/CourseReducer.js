import { INIT_CONTENT_LIST, INIT_COURSE_INFO, OPEN_REVIEW_COURSE, RELOAD, RESET_DOWNLOAD_PROCESS, SHOW_VIDEO, UPDATE_ACTIVE_INDEX, UPDATE_DOWNLOAD_PROCESS, UPDATE_REGISTER } from "../globals/ActionTypes/CourseType";

const CourseReducer = (state, action) => {
    switch (action.type) {
        case INIT_CONTENT_LIST:
            return { ...state, contentList: action.value }
        case UPDATE_REGISTER:
            return { ...state, register: action.value }
        case INIT_COURSE_INFO:
            return { ...state, course: action.value }
        case OPEN_REVIEW_COURSE:
            return { ...state, openReviewCourse: action.value }
        case RELOAD:
            return { ...state, reload: action.value }
        case SHOW_VIDEO:
            return {...state, video: action.value}
        case UPDATE_ACTIVE_INDEX:
            return {...state, activeIndex: action.value}
        case UPDATE_DOWNLOAD_PROCESS:
            return {...state, processDownload: {...state.processDownload,...action.value}}
        case RESET_DOWNLOAD_PROCESS:
            return {...state, processDownload: action.value}
        default:
            return state;
    }
}

export default CourseReducer;