const portfolioData = {
  categories: [
    {
      id: "ceramics-glass",
      label: "ceramics & glass",
      items: [
        {
          slug: "penelope",
          title: "Penelope",
          meta: "Pencil holders, studio composition",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_POT A CRAYON_PENELOPE_01.jpg",
          alt: "Three Penelope pencil holders arranged on a white background.",
        },
        {
          slug: "marceau-group",
          title: "Marceau",
          meta: "Collection grouping, tonal palette",
          src: "assets/images/20250424-MARCEAU-08.jpg",
          alt: "Grouped Marceau objects in varied tones on a dark background.",
        },
        {
          slug: "black-vessel-top",
          title: "Black vessel",
          meta: "Object study, top view",
          src: "assets/images/WhatsApp Image 2025-07-14 at 10.04.58 AM (2).jpeg",
          alt: "A dark sculptural vessel photographed from above on a pale background.",
        },
        {
          slug: "ulysse-figue",
          title: "Ulysse Figue",
          meta: "Close material study",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_POT A CRAYON_ULYSSE_FIGUE_02.jpg",
          alt: "Close-up of the Ulysse Figue object's glossy twisted surface.",
        },
      ],
    },
    {
      id: "wood-lacquer",
      label: "wood & lacquer",
      items: [
        {
          slug: "nestor-full",
          title: "Nestor",
          meta: "Nested trays, full view",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_PLATEAUX_NESTOR_PM_GM_01.jpg",
          alt: "Two nested Nestor trays on a white background.",
        },
        {
          slug: "nestor-detail",
          title: "Nestor detail",
          meta: "Tray corner and handle",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_PLATEAUX_NESTOR_PM_GM_04.jpg",
          alt: "Close-up detail of the Nestor tray corner and handle.",
        },
        {
          slug: "trinity-mocha",
          title: "Trinity",
          meta: "Mocha lacquer, surface detail",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_BOITES_TRINITY_GM_MOCHA_03.jpg",
          alt: "Close-up of the Trinity box in mocha lacquer.",
        },
        {
          slug: "black-object-side",
          title: "Black object",
          meta: "Sculpted profile, side view",
          src: "assets/images/WhatsApp Image 2025-07-14 at 10.04.58 AM.jpeg",
          alt: "A dark sculptural object photographed in profile on a pale background.",
        },
      ],
    },
    {
      id: "metal-silver",
      label: "metal & silver",
      items: [
        {
          slug: "line-bursegan-interior",
          title: "Line Bursegan",
          meta: "Interior view with marble mantel",
          src: "assets/images/Line Bursegan Marceau 0225k.jpg",
          alt: "An object displayed on a marble mantel in an interior setting.",
        },
        {
          slug: "black-vessel-rim",
          title: "Black vessel",
          meta: "Topography and rim detail",
          src: "assets/images/WhatsApp Image 2025-07-14 at 10.04.58 AM.jpeg",
          alt: "Dark sculptural object in close-up profile view.",
        },
        {
          slug: "black-vessel-overhead",
          title: "Black vessel",
          meta: "Overhead silhouette",
          src: "assets/images/WhatsApp Image 2025-07-14 at 10.04.58 AM (2).jpeg",
          alt: "Dark sculptural object viewed from above.",
        },
        {
          slug: "trinity-gloss",
          title: "Trinity",
          meta: "Gloss finish detail",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_BOITES_TRINITY_GM_MOCHA_03.jpg",
          alt: "Glossy close-up of the Trinity box.",
        },
      ],
    },
    {
      id: "furniture",
      label: "furniture",
      items: [
        {
          slug: "line-bursegan-console",
          title: "Line Bursegan",
          meta: "Interior placement, marble console",
          src: "assets/images/Line Bursegan Marceau 0225k.jpg",
          alt: "Object staged on a marble mantel in an interior.",
        },
        {
          slug: "marceau-context",
          title: "Marceau",
          meta: "Collection in context",
          src: "assets/images/20250424-MARCEAU-08.jpg",
          alt: "Grouped Marceau collection objects.",
        },
        {
          slug: "nestor-composition",
          title: "Nestor",
          meta: "Large and small tray composition",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_PLATEAUX_NESTOR_PM_GM_01.jpg",
          alt: "Pair of Nestor trays.",
        },
        {
          slug: "object-study-black",
          title: "Object study",
          meta: "Monolithic black form",
          src: "assets/images/WhatsApp Image 2025-07-14 at 10.04.58 AM.jpeg",
          alt: "Dark sculptural object shown in profile.",
        },
      ],
    },
    {
      id: "projects",
      label: "projects",
      items: [
        {
          slug: "marceau-overview",
          title: "Marceau",
          meta: "Project overview",
          src: "assets/images/20250424-MARCEAU-08.jpg",
          alt: "Overview of the Marceau project objects.",
        },
        {
          slug: "line-bursegan-project",
          title: "Line Bursegan",
          meta: "Object in interior context",
          src: "assets/images/Line Bursegan Marceau 0225k.jpg",
          alt: "Marceau object displayed in an interior environment.",
        },
        {
          slug: "nestor-joinery",
          title: "Nestor",
          meta: "Material and joinery detail",
          src: "assets/images/COLLECTION G&B_OBJETS DECO_PLATEAUX_NESTOR_PM_GM_04.jpg",
          alt: "Close-up of Nestor tray materials and joinery.",
        },
        {
          slug: "black-vessel-form",
          title: "Black vessel",
          meta: "Form exploration, overhead",
          src: "assets/images/WhatsApp Image 2025-07-14 at 10.04.58 AM (2).jpeg",
          alt: "Overhead view of a dark sculptural object.",
        },
      ],
    },
  ],
};

