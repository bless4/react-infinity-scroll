import { 
    GET_IMAGE,
    SET_PAGE_NUMBER,
    SET_IS_LOADING,
    SET_LOADED_COUNT,
} from '../actions/image';

const initialState = {
    image: [],
    pageNum: 0,
    isLoading: false,
    loadedCount: 0,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case GET_IMAGE:
        return {
            ...state,
            image: [...state.image, ...action.payload],
        }
    case SET_PAGE_NUMBER:
        return {
            ...state,
            pageNum: action.payload.pageNum,
            isLoading: action.payload.isLoading,
        }
    case SET_IS_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        }
    case SET_LOADED_COUNT:
        return {
            ...state,
            loadedCount: action.payload,
        }
    default:
        return state
    }
}