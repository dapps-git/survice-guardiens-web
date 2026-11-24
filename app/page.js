import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import { site, images, services, systems, reasons, steps, nav } from "@/data/site";

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Service Guardians, I need AC service."
)}`;

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow light">AC &amp; HVAC Service · Varapuzha, Ernakulam</span>
              <h1>
                Expert <span className="accent">AC Service</span> for Homes &amp; Businesses
              </h1>
              <p>
                Repair, installation, uninstallation, maintenance, gas filling and AMC for
                every type of air conditioner — from split ACs to central chillers.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Book a Service <Icon name="arrow" size={18} />
                </a>
                <a href={`tel:+91${site.phones[1]}`} className="btn btn-ghost btn-lg">
                  <Icon name="phone" size={18} /> +91 {site.phones[1]}
                </a>
              </div>
              <ul className="hero-points">
                <li><Icon name="check" size={16} /> Residential</li>
                <li><Icon name="check" size={16} /> Commercial</li>
                <li><Icon name="check" size={16} /> Industrial</li>
                <li><Icon name="check" size={16} /> AMC Plans</li>
              </ul>
            </div>

            <div className="hero-media">
              <img src={images.hero} alt="Technician servicing a split air conditioner" />
              <div className="hero-card">
                <span className="hero-card-icon"><Icon name="snow" size={22} /></span>
                <div>
                  <strong>6 Services · 9 AC Systems</strong>
                  <span>One team for all your cooling needs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUICK CONTACT STRIP ================= */}
        <section className="features">
          <div className="container features-grid">
            <a className="feature" href={`tel:+91${site.phones[0]}`}>
              <div className="feature-icon"><Icon name="phone" size={22} /></div>
              <div>
                <h4>Call Us</h4>
                <p>+91 {site.phones[0]}</p>
              </div>
            </a>
            <a className="feature" href={waLink} target="_blank" rel="noopener noreferrer">
              <div className="feature-icon"><WhatsAppIcon size={22} /></div>
              <div>
                <h4>WhatsApp</h4>
                <p>+91 {site.phones[1]}</p>
              </div>
            </a>
            <a className="feature" href={`mailto:${site.email}`}>
              <div className="feature-icon"><Icon name="mail" size={22} /></div>
              <div>
                <h4>Email Us</h4>
                <p>{site.email}</p>
              </div>
            </a>
            <a className="feature" href={site.mapLink} target="_blank" rel="noopener noreferrer">
              <div className="feature-icon"><Icon name="pin" size={22} /></div>
              <div>
                <h4>Visit Us</h4>
                <p>Thevarkadu, Varapuzha</p>
              </div>
            </a>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="container about">
            <div className="about-media">
              <img src={images.about} alt="Service Guardians technician cleaning an AC filter" />
              <div className="about-badge">
                <Icon name="shield" size={28} />
                <div>
                  <strong>AC &amp; HVAC</strong>
                  <span>Specialists</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <span className="eyebrow">About Service Guardians</span>
              <h2>
                Your trusted partner for <span className="text-blue">complete AC care</span>
              </h2>
              <p>
                Based in Varapuzha, Ernakulam, Service Guardians provides end-to-end air
                conditioning services for homes, offices, shops and industrial facilities.
                Led by <strong>{site.owner}</strong>, our team handles everything from a
                single split AC to large chiller plants.
              </p>
              <ul className="checklist">
                <li><Icon name="check" size={18} /> Residential, commercial &amp; industrial</li>
                <li><Icon name="check" size={18} /> All major AC brands &amp; types</li>
                <li><Icon name="check" size={18} /> Transparent, affordable pricing</li>
                <li><Icon name="check" size={18} /> Annual Maintenance Contracts</li>
              </ul>
              <div className="about-cta">
                <a href={`tel:+91${site.phones[0]}`} className="call-card">
                  <span className="call-icon"><Icon name="phone" size={20} /></span>
                  <span>
                    <small>Call us anytime</small>
                    <strong>+91 {site.phones[0]}</strong>
                  </span>
                </a>
                <a href="#services" className="btn btn-primary">
                  Explore Services <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="section section-soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What We Do</span>
              <h2>
                AC Solutions – <span className="text-blue">Our Services</span>
              </h2>
              <p>Professional care for every stage of your air conditioner’s life.</p>
            </div>

            <div className="services-grid">
              {services.map((s, i) => (
                <article className="service-card" key={s.title}>
                  <div className="service-media">
                    <img src={s.image} alt={s.title} loading="lazy" />
                    <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="service-body">
                    <div className="service-icon">
                      <Icon name={s.icon} size={24} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                      "Hi, I'd like to enquire about " + s.title
                    )}`} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      Enquire now <Icon name="arrow" size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AC SYSTEMS ================= */}
        <section
          id="systems"
          className="systems"
          style={{ backgroundImage: `url(${images.commercial})` }}
        >
          <div className="systems-overlay" />
          <div className="container systems-inner">
            <div className="systems-text">
              <span className="eyebrow light">Systems We Handle</span>
              <h2>From home units to industrial chillers</h2>
              <p>
                Our technicians are experienced across residential, light-commercial and
                central HVAC equipment.
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                <WhatsAppIcon size={18} /> Ask about your system
              </a>
            </div>
            <div className="systems-grid">
              {systems.map((t) => (
                <div className="system-chip" key={t}>
                  <Icon name="snow" size={18} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section id="why" className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Why Us</span>
              <h2>
                Why Choose <span className="text-blue">Service Guardians?</span>
              </h2>
            </div>
            <div className="why-grid">
              {reasons.map((r, i) => (
                <div className={`why-card why-${i + 1}`} key={r.title}>
                  <div className="why-icon">
                    <Icon name={r.icon} size={26} />
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">How It Works</span>
              <h2>
                Simple, <span className="text-blue">hassle-free</span> service
              </h2>
            </div>
            <div className="steps">
              {steps.map((s, i) => (
                <div className="step" key={s.title}>
                  <span className="step-num">{i + 1}</span>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta">
          <div className="container cta-inner">
            <div>
              <h2>AC not cooling? We’re one call away.</h2>
              <p>Book a technician visit in Varapuzha, Ernakulam and nearby areas.</p>
            </div>
            <div className="cta-actions">
              <a href={`tel:+91${site.phones[1]}`} className="btn btn-white btn-lg">
                <Icon name="phone" size={18} /> {site.phones[1]}
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
                <WhatsAppIcon size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACT + MAP ================= */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Get In Touch</span>
              <h2>
                Contact <span className="text-blue">Service Guardians</span>
              </h2>
            </div>

            <div className="info-row">
              <div className="info-card">
                <span className="info-icon"><Icon name="phone" /></span>
                <div>
                  <small>Phone</small>
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`}>+91 {p}</a>
                  ))}
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon"><Icon name="mail" /></span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon"><Icon name="pin" /></span>
                <div>
                  <small>Address</small>
                  <span>{site.owner}, {site.address}</span>
                </div>
              </div>
            </div>

            <div className="contact-grid">
              <div className="form-card">
                <h3>Request a Service</h3>
                <p>Fill in your details — we’ll get back to you quickly.</p>
                <ContactForm />
              </div>

              <div className="map-square">
                <iframe
                  title="Service Guardians location"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="map-open">
                  <Icon name="pin" size={16} /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Service Guardians" />
            </div>
            <p>
              Complete AC &amp; HVAC care — repair, installation, maintenance, gas filling and
              AMC for homes and businesses across Ernakulam.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            {nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </div>
          <div>
            <h4>Services</h4>
            {services.map((s) => (
              <a key={s.title} href="#services">{s.title}</a>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <span>{site.owner}</span>
            <span>{site.address}</span>
            {site.phones.map((p) => (
              <a key={p} href={`tel:+91${p}`}>+91 {p}</a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} Service Guardians. All rights reserved.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
