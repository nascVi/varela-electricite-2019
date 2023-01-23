import React from 'react';

import './carousel.scss'
// https://codepen.io/studiojvla/pen/qVbQqW
const Carousel = () => (
    <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1622800029/partners-logos/7-pl_p5y20t.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:fdfdfd/v1623398806/partners-logos/2-pl_bumuyl.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1622800028/partners-logos/4-pl_c8yc7s.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1623398806/partners-logos/1-pl_v59xid.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1623398806/partners-logos/6-pl_cttvbk.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:ffffff/v1623399383/partners-logos/3-pl_dicg17.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://res.cloudinary.com/nascvi/image/upload/b_rgb:fffbfb/v1622800028/partners-logos/5-pl_becgqm.png" height="100" width="250" alt="" />
          </div>
        </div>
    </div>
);

export default Carousel;
