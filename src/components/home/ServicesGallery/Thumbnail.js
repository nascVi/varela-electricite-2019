/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
// import { Image } from "cloudinary-react";

const SIcon = ({ sUrl, index, onClick }) => (
  <div
    css={css`
      height: 49.9%;
      width: 24.7%;
      margin-left: .3%;
      position: relative;
      cursor: pointer;
      
      img {
        width: 100%;
        height: 100%;
        z-index: 99;
      }
    `}
  >
    <img src={sUrl} data-index={index} onClick={onClick} />
  </div>
)

export default SIcon
