import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>Questions? Contact us.</p>
      <div class="links">
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Speed Test</li>
          <li>Legal Notices</li>
          <li>Netflix Originals</li>
        </ul>
        <div class="language" id="language-btn">
          <i class="fas fa-globe"></i> English
          <i class="fas fa-sort-down lg"></i>
          <div class="dropdown-list">
            <ul class="" id="language-dropdown">
              <li>中文</li>
              <li>English</li>
            </ul>
          </div>
        </div>
        <p>NetFlix Taiwan</p>
      </div>
    </footer>
  );
}

export default Footer