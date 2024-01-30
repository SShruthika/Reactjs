import React, { useState } from 'react';
import './Portfolio.css'; // Create a CSS file for your styles and import it here
const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a href="#">Logo.</a>
        </div>
        <input type="checkbox" id="click" checked={menuOpen} onChange={handleMenuClick}/>
        <label htmlFor="click" className="mainicon">
          <div className="menu">
            <i className="bi bi-list"></i>
          </div>
        </label>
        <nav>
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section>
        <div className="main">
          <div className="detail">
            <h1>
              <span>Hi, It's Me</span> <br /> I'm <span style={{ color: '#00E8F8' }}>Aura</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.
            </p>
            <div className="social">
              <a href="https://github.com/bikashdev01/">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://t.me/web_devs_i">
                <i className="bi bi-telegram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vikash-web-dev/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@Web_Devs__">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          <div className="images">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSzJb6df7yI9iOUEkwtnqdC7kO568QMb0MLsuLDK6oMR4RgdxEKa6d1v4eWsL7WLQARMjiuuJxnM0L7b35l3tKoQo4YeFRBrp2dxmyki1Uan83GUvR9DynDiABrhuLl160vMx8oLYOMfMFejPWv5SIQgN_VKJBXIolJsCPgh1l3xEkdqmmiB99Bvvhhhw/s612/pass.png"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
