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
        'https://gist.githubusercontent.com/nascVi/43d7d5abdaeaaa6ffa8bcba9e6e5ade3/raw/c02a6f90b592984f72268fd0e33f1ca03753492f/data.json'
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
        <h1>{sicons[activeIndex].title}</h1>
        <p>{sicons[activeIndex].info}</p>
      </Fragment>
    ) : null

  const handleClick = e => {
    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
  }

  return (
    <div css={ThumbnailGalleryCSS}>
      <div className="left">{renderSIcons()}</div>
      <div className="right">{renderInfo()}</div>
    </div>
  )
}

const ThumbnailGalleryCSS = css`
  background: #ddd;
  height: 500px;
  width: 1024px;
  margin: 40px auto;
  display: flex;

  .left,
  .right {
    flex: 1;
  }

  .right {
    padding: 40px;
  }
`

export default ThumbnailGallery
