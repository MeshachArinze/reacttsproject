import React from 'react'
import { Link } from "react-router-dom"
import Nav from './Nav';
// import { useNavigation } from 'react-router-dom';

const Contact: React.FC = () => {
  //  const navigation = useNavigation();

  //  const text =
  //    navigation.state === "submitting"
  //      ? "Saving..."
  //      : navigation.state === "loading"
  //      ? "Saved!"
  //      : "Go";
  return (
    <div>
      <header>
        <div className="logo">Creative Agency</div>
        <div className="toggle"></div>
        <Nav />
      </header>

      <section>
        <div className="title">
          <h1>Contact us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore
          </p>
        </div>
        <div className="contact">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="input50">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input50">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="row">
                <div className="input50">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input50">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="row">
                <div className="input100">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="input100">
                  <button type="submit" >submit</button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-box">
              <img src="/images/Linkddress.png" className="contact-icon" alt="" />
              <div className="details">
                <h4>Address</h4>
                <p>28 Neon Tower, New York City, USA</p>
              </div>
            </div>
            <div className="info-box">
              <img src="/images/email.png" className="contact-icon" alt="" />
              <div className="details">
                <h4>Email</h4>
                <Link to="mailto:anyone@example.com">anyone@example.com</Link>
                <Link to="mailto:anyone@example.com">anyone@example.com</Link>
              </div>
            </div>
            <div className="info-box">
              <img src="/images/call.png" className="contact-icon" alt="" />
              <div className="details">
                <h4>Call</h4>
                <Link to="tel:+19785555555">+1 978 555 5555</Link>
                <Link to="tel:+19784444444">+1 978 555 4444</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact