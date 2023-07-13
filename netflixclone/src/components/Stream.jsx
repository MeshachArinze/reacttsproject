import React from 'react'

const Stream = () => {
  return (
    <section class="showcase">
      <div class="showcase-container case3">
        <div class="inner-container">
          <div class="inner-title">
            <h1>Watch everywhere.</h1>
          </div>
          <div class="inner-text">
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
          </div>
        </div>
        <div class="showcase-img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt=""
          />
          <video class="showcase-animation" autoplay playsinline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Stream