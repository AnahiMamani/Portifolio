/* Progressive enhancement: content and project links work without JavaScript. */
document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
if (menuButton && navigation) {
  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "Fechar ×" : "Menu +";
    navigation.classList.toggle("is-open", open);
  };
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  window
    .matchMedia("(min-width: 761px)")
    .addEventListener("change", () => setMenu(false));
}
const filterBar = document.querySelector(".filters");
if (filterBar) {
  filterBar.hidden = false;
  const cards = [...document.querySelectorAll("#academic-grid .project-card")];
  const status = document.querySelector(".filter-status");
  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    filterBar
      .querySelectorAll("button")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    let count = 0;
    cards.forEach((card) => {
      card.hidden =
        button.dataset.filter !== "todos" &&
        !card.dataset.category.split(" ").includes(button.dataset.filter);
      if (!card.hidden) count++;
    });
    status.hidden = false;
    status.textContent = `${count} ${count === 1 ? "projeto exibido" : "projetos exibidos"}.`;
  });
}

const viewer = document.querySelector(".image-viewer");
const galleryLinks = [...document.querySelectorAll("a[data-gallery]")];
if (viewer && typeof viewer.showModal === "function") {
  let current = 0;
  let trigger;
  const showImage = (index) => {
    current = (index + galleryLinks.length) % galleryLinks.length;
    const link = galleryLinks[current];
    const picture = viewer.querySelector(".viewer-image");
    picture.src = link.href;
    picture.alt = link.dataset.caption;
    viewer.querySelector(".viewer-caption").textContent = link.dataset.caption;
    viewer.querySelector(".viewer-counter").textContent =
      `${current + 1} / ${galleryLinks.length}`;
  };
  galleryLinks.forEach((link, index) =>
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      trigger = link;
      showImage(index);
      viewer.showModal();
      viewer.querySelector(".viewer-close").focus();
    }),
  );
  viewer
    .querySelector(".viewer-close")
    .addEventListener("click", () => viewer.close());
  viewer
    .querySelector(".viewer-prev")
    .addEventListener("click", () => showImage(current - 1));
  viewer
    .querySelector(".viewer-next")
    .addEventListener("click", () => showImage(current + 1));
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(current + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  viewer.addEventListener("close", () => trigger?.focus());
}
