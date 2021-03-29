
export const SET_SHOW_MODAL = '[MODAL APP] SET SHOW MODAL';
export const SET_SELECTED_IMAGE = '[IMAGE APP] SET SELECTED IMAGE';
export const SET_SHOW_MODAL_DETAIL = '[MODAL APP] SET SHOW MODAL DETAIL';

export const setShowModal = (flag) => {
    return {
        type: SET_SHOW_MODAL,
        payload: flag,
    }
}

export const setSelectedImage = (imgNum) => {
    return {
        type: SET_SELECTED_IMAGE,
        payload: imgNum,
    }
}

export const setShowModalDetail = (flag) => {
    return {
        type: SET_SHOW_MODAL_DETAIL,
        payload: flag,
    }
}