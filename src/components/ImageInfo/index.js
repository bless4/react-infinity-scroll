import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from '@material-ui/core/styles';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useMediaQuery } from "react-responsive";

import { useSelector, useDispatch } from 'react-redux';
import { setShowModalDetail } from '../../actions/modal';

TimeAgo.addLocale(en);

const useStyle = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    background:
      "linear-gradient(0deg, rgba(255,255,255,0.9471989479385504) 0%, rgba(247,247,247,0.9556023092830882) 48%);",
    outline: "none",
    borderRadius: "10px",
    maxWidth: (props) => (props ? "500px" : "90%"),
    fontFamily: "Roboto",
    overflow: 'hidden',
    boxShadow: '5px 5px 5px #555555',
  },
  imageDescription: {
    display: "table",
    textAlign: "center",
    fontFamily: "Patua one",
    fontSize: (props) => (props ? "30px" : "18px"),
    background: '#222222',
    color: 'white',
    width: '100%',
    padding: '10px 20px',
  },
  dataItemsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexWrap: "wrap",
    background: 'green',
    color: 'white',
    paddingBottom: (props) => (props ? "20px" : "10px"),
  },
  dataItem: {
    display: "flex",
    flexDirection: "column",
    flexBasis: '33.33%',
    justifyItems: "center",
    alignItems: "center",
    width: "100px",
    color: 'white',
    marginBottom: (props) => (props ? '15px' : '10px'),
  },
  dataItemTitle: {
    color: "white",
    fontSize: (props) => (props ? "20px" : "14px"),
    lineHeight: '1.2',
  },
  dataItemValue: {
    fontSize: (props) => (props ? "16px" : "12px"),
    textAlign: "center",
    lineHeight: '1.2',
  },
  creatorHandle: {
    display: "flex",
    flexDirection: "row",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: (props) => (props ? "20px" : "10px"),
    paddingTop: (props) => (props ? "20px" : "10px"),
    background: 'green',
    width: '100%',
  },
  profileImage: {
    borderRadius: "50%",
    marginRight: "10px",
  },
  unsplashLink: {
    textDecoration: "none",
    color: "purple",
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '&:hover': {
      textDecoration: 'none',
    }
  }
});

function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return "Untitled";
  }
}

const ImageInfoDataItem = ({ title, value, isDesktop }) => {
  const classes = useStyle(isDesktop);
  return (
    <div className={classes.dataItem}>
      <div className={classes.dataItemTitle}>{title}</div>
      <div className={classes.dataItemValue}>{value}</div>
    </div>
  );
};

const CreatorHandle = ({ profileURL, imgURL, userName, isDesktop }) => {
  const classes = useStyle(isDesktop);
  return (
    <div className={classes.creatorHandle}>
      <a className={classes.link} href={profileURL}>
        <img className={classes.profileImage} src={imgURL} width="30px" alt="" />
        <div>{userName}</div>
      </a>
    </div>
  );
};



const ImageInfo = () => {
  const isDesktop = useMediaQuery({ query: "(min-device-width: 1224px)" });
  const classes = useStyle(isDesktop);
  const timeAgo = new TimeAgo("en-US");

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpenDetail);
  const images = useSelector(state => state.image.image);
  const current_image_num = useSelector(state => state.modal.curSelNum);

  const handleClose = () => {
    dispatch(setShowModalDetail(false));
  };

  if(images.length){
    return (
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "white", opacity: 0.4 },
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.imageInfo}>
            <div className={classes.imageDescription}>
              {images[current_image_num].description
                ? capitalizeFirstLetter(images[current_image_num].description)
                : capitalizeFirstLetter(images[current_image_num].alt_description)}
            </div>
            <CreatorHandle
              profileURL={images[current_image_num].user.links.html}
              imgURL={images[current_image_num].user.profile_image.medium}
              userName={images[current_image_num].user.username}
              isDesktop={isDesktop}
            />
            <div className={classes.dataItemsContainer}>
              <ImageInfoDataItem
                title="Created"
                value={timeAgo.format(new Date(images[current_image_num].created_at))}
              />
              <ImageInfoDataItem
                title="Full name"
                value={
                  (images[current_image_num].user.first_name ?? "") +
                  " " +
                  (images[current_image_num].user.last_name ?? "")
                }
              />
              <ImageInfoDataItem
                title="User location"
                value={images[current_image_num].user.location ?? "?"}
              />
              <ImageInfoDataItem title="Liked" value={images[current_image_num].likes + " times"} />
              <ImageInfoDataItem title="Width" value={images[current_image_num].width + "px"} />
              <ImageInfoDataItem title="Height" value={images[current_image_num].height + "px"} />
            </div>
          </div>
        </Fade>
      </Modal>
    );    
  } else {
    return null;
  }
  
};

export default ImageInfo;
