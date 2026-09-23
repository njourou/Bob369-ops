"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    title: "Electrical",
    copy: "Installation and maintenance for homes and businesses.",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "Solar Energy",
    copy: "Clean power designed around how you use energy.",
    icon: "☀",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "HVAC",
    copy: "Comfortable and efficient climate control systems.",
    icon: "◌",
    image:
      "https://images.unsplash.com/photo-1631545806609-4d6f2e2c5c0b?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "CCTV and Security",
    copy: "Security systems for homes, offices and businesses.",
    icon: "◉",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "UPS Systems",
    copy: "Power protection for equipment that cannot stop.",
    icon: "▣",
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=72"
  },
  {
    title: "Generators",
    copy: "Reliable backup power and maintenance.",
    icon: "⚙",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=72"
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [note, setNote] = useState("");

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = String(form.get("service") || "");
    const subject = encodeURIComponent(`Project enquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nEmail: ${form.get("email")}\nService: ${service}\n\n${form.get("message") || ""}`
    );

    setNote("Opening your email app...");
    window.location.href = `mailto:info@twobobenterprises.co.ke?subject=${subject}&body=${body}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header" id="top">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Two Bob Enterprises home">
            <img src="/assets/logo.webp" alt="Two Bob Enterprises" />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Get a quote <span>→</span>
          </a>

          <button
            className="menu"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {["services", "projects", "about", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="eyebrow reveal">TWO BOB ENTERPRISES</p>
            <h1 className="reveal delay-1">
              Powering spaces
              <br />
              <span>that matter.</span>
            </h1>
            <p className="hero-copy reveal delay-2">
              Electrical, solar, HVAC and security solutions for homes and
              businesses.
            </p>
            <div className="hero-actions reveal delay-3">
              <a className="btn btn-green" href="#contact">
                Start a project <span>→</span>
              </a>
              <a className="text-link" href="#services">
                View services <span>↓</span>
              </a>
            </div>
          </div>
          <div className="hero-line" aria-hidden="true" />
        </section>

        <section className="intro section">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">WHAT WE DO</p>
              <h2>Engineering that works.</h2>
            </div>
            <p className="intro-copy">
              We design, install and maintain the systems that keep spaces
              running.
            </p>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-kicker">OUR SERVICES</p>
                <h2>Built around your needs.</h2>
              </div>
              <a className="text-link dark-link" href="#contact">
                Talk to us <span>→</span>
              </a>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div
                    className="service-image"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  />
                  <div className="service-body">
                    <div className="icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <a href="#contact">
                      Explore <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project-feature section" id="projects">
          <div className="container feature-grid">
            <div className="feature-image" />
            <div className="feature-copy">
              <p className="section-kicker">ONE TEAM</p>
              <h2>One partner for the systems your space depends on.</h2>
              <p>
                From power and cooling to security and backup, we bring the
                work together.
              </p>
              <a className="btn btn-dark" href="#contact">
                Discuss your project <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="stats section" id="about">
          <div className="container stats-grid">
            <div>
              <strong>2015</strong>
              <span>Established</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Core services</span>
            </div>
            <div>
              <strong>Kenya</strong>
              <span>Based in Nairobi</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Engineering partner</span>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="section-kicker">PROJECT ENQUIRY</p>
              <h2>Have a project in mind?</h2>
              <p>Tell us what you need. We will get back to you.</p>

              <div className="contact-detail">
                <span>Email</span>
                <a href="mailto:info@twobobenterprises.co.ke">
                  info@twobobenterprises.co.ke
                </a>
              </div>

              <div className="contact-detail">
                <span>Location</span>
                <strong>Nairobi, Kenya</strong>
              </div>
            </div>

            <form className="project-form" onSubmit={submitForm}>
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Service
                <select name="service" defaultValue="Electrical">
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Project details
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly what you need."
                />
              </label>
              <button className="btn btn-green form-submit" type="submit">
                Send enquiry <span>→</span>
              </button>
              <p className="form-note" aria-live="polite">
                {note}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <img src="/assets/logo.webp" alt="Two Bob Enterprises" />
          <p>Electrical. Solar. HVAC. Security.</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="container copyright">
          © 2026 Two Bob Enterprises Ltd.
        </div>
      </footer>
    </>
  );
}