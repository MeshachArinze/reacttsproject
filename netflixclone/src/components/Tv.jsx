import React from 'react'

const Tv = () => {
  return (
    <section class="showcase">
      <div class="showcase-container case1">
        <div class="inner-container">
          <div class="inner-title">
            <h1>Enjoy on your TV.</h1>
          </div>
          <div class="inner-text">
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
        </div>
        <div class="showcase-img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video class="showcase-animation" autoplay playsinline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Tv