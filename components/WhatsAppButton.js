"use client";
import { useEffect, useState } from "react";
import Icon, { WhatsAppIcon } from "./Icon";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [msg, setMsg] = useState("Hi Service Guardians, I need help with my AC.");

  // Show a small greeting bubble a few seconds after load
  useEffect(() => {
    const t = setTimeout(() => setHint(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const send = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="wa-wrap">
      {open && (
        <div className="wa-popup" role="dialog" aria-label="Chat on WhatsApp">
          <div className="wa-head">
            <img src="/images/icon.png" alt="" className="wa-avatar" />
            <div>
              <strong>Service Guardians</strong>
              <span>Typically replies quickly</span>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)}>
              <Icon name="close" size={18} />
            </button>
          </div>
          <div className="wa-body">
            <div className="wa-bubble">
              Hello! 👋 <br />
              How can we help with your AC today? Repair, installation, gas
              filling or AMC — just send us a message.
            </div>
          </div>
          <form className="wa-form" onSubmit={send}>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              aria-label="Your message"
            />
            <button type="submit" aria-label="Send on WhatsApp">
              <Icon name="arrow" size={18} />
            </button>
          </form>
        </div>
      )}

      {hint && !open && (
        <button className="wa-hint" onClick={() => setOpen(true)}>
          Need AC service? Chat with us
        </button>
      )}

      <button
        className="wa-fab"
        aria-label="Chat on WhatsApp"
        onClick={() => {
          setOpen((o) => !o);
          setHint(false);
        }}
      >
        <WhatsAppIcon size={32} />
      </button>
    </div>
  );
}
