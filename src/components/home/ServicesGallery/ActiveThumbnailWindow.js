/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const ActiveThumbnailWindow = ({ activeSIcon }) => (
  <div
    css={css`
      margin-top: 7%;
      height: 70.5%;
      width: 100%;
      position: relative;
      color: white;

      img {
        width: 100%;
        height: 100%;
      }
    `}
  >
    <img src={activeSIcon.sUrl} />
  </div>
)

export default ActiveThumbnailWindow
