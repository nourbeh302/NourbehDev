var observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    entry.target.toggleAttribute("visible", entry.isIntersecting);
    if (entry.intersectionRatio > 0) observer.unobserve(entry.target);
  })
);

const dividers = document.querySelectorAll("span.divider");
const svgIcons = document.querySelectorAll("svg");
const projectsContainer = document.querySelectorAll(".projects-container");

const elements = [...dividers, ...svgIcons, ...projectsContainer];

elements.forEach((el) => observer.observe(el));

/* Copying navigation bar links to the navbar collapse and footer */

const navBarlinks = document.querySelector("ul.navbar-links");
const navBarCollapseContainer = document.querySelector(
  "ul.navbar-collapse .page-wrapper"
);
const footerLinksList = document.querySelector("ul.footer-links");

navBarCollapseContainer.innerHTML = navBarlinks.innerHTML;
footerLinksList.innerHTML = navBarCollapseContainer.innerHTML;

/* Toggle navbar menu */

const navMenuButton = document.querySelector("button.navbar-toggler");
const navCollapseLinks = document.querySelectorAll("ul.navbar-collapse a");

navMenuButton.addEventListener("click", () => {
  navMenuButton.toggleAttribute("enabled"); // SVGs
  navBarCollapseContainer.toggleAttribute("collapsed"); // Navbar Collapse

  navBarCollapseContainer.hasAttribute("collapsed")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
});

const navBarCollapseLinks = document.querySelectorAll(
  "ul.navbar-collapse .page-wrapper a li"
);
navBarCollapseLinks.forEach((link) =>
  link.addEventListener("click", setDefault)
);

function setDefault() {
  navMenuButton.removeAttribute("enabled");
  navBarCollapseContainer.removeAttribute("collapsed");
  document.body.style.overflow = "visible";
}
