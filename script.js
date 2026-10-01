"use strict";
const links = window.PROFILE_LINKS || {};
document.querySelectorAll("[data-link]").forEach((anchor) => {
  const key = anchor.dataset.link;
  const value = String(links[key] || "").trim();
  if (!value) return;
  const href = key === "email" ? "mailto:" + value.replace(/^mailto:/i, "") : value;
  if (!(href.startsWith("mailto:") || href.startsWith("./") || /^https:\/\//i.test(href))) return;
  anchor.href = href;
  anchor.hidden = false;
  if (href.startsWith("https://")) { anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; }
});
document.getElementById("year").textContent = new Date().getFullYear();
