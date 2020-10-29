/** @jsx jsx */
// import React from 'react'
import { css, jsx } from '@emotion/core'

const ActiveThumbnailWindow = ({ activeSIcon }) => (
  <div
    css={css`
      height: 70.5%;
      width: 100%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }
    `}
  >
    <img src={activeSIcon.sUrl} alt="asthumbnail"/>
  </div>
)

export default ActiveThumbnailWindow
