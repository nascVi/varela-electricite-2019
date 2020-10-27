/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { css, jsx } from '@emotion/core'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'

const ThumbnailGallery = () => {
  const [sicons, setSIcons] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/nascVi/43d7d5abdaeaaa6ffa8bcba9e6e5ade3/raw/74a4e525bd049384244de76d7e95a5bd1cc48024/data.json'
      )
      .then(res => setSIcons(res.data.sicons))
  }, [])

  const renderSIcons = () =>
    sicons.length ? (
      <Fragment>
        <ActiveThumbnailWindow activeSIcon={sicons[activeIndex]} />
        <ThumbnailGrid sicons={sicons} onClick={handleClick} />
      </Fragment>
    ) : null

  const renderInfo = () =>
      sicons.length ? (
      <Fragment>
        <h1 className="rightGRenT">{sicons[activeIndex].title}</h1>
        <p className="rightGRenP">{sicons[activeIndex].info}</p>
      </Fragment>
    ) : null

  const handleClick = e => {
    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
  }

  return (
    <div css={ThumbnailGalleryCSS}>
      <div className="leftGRen">
        <div className="leftGRenB">
          {renderSIcons()}
        </div>
      </div>

      <div className="rightGRen">
          <div className="rightGRenB">
          {renderInfo()}
          </div>
        </div>
    </div>
  )
}

const ThumbnailGalleryCSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  border: 1.5px solid rgb(246, 246, 246);
  border-radius: 3px;
  background: rgb(246, 246, 246);


  .left,
  .right {
    flex: 3;
  }

`

export default ThumbnailGallery
