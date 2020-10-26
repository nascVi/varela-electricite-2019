/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const ActiveThumbnailWindow = ({ activeSIcon }) => (
  <div
    css={css`
      height: 80%;
      width: 100%;
      background: rgba(246, 246, 246, 0.8);
      position: relative;
      color: white;

      img {
        width: 70%;
        height: 70%;
      }
    `}
  >
    <img src={activeSIcon.sUrl} />
  </div>
)

export default ActiveThumbnailWindow
