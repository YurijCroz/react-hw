'use strict'
import React, {useCallback} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "./Slide.module.scss"


export default function Slide(props) {
  const {images, currentImgId} = props
  const handle = useFullScreenHandle();
  return (
    <div>
      <FullScreen handle={handle}>
        <div className='fullscreen-enabled__div'>
          <img src={images[currentImgId]} alt="images" />
          <button onClick={handle.exit}>
            Exit fullscreen
          </button>
        </div>
      </FullScreen>
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>
    </div>
  )
}


//npm i react-full-screen