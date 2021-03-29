import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { setShowModal, setSelectedImage } from '../../actions/modal';
import { useDispatch, useSelector } from 'react-redux';

const useStyle = makeStyles({
    imageContainer: {
      position: "relative",
      borderRadius: "10px",
      "&:hover": {
        cursor: "zoom-in",
      },
    },
    image: {
      position: "relative",
      width: "100%",
      borderRadius: "3px",
      zIndex: -1,
    },
  });

const Image = ({ imgURL, index }) => {
    const dispatch = useDispatch();
    

    const classes = useStyle();

    const handleModalOpen = () => {
    dispatch(setSelectedImage(index));
    dispatch(setShowModal(true));
}

  return (
    <div className={classes.imageContainer} onClick={handleModalOpen}>
      <img className={classes.image} src={imgURL} alt="" />
    </div>
  );
};

export default Image;
