import logo from "../assets/Layer2.png";
import atDigital from "../assets/Group94.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <div className="logoImg">
            <img src={logo} alt="Company Logo" />
            <img src={atDigital} alt="Company Name" />
          </div>

          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="tech-services-container">
          <div className="tech-container">
            <p>Our Technologies</p>
            <li>React JS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </div>

          <div className="services-container">
            <p>Our Services</p>
            <li>Social media Marketing</li>
            <li> Web & Mobile App Development</li>
            <li> Data & Analytics</li>
          </div>
        </div>
      </div>

      <div className="terms">
        <p>Privacy Policy</p> |<p>Terms & Conditions</p>
      </div>
    </footer>
  );
}
