import React from 'react'

const Container = () => {
  return (
    <>
      <div class="inner-container">
        <div class="inner-title">
          <h1>Unlimited movies, TV shows, and more.</h1>
        </div>
        <div class="inner-text">
          <p>Watch anywhere. Cancel anytime.</p>
        </div>

        <div class="email-form">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div class="get-started">
            <input type="text" name="" id="" placeholder="Email address" />
            <a href="" class="btn-lg">
              Get started <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </>
  );
}

export default Container