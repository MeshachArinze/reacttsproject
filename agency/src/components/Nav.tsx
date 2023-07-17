import { navIcon, navdata } from "../data";

const Nav = () => {
  return (
    <div className="navigation">
      <ul>
        { navdata.map((data) => {
          return (
            <li key={data.id}>
              <a href={data.ref}>{data.name}</a>
            </li>
          );
        }) }
      </ul>

      <div className="social-bar">
        <ul>
          {navIcon.map((icon) => (
            <li key={icon["id"]}>
              <a href={icon.to}>
                <img src={icon["src"]} alt="" />
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:you@email.com" className="email-icon">
          <img src="/images/email.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
