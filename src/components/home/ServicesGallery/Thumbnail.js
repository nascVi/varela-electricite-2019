/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Image } from "cloudinary-react";

const SIcon = ({ sUrl, index, onClick }) => (
  <div
    css={css`
      height: 50%;
      width: 25%;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    `}
  >
    <Image src={sUrl} data-index={index} onClick={onClick} />
  </div>
)

export default SIcon
