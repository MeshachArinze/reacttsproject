import React from "react";
import { Link} from "react-router-dom";
import { navIcon, navdata } from "../data";

const Nav: React.FC = () => {
  return (
    <div className="navigation">
      <ul>
        { navdata?.map((data) => {
          return (
            <li key={data.id}>
              <Link to={data.ref}>{data.name}</Link>
            </li>
          );
        }) }
      </ul>

      <div className="social-bar">
        <ul>
          {navIcon?.map((icon) => (
            <li key={icon["id"]}>
              <Link to={icon.to}>
                <img src={icon["src"]} alt="" />
              </Link>
            </li>
          ))}
        </ul>
        <Link to="mailto:you@email.com" className="email-icon">
          <img src="/images/email.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
