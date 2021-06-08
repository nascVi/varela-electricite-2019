/** @jsx jsx */
import { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { jsx } from '@emotion/core'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'

const ThumbnailGallery = () => {
  const [sicons, setSIcons] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/nascVi/43d7d5abdaeaaa6ffa8bcba9e6e5ade3/raw/a2d697f6a3eaa14951db379056f0a14e5129b528/data.json'
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
        <h5 className="rightGRenP">{sicons[activeIndex].info}</h5>
      </Fragment>
    ) : null

  const handleClick = e => {
    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
  }

  return (
    <div className="thumbnailG">
      <div className="leftGRen">
        <div className="leftGRenB">
          {renderSIcons()}
        </div>
      </div>

      <div className="rightGRen">
          <h5 className="rightGRenB">
          {renderInfo()}
          </h5>
        </div>
    </div>
  )
}


export default ThumbnailGallery
