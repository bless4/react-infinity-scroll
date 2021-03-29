import { 
    SET_SHOW_MODAL,
    SET_SELECTED_IMAGE,
    SET_SHOW_MODAL_DETAIL,
} from '../actions/modal'

const initialState = {
    curSelNum: 0,
    isOpen: false,
    isOpenDetail: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case SET_SHOW_MODAL:
        return {
            ...state,
            isOpen: action.payload
        }
    case SET_SELECTED_IMAGE:
        return {
            ...state,
            curSelNum: action.payload,
        }
    case SET_SHOW_MODAL_DETAIL:
        return {
            ...state,
            isOpenDetail: action.payload,
        }
    default:
        return state
    }
}