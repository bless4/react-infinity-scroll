import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { setShowModal, setSelectedImage, setShowModalDetail } from '../../actions/modal';
import ImageInfo from '../ImageInfo';

const useStyle = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    overflow: "visible",
    display: "flex",
    justifyContent: "center",
    outline: "none",
    backgroundColor: "white",
    width: "80%",
    height: "95%",
    borderRadius: "2px",
    alignItems: "center",
  },
  image: {
    maxWidth: "95%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  infoButton: {
    position: "absolute",
    backgroundColor: "black",
    border: 'none',
    width: "80px",
    height: "25px",
    outline: "none",
    bottom: "10px",
    right: "15px",
    fontFamily: "Roboto",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      backgroundColor:"green"
    },
  },
  infoIcon: {},
  arrow: {
    position: "absolute",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: "35px",
    transition: "0.2s",
    color: "darkgrey",
    "&:hover": {
      color: "white",
    },
  },
  forwardArrow: {
    right: "-50px",
  },
  backwardArrow: {
    left: "-50px",
  },
});

const ImageModal = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const images = useSelector(state => state.image.image);

  const isOpen = useSelector(state => state.modal.isOpen);
  const current_image_num = useSelector(state => state.modal.curSelNum);

  const handleClose = () => {
    dispatch(setShowModal(false));
  };

  const handlePrevious = () => {
    dispatch(setSelectedImage(current_image_num - 1));
  };

  const handleNext = () => {
    dispatch(setSelectedImage(current_image_num + 1));
  };

  const handleInfoIconClick = () => {
    dispatch(setShowModalDetail(true));
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "black", opacity: 0.8 },
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.imageContainer}>
            {
              current_image_num !== 0 && (
                <button
                  className={[classes.backwardArrow, classes.arrow].join(" ")}
                  onClick={handlePrevious}
                >
                  <ArrowBackIosIcon fontSize='large' />
                </button>
              )
            }

            {images.length &&
            <img
              className={classes.image}
              src={images[current_image_num].urls.regular}
              alt=""
            />
            }

            {
              current_image_num !== images.length - 1 && (
                <button
                  className={[classes.forwardArrow, classes.arrow].join(" ")}
                  onClick={handleNext}
                >
                  <ArrowForwardIosIcon fontSize='large' />
                </button>
              )
            }

            <button
              className={classes.infoButton}
              onClick={handleInfoIconClick}
            >
              Details
            </button>
          </div>
        </Fade>
      </Modal>
      <ImageInfo />
    </div>
  );
};

export default ImageModal;
