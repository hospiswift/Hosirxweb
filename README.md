# Hospiswift website

Static files. Serve the folder over http(s) (for example `npx serve .`) and open `index.html`.

Files: `index.html` (website and sign-in) · `partners.html` (pharmacy and hospital onboarding and dashboards, embedded by index.html) · `hs-core.js` (listings, partner-set fees, stock, orders, payment gateway).

The website sells pharmacy products and handles hospital registration and consultation payments (ticket for reception). Video and voice calls and appointment booking are app-only, so this folder has no call module and the site points people to the app.

## Try it
Sign-in screen > "Try a demo account" > Customer, Pharmacy or Hospital. Open two tabs to see both sides at once. Test card: 4084 0840 8408 4081, any future date, CVV 408.

## What is real and what is demo
- Payment gateway: demo checkout. To go live set `HS.config.paystackKey` in `hs-core.js` and verify transactions on your server.
- Backend: `hs-core.js` stores data in localStorage so the site and the dashboards talk to each other on one browser. The website and the app share data only if you replace the "DATA LAYER" functions with the same API.
- Sign-in codes are shown on screen. Connect an SMS or email service.
- Set `DEMO_ACCOUNTS=false` in `index.html` to remove the demo buttons.
