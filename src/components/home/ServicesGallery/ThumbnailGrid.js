/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import SIcon from './Thumbnail'

const ThumbnailGrid = ({ sicons, onClick }) => (
  <div
    css={css`
      height: 40%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {sicons.map((sicon, i) => (
      <SIcon
        key={sicon.sUrl}
        sUrl={sicon.sUrl}
        index={i}
        onClick={onClick}
      />
    ))}
  </div>
)

export default ThumbnailGrid
