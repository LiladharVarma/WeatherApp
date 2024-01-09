import React from "react";
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="heading">Weather App</div>

      <div className="navbar">
        <ul className="nav-items">
          <li><a href="https://openweathermap.org/forecast5#5days" target="blank">API Used</a></li>
          <li><a href="mailto:liladharvarma29@gmail.com">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
