import axios from 'axios';
const CLIENT_ID = 'dE30n6DCz7vQP0wYMPEM9YMlUb_ORGIUAI54hgmV2uo';

export const GET_IMAGE = '[IMAGE APP] GET IMAGE';
export const SET_PAGE_NUMBER = '[IMAGE APP] SET PAGE NUMBER';
export const SET_IS_LOADING = '[IMAGE APP] SET IS LOADING';
export const SET_LOADED_COUNT = '[IMAGE APP] SET LOADED COUNT';

export const getImage = (pageNum) => dispatch => {
    axios
    .get(
        `https://api.unsplash.com/photos/?page=${pageNum}&per_page=15&client_id=${CLIENT_ID}`
    )
    .then((res) => {
        dispatch({
            type: GET_IMAGE,
            payload: res.data,
        });
        dispatch({
            type: SET_IS_LOADING,
            payload: false,
        })
    })
    .catch((e) => {
        console.log(e.response);
    });
}

export const setPageNum = (data) => {
    return {
        type: SET_PAGE_NUMBER,
        payload: data,
    }
}

export const setIsLoading = (flag) => {
    return {
        type: SET_IS_LOADING,
        payload: flag,
    }
}

export const setLoadedCount = (num) => {
    return {
        type: SET_LOADED_COUNT,
        payload: num,
    }
}