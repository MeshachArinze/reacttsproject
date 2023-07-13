import React from 'react'

const Watch = () => {
  return (
    <section class="showcase">
      <div class="showcase-container case2">
        <div class="showcase-img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div class="downloading">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt=""
            />
            <div class="download-text">
              <h1>Stranger Things</h1>
              <p>Downloading...</p>
            </div>
          </div>
        </div>
        <div class="inner-container">
          <div class="inner-title">
            <h1>Download your shows to watch offline.</h1>
          </div>
          <div class="inner-text">
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch