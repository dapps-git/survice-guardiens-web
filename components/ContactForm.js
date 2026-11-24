"use client";
import { useState } from "react";
import Icon, { WhatsAppIcon } from "./Icon";
import { services, site } from "@/data/site";

// Static site: the form opens WhatsApp or the email app with the details pre-filled.
export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: services[0].title, message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const body = () =>
    `Name: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nMessage: ${f.message}`;

  const viaWhatsApp = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("New enquiry\n" + body())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const viaEmail = () => {
    if (!f.name || !f.phone) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "AC Service Enquiry - " + f.service
    )}&body=${encodeURIComponent(body())}`;
  };

  return (
    <form className="form" onSubmit={viaWhatsApp}>
      <div className="form-row">
        <label>
          Your Name
          <input required value={f.name} onChange={set("name")} placeholder="Full name" />
        </label>
        <label>
          Phone Number
          <input required type="tel" value={f.phone} onChange={set("phone")} placeholder="10-digit mobile" />
        </label>
      </div>
      <label>
        Service Needed
        <select value={f.service} onChange={set("service")}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Chiller / AHU / FCU Service</option>
        </select>
      </label>
      <label>
        Message
        <textarea rows={4} value={f.message} onChange={set("message")} placeholder="AC brand, type, issue, location…" />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          <WhatsAppIcon size={18} /> Send via WhatsApp
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={viaEmail}>
          <Icon name="mail" size={18} /> Send via Email
        </button>
      </div>
    </form>
  );
}
