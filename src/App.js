import React from 'react';
import './App.css'; // keep this
// ❌ Remove this line: import profile from './assets/profile.jpg';

function App() {
  return (
    <main className="app-container">
      <section className="hero-section">
        {/* ✅ Use the public path */}
        <img src="/profile.jpg" alt="Nima Fidaar" className="profile-img" />
        <div className="hero-text">
          <h1>Nima Fidaar</h1>
          <h2>AI Developer | Fintech Innovator | Tech Educator</h2>
          <p>
            Builder of <strong>Baro AI</strong>, <strong>Sigma Wallet</strong>, and <strong>WalaalFund</strong>. Tech leader with experience at global stages including <strong>Dubai</strong>, <strong>Nairobi</strong>, and the <strong>USA</strong>.
          </p>
          <div className="hero-buttons">
            <a href="/cv.pdf" download className="btn primary">Download CV</a>
            <a href="#contact" className="btn outline">Hire Me</a>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h3>Featured Projects</h3>
        <ul>
          <li><strong>Someval Somali NLP:</strong> First Somali AI toolkit on Hugging Face</li>
          <li><strong>Xareeye AI:</strong> East Africa’s first job automation AI</li>
          <li><strong>AmanSix:</strong> AI-based emergency alert app with motion detection</li>
        </ul>
      </section>

      <section className="experience-section">
        <h3>In the Spotlight</h3>
        <ul>
          <li>🎙️ Speaker – MoneyConf Africa, Gulf TechSummit</li>
          <li>🏛️ Lecturer – Golis & New Generation University</li>
          <li>🌍 Former UN & ActionAid Tech Consultant</li>
        </ul>
      </section>

      <section className="contact-section" id="contact">
        <h3>Contact Me</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="5" placeholder="Your message..." required></textarea>
          <button type="submit" className="btn primary">Send</button>
        </form>
      </section>

      <footer className="footer">&copy; {new Date().getFullYear()} Nima Fidaar</footer>
    </main>
  );
}

export default App;
/// END
