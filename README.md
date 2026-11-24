# Service Guardians — Website (Next.js static)

Blue & white AC / HVAC service website, exported as plain static HTML.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build the static site
```bash
npm run build      # outputs static files to /out
```
Upload the contents of `out/` to any static host (Netlify, Vercel, Cloudflare Pages,
GitHub Pages, cPanel/Hostinger public_html, etc.).

## Edit content
All text, phone numbers, email, WhatsApp number, services, AC types and image links
are in **`data/site.js`**.

- Service images: Pexels (free licence) URLs + `/public/images/ac-maintenance.jpg`
  (taken from the business card). To use your own photos, drop them into
  `public/images/` and change the `image` paths in `data/site.js`.
- WhatsApp: `site.whatsapp` (`919447194642`).
- Map: `site.mapEmbed` (embed) and `site.mapLink` (your Google Maps link).

## Structure
```
app/            layout.js, page.js (all sections), globals.css (theme)
components/     Header, WhatsAppButton (popup), ContactForm, Icon
data/site.js    all business content
public/images/  logo, icon, photos
```
