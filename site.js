/* Hosirx shared footer. Add <script src="site.js" defer></script> to any page.
   Edit the details below once and every page (and the legal pages) updates. */
(function () {
  "use strict";
  var HX = window.HOSIRX = Object.assign({
    email: "support@hosirx.com",      /* replace with your real support email */
    phone: "",                          /* optional, e.g. "+234 800 000 0000" */
    address: "Lagos, Nigeria",
    updated: "10 November 2026"
  }, window.HOSIRX || {});

  /* fill contact placeholders on the legal pages */
  function fill() {
    [].forEach.call(document.querySelectorAll("[data-hx]"), function (el) {
      var v = HX[el.getAttribute("data-hx")] || "";
      el.textContent = v;
      if (el.tagName === "A" && el.getAttribute("data-hx") === "email") el.href = "mailto:" + v;
    });
  }

  /* no footer inside the partner dashboard iframe or when a page opts out */
  if (/[?&]embed=/.test(location.search) || document.documentElement.hasAttribute("data-no-footer")) { fill(); return; }

  var css = ".hx-f{background:#25272B;color:#C9CBD0;padding:42px 0 26px;font:400 15px/1.55 Figtree,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;border-top:4px solid #1FB339}" +
    ".hx-f *{box-sizing:border-box}.hx-g{max-width:1160px;margin:0 auto;padding:0 22px;display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:26px}" +
    ".hx-f h4{color:#fff;font:700 15px Sora,Figtree,system-ui,sans-serif;margin:0 0 10px}" +
    ".hx-f a{display:block;color:#C9CBD0;text-decoration:none;padding:4px 0}.hx-f a:hover,.hx-f a:focus-visible{color:#fff;text-decoration:underline}" +
    ".hx-f a.hx-l{display:flex;align-items:center;gap:10px;font:800 25px Sora,system-ui,sans-serif;letter-spacing:-.03em;margin-bottom:8px;color:#fff;padding:0!important}.hx-l:hover{text-decoration:none!important}" +
    ".hx-l i{display:block;width:52px;height:46px;background:url(assets/hosirx-emblem.webp) center/contain no-repeat}.hx-l b{color:#1FB339}.hx-l em{color:#1688FF;font-style:normal}" +
    ".hx-f p{margin:0}.hx-c{margin-top:10px!important;font-size:14px}.hx-c a{display:inline;padding:0;color:#fff}" +
    ".hx-b{grid-column:1/-1;border-top:1px solid #ffffff2b;padding-top:16px;font-size:13px;display:flex;flex-wrap:wrap;gap:6px 24px;justify-content:space-between}" +
    "@media(max-width:760px){.hx-g{grid-template-columns:1fr 1fr}.hx-g>div:first-child{grid-column:1/-1}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* remove any older footer markup */
  [].forEach.call(document.querySelectorAll("footer"), function (f) { f.parentNode.removeChild(f); });

  var f = document.createElement("footer");
  f.className = "hx-f";
  f.setAttribute("aria-label", "Site footer");
  if (/partners\.html$/.test(location.pathname)) f.style.paddingBottom = "96px"; /* clear the dashboard's bottom bar */
  f.innerHTML =
    '<div class="hx-g">' +
      '<div><a class="hx-l" href="index.html" aria-label="Hosirx home"><i aria-hidden="true"></i><span><b>Hosi</b><em>rx</em></span></a>' +
        '<p>Pharmacies and hospitals in one place.</p>' +
        '<p class="hx-c">' + (HX.email ? '<a href="mailto:' + HX.email + '">' + HX.email + '</a>' : "") + (HX.phone ? "<br>" + HX.phone : "") + (HX.address ? "<br>" + HX.address : "") + '</p></div>' +
      '<div><h4>Hosirx</h4><a href="index.html">Home</a><a href="index.html#directory">Find care</a><a href="index.html#how">How it works</a><a href="about.html">About us</a></div>' +
      '<div><h4>Legal</h4><a href="terms.html">Terms of use</a><a href="privacy.html">Privacy notice</a><a href="policy.html">Orders and refunds</a></div>' +
      '<div><h4>Partners</h4><a href="index.html#partners">Join as a partner</a><a href="tel:112">Emergency: 112</a></div>' +
      '<div class="hx-b"><span>&copy; ' + new Date().getFullYear() + ' Hosirx. All rights reserved.</span><span>Hosirx does not replace medical advice. In an emergency call 112.</span></div>' +
    '</div>';
  document.body.appendChild(f);
  fill();
})();
