'use strict'

import React, {useState} from 'react';
import Controller from './Controller';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import Slide from './Slide';


export default function Slider(props) {
  const {images} = props;
  const [currentImgId, setCurrentImgId] = useState(0);
  const setPrevSlide = () => {
    currentImgId <= 0 
    ? setCurrentImgId(images.length-1)
    : setCurrentImgId(currentImgId -1);
  }
  const setNextSlide = () => {
    currentImgId >= images.length-1
    ? setCurrentImgId(0)
    : setCurrentImgId(currentImgId +1);
  }
  return (
    <div className={styles.container}>
      <Slide  images={images} currentImgId={currentImgId} />
      <Controller setNextSlide={setNextSlide} setPrevSlide={setPrevSlide}/>
    </div>
  )
}


Slider.propTypes = {
  images: PropTypes.array.isRequired
}
