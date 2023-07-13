import React from "react";
import Accordion from "./Accordion";
import Container from "./Container";
import Faq from "./Faq";
import Footer from "./Footer";
import Nav from "./Nav";
import Stream from "./Stream";
import Tv from "./Tv";
import Watch from "./Watch";

const Header = () => {
  return (
    <div>
      <header class="header">
        <Nav />
        <Container />
        
      </header>

      <Tv />
      <Watch />
      <Stream />

      <Faq />
      {/* <section class="faq">
      <div class="inner-container">
        <div class="inner-title">
          <h1>Frequently Asked Questions</h1>
        </div>
      <Accordion />
      </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Header;
