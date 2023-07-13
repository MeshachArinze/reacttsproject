import React from 'react'
import { Link, ScrollRestoration } from 'react-router-dom';
import Nav from './Nav';

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <div className="logo">Creative Agency</div>
        <div className="toggle"></div>

        <Nav />
      </header>

      <section className="home">
        <img src="/images/home-img.jpg" className="home-img" alt="" />
        <div className="home-content">
          <h1>
            We help to achieve <br />
            your goals.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
            nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
            aspernatur culpa maxime laboriosam, impedit quae officiis
            consectetur
          </p>
          <Link to="/contact/*" className="btn">
            Get Started
          </Link>
        </div>
      </section>
        
    </div>
  );
}

export default Home