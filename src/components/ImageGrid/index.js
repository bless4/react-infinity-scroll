import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { makeStyles } from '@material-ui/core/styles';
import Image from '../Image';
import ImageModal from '../ImageModal';
import CircularProgress from "@material-ui/core/CircularProgress";

import { getImage, setLoadedCount, setPageNum } from '../../actions/image';

const useStyle = makeStyles({
    gridContainer: {
        width: '100%',
        height: '80vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
    },
    spinner: {
        margin: 'auto',
        color: "white !!!important",
    },
    mask: {
        position: 'fixed',
        left: '0',
        top: '20vh',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function ImageGrid(props) {
    const dispatch = useDispatch();

    const images = useSelector(state => state.image.image);
    const pageNum = useSelector(state => state.image.pageNum);
    const isLoading = useSelector(state => state.image.isLoading);
    const loadedCount = useSelector(state => state.image.loadedCount);

    const classes = useStyle();
    const gridRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const offset = 50;

    useEffect(() => {
        dispatch(getImage(pageNum));
    }, [pageNum]);

    useEffect(() => {
        if(loadedCount < images.length) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [images, loadedCount])

    const handleScroll = () => {
        const height = gridRef.current.clientHeight;
        const top = gridRef.current.scrollTop;
        const sHeight = gridRef.current.scrollHeight;

        if(top > sHeight-height-offset && !isLoading && !loading) {
            dispatch(setPageNum({
                pageNum: pageNum + 1,
                isLoading: true,
            }));
        }
    }

    const handleLoad = () => {
        dispatch(setLoadedCount(loadedCount+1));
    }
    

    return (
        <div className={classes.gridContainer} onScroll={handleScroll} ref={gridRef} 
                onLoad={handleLoad}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 400: 1, 800: 2, 1200: 3 }}
            >
                <Masonry gutter="1vw">
                    {images.map((data, index) => {
                    return (
                        <Image
                        key={index}
                        index={index}
                        imgURL={data.urls.regular}
                        />
                    );
                    })}
                </Masonry>
            </ResponsiveMasonry>
            <ImageModal />
            {loading &&
            <div className={classes.mask}>
                <CircularProgress
                    className={classes.spinner}
                    style={{ color: "white" }}
                />
            </div>}
        </div>
    );
}

export default ImageGrid;