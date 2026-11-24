// All business content lives here — edit this file to update the website.

export const site = {
  name: "Service Guardians",
  tagline: "AC & HVAC Service Experts",
  owner: "Sajikumar",
  address: "Thevarkadu, Varapuzha, Ernakulam, Kerala",
  email: "serviceguardians35@gmail.com",
  phones: ["9562208947", "9447194642"],
  whatsapp: "919447194642", // country code + number, no "+"
  mapLink: "https://maps.app.goo.gl/M5aafGqE48fLDgis5",
  mapEmbed:
    "https://maps.google.com/maps?q=10.0924733,76.26183&z=15&output=embed",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AC Types", href: "#systems" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const images = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  commercial: "/images/ac-repair.jpg",
};

export const services = [
  {
    title: "AC Repair Service",
    text: "Fast diagnosis and repair for cooling problems, noise, water leakage, PCB faults and compressor issues.",
    image: "/images/ac-repair.jpg",
    icon: "wrench",
  },
  {
    title: "AC Installation Services",
    text: "Neat, safe installation of new units with proper piping, mounting, vacuuming and performance testing.",
    image: "/images/ac-installation.jpg",
    icon: "install",
  },
  {
    title: "AC Uninstallation Services",
    text: "Careful removal and gas pump-down for shifting or replacement — no damage to your unit or walls.",
    image: "/images/ac-uninstallation.jpg",
    icon: "box",
  },
  {
    title: "AC Maintenance & Cleaning",
    text: "Filter, coil and drain cleaning that restores airflow, improves cooling and lowers power bills.",
    image: "/images/ac-maintenance.jpg",
    icon: "spark",
  },
  {
    title: "AC Gas Filling Services",
    text: "Leak detection and accurate refrigerant charging with gauges, so your AC cools the way it should.",
    image: "/images/ac-gas-filling.jpg",
    icon: "gauge",
  },
  {
    title: "AC AMC Services",
    text: "Annual Maintenance Contracts for homes, offices and plants — scheduled visits and priority support.",
    image: "/images/ac-amc.jpg",
    icon: "calendar",
  },
];

export const systems = [
  "Split AC",
  "Cassette AC",
  "Ductable Split AC",
  "Tower Type AC",
  "DX AC",
  "FCU",
  "AHU",
  "Water Cooled Chiller",
  "Air Cooled Chiller",
];

export const reasons = [
  {
    title: "Affordable Pricing",
    text: "Honest, upfront quotes with no hidden charges.",
    icon: "tag",
  },
  {
    title: "Excellent Customer Service",
    text: "Quick response on call and WhatsApp, and clear updates.",
    icon: "chat",
  },
  {
    title: "Safe Work Practices",
    text: "Trained technicians following electrical and refrigerant safety.",
    icon: "shield",
  },
  {
    title: "Quality Workmanship",
    text: "Clean, tested work done right the first time.",
    icon: "star",
  },
];

export const steps = [
  { title: "Call or WhatsApp", text: "Tell us your AC type and the problem." },
  { title: "Inspection", text: "Our technician visits and diagnoses the issue." },
  { title: "Transparent Quote", text: "You approve the price before work starts." },
  { title: "Service & Testing", text: "We fix, clean and test for full cooling." },
];
