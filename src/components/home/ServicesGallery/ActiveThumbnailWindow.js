/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const ActiveThumbnailWindow = ({ activeSIcon }) => (
  <div
    css={css`
      height: 65%;
      width: 100%;
      background: #333;
      position: relative;

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
