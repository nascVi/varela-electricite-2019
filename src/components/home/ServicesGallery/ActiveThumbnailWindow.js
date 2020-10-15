/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const ActiveThumbnailWindow = ({ activeSIcon }) => (
  <div
    css={css`
      height: 80%;
      width: 100%;
      background: rgba(184, 184, 184, 0.2) 35%;
      position: relative;
      color: white;

      img {
        width: 70%;
        height: 70%;
      }
    `}
  >
    <img src={activeSIcon.sUrl} />
    <br/><h3>
      We are connected!👷💑💠🔌
      </h3>
  </div>
)

export default ActiveThumbnailWindow