const navButtons = [...document.querySelectorAll(".category-link")];
const galleryView = document.getElementById("gallery-view");
const cvView = document.getElementById("cv-view");
const galleryTrack = document.getElementById("gallery-track");
const copyrightBadge = document.getElementById("copyright-badge");
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");

let activeCategoryId = getInitialCategory();

renderCategory(activeCategoryId);
bindEvents();

function bindEvents() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCategory(button.dataset.category || "ceramics-glass");
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLightbox();
  });

  window.addEventListener("hashchange", () => {
    const hashCategory = window.location.hash.replace("#", "");
    const nextCategory = portfolioData.categories.find((category) => category.id === hashCategory)
      ? hashCategory
      : hashCategory === "cv"
        ? "cv"
        : activeCategoryId;

    if (nextCategory !== activeCategoryId) {
      setActiveCategory(nextCategory);
    }
  });
}

function setActiveCategory(categoryId) {
  activeCategoryId = categoryId;
  renderCategory(categoryId);
  window.history.replaceState(null, "", `#${categoryId}`);
}

function renderCategory(categoryId) {
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === categoryId);
  });

  if (categoryId === "cv") {
    galleryView.classList.add("is-hidden");
    cvView.classList.remove("is-hidden");
    copyrightBadge.classList.add("is-hidden");
    return;
  }

  const category = portfolioData.categories.find((entry) => entry.id === categoryId);

  if (!category) {
    return;
  }

  galleryView.classList.remove("is-hidden");
  cvView.classList.add("is-hidden");
  copyrightBadge.classList.remove("is-hidden");
  galleryTrack.innerHTML = "";

  category.items.forEach((item, index) => {
    galleryTrack.appendChild(createWorkCard(item, category.id, category.label, index));
  });
}

function createWorkCard(item, categoryId, categoryLabel, index) {
  const article = document.createElement("article");
  article.className = "work-card";
  article.dataset.card = getCardSlug(categoryId, item, index);

  const mediaContainer = createSingleMedia(item, categoryLabel, index);

  const legend = document.createElement("div");
  legend.className = "work-card__legend";

  const title = document.createElement("p");
  title.className = "work-card__title";
  title.textContent = item.title;

  const meta = document.createElement("p");
  meta.className = "work-card__meta";
  meta.textContent = item.meta;

  legend.appendChild(title);
  legend.appendChild(meta);
  article.appendChild(mediaContainer);
  article.appendChild(legend);

  return article;
}

function createSingleMedia(item, categoryLabel, index) {
  const button = document.createElement("button");
  button.className = "work-card__button";
  button.type = "button";
  button.setAttribute("aria-label", `Open ${item.title}`);

  const frame = document.createElement("div");
  frame.className = "work-card__frame";

  const image = document.createElement("img");
  image.className = "work-card__media";
  image.src = resolveImageSource(item, categoryLabel, index);
  image.alt = item.alt || item.title;

  frame.appendChild(image);
  button.appendChild(frame);
  button.addEventListener("click", () => openLightbox(item, categoryLabel, index));

  return button;
}

function openLightbox(item, categoryLabel, index) {
  lightboxImage.src = resolveImageSource(item, categoryLabel, index);
  lightboxImage.alt = item.alt || item.title;
  lightboxTitle.textContent = item.title;
  lightboxMeta.textContent = item.meta;

  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
  }
}

function closeLightbox() {
  if (lightbox.open) {
    lightbox.close();
  }
}

function resolveImageSource(item, categoryLabel, index) {
  return item.src ? encodeURI(item.src) : createPlaceholder(item.title, categoryLabel, index);
}

function getInitialCategory() {
  const hash = window.location.hash.replace("#", "");
  const isKnownCategory =
    hash === "cv" || portfolioData.categories.some((category) => category.id === hash);

  return isKnownCategory ? hash : "ceramics-glass";
}

function createPlaceholder(title, categoryLabel, index) {
  const safeTitle = escapeXml(title);
  const safeCategory = escapeXml(categoryLabel.toUpperCase());
  const serial = String(index + 1).padStart(2, "0");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500">
      <rect width="1200" height="1500" fill="#f6f6f4"/>
      <rect x="84" y="84" width="1032" height="1332" rx="34" fill="none" stroke="#d5d5cf" stroke-width="3"/>
      <text x="600" y="655" text-anchor="middle" fill="#121212" font-family="Helvetica Neue, Arial, sans-serif" font-size="48" letter-spacing="2">${safeTitle}</text>
      <text x="600" y="736" text-anchor="middle" fill="#8d8d8d" font-family="Helvetica Neue, Arial, sans-serif" font-size="24" letter-spacing="6">${safeCategory}</text>
      <text x="104" y="1388" fill="#8d8d8d" font-family="Helvetica Neue, Arial, sans-serif" font-size="22" letter-spacing="4">${serial}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getCardSlug(categoryId, item, index) {
  if (item.slug) {
    return `${categoryId}-${item.slug}`;
  }

  const base = slugify(item.title || `item-${index + 1}`);
  return `${categoryId}-${base}-${index + 1}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("/", "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/*
  Manual image editing guide:

  1. Replace `src` with your file path when you add or swap images.
  2. Fine-tune gallery crop and centering in `gallery-overrides.css`.
  3. Each image gets a selector based on category + title, for example:
     .work-card[data-card="ceramics-glass-penelope"]
*/
