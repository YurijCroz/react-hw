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
    setCurrentImgId(currentImgId => {
      const prev = currentImgId <= 0 ? images.length - 1 : currentImgId - 1
      return prev
  })
  }
  const setNextSlide = () => {
    setCurrentImgId(currentImgId => {
      const next = currentImgId === images.length - 1 ? 0 : currentImgId + 1
      return next
  })
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
