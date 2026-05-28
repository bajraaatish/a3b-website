/* ============================================================
   a3b — site behaviour
   Calm by default: one easing, single fades, no bounce.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Nav: scrolled state + mobile drawer ---- */
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav__burger");

  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    /* close drawer when a link is chosen */
    var drawer = nav.querySelector(".nav__drawer");
    if (drawer) {
      drawer.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          nav.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    }
  }

  /* ---- Reveal on scroll (single fade, respects reduced motion) ---- */
  var reveals = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          /* reveal when entering view, or if it already sits above the
             fold (e.g. the page loaded part-scrolled or via the back button) */
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---- FAQ disclosure ---- */
  var faqs = document.querySelectorAll(".faq__item");
  faqs.forEach(function (item) {
    var q = item.querySelector(".faq__q");
    var a = item.querySelector(".faq__a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var open = item.classList.contains("is-open");
      faqs.forEach(function (other) {
        other.classList.remove("is-open");
        var oa = other.querySelector(".faq__a");
        if (oa) oa.style.maxHeight = null;
        var oq = other.querySelector(".faq__q");
        if (oq) oq.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- Footer year ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Contact form: calm, honest, no false promises ---- */
  var form = document.querySelector("[data-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      var btn = form.querySelector("button[type=submit]");
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sent";
      }
      if (status) {
        status.hidden = false;
        status.textContent =
          "Thank you. This is a demo form — for now, email hello@a3b.video directly and a reply follows within two working days.";
      }
    });
  }
})();
