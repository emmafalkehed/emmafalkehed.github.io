/*
  Optional per-image fields:

  - `column`: `1`, `2`, or `3` for desktop column placement
  - `padding`: `"none"`, `"small"`, `"medium"`, or `"big"`; defaults to `"none"`
  - `zoom`: number from `0` to `1`; defaults to `0`
    Example: `zoom: 0.5` renders the image at 1.5x, centered and cropped by the frame
*/

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
          column: 1,
          zoom: 0.5,
          src: "ceramics-glass-image-01.jpg",
          alt: "Three Penelope pencil holders arranged on a white background.",
        },
        {
          slug: "marceau-group",
          title: "Marceau",
          meta: "Collection grouping, tonal palette",
          column: 2,
          padding: "none",
          src: "ceramics-glass-image-02.jpg",
          alt: "Grouped Marceau objects in varied tones on a dark background.",
        },
        {
          slug: "black-vessel-top",
          title: "Black vessel",
          meta: "Object study, top view",
          column: 3,
          padding: "small",
          src: "ceramics-glass-image-03.jpeg",
          alt: "A dark sculptural vessel photographed from above on a pale background.",
        },
        {
          slug: "ulysse-figue",
          title: "Ulysse Figue",
          meta: "Close material study",
          column: 1,
          padding: "big",
          src: "ceramics-glass-image-04.jpg",
          alt: "Close-up of the Ulysse Figue object's glossy twisted surface.",
        },
        {
          slug: "trinity-mocha",
          title: "Trinity",
          meta: "Box profile, lacquer sheen",
          column: 2,
          padding: "none",
          src: "ceramics-glass-image-05.jpg",
          alt: "A lacquered Trinity box shown in a close three-quarter view.",
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
          column: 1,
          padding: "none",
          src: "wood-lacquer-image-01.jpg",
          alt: "Two nested Nestor trays on a white background.",
        },
        {
          slug: "nestor-detail",
          title: "Nestor detail",
          meta: "Tray corner and handle",
          column: 2,
          padding: "none",
          src: "wood-lacquer-image-02.jpg",
          alt: "Close-up detail of the Nestor tray corner and handle.",
        },
        {
          slug: "trinity-mocha",
          title: "Trinity",
          meta: "Mocha lacquer, surface detail",
          column: 3,
          padding: "none",
          src: "wood-lacquer-image-03.jpg",
          alt: "Close-up of the Trinity box in mocha lacquer.",
        },
        {
          slug: "black-object-side",
          title: "Black object",
          meta: "Sculpted profile, side view",
          column: 1,
          padding: "none",
          src: "wood-lacquer-image-04.jpeg",
          alt: "A dark sculptural object photographed in profile on a pale background.",
        },
        {
          slug: "marceau-finish",
          title: "Marceau",
          meta: "Material palette and finish",
          column: 2,
          padding: "none",
          src: "wood-lacquer-image-05.jpg",
          alt: "Grouped Marceau objects photographed to show finish and surface quality.",
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
          column: 1,
          padding: "none",
          src: "metal-silver-image-01.jpg",
          alt: "An object displayed on a marble mantel in an interior setting.",
        },
        {
          slug: "black-vessel-rim",
          title: "Black vessel",
          meta: "Topography and rim detail",
          column: 2,
          padding: "none",
          src: "metal-silver-image-02.jpeg",
          alt: "Dark sculptural object in close-up profile view.",
        },
        {
          slug: "black-vessel-overhead",
          title: "Black vessel",
          meta: "Overhead silhouette",
          column: 3,
          padding: "none",
          src: "metal-silver-image-03.jpeg",
          alt: "Dark sculptural object viewed from above.",
        },
        {
          slug: "trinity-gloss",
          title: "Trinity",
          meta: "Gloss finish detail",
          column: 1,
          padding: "none",
          src: "metal-silver-image-04.jpg",
          alt: "Glossy close-up of the Trinity box.",
        },
        {
          slug: "marceau-reflection",
          title: "Marceau",
          meta: "Reflective grouping study",
          column: 2,
          padding: "none",
          src: "metal-silver-image-05.jpg",
          alt: "A moody grouping of Marceau objects with reflective tonal contrasts.",
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
          column: 1,
          padding: "none",
          src: "furniture-image-01.jpg",
          alt: "Object staged on a marble mantel in an interior.",
        },
        {
          slug: "marceau-context",
          title: "Marceau",
          meta: "Collection in context",
          column: 2,
          padding: "none",
          src: "furniture-image-02.jpg",
          alt: "Grouped Marceau collection objects.",
        },
        {
          slug: "nestor-composition",
          title: "Nestor",
          meta: "Large and small tray composition",
          column: 3,
          padding: "none",
          src: "furniture-image-03.jpg",
          alt: "Pair of Nestor trays.",
        },
        {
          slug: "object-study-black",
          title: "Object study",
          meta: "Monolithic black form",
          column: 1,
          padding: "none",
          src: "furniture-image-04.jpeg",
          alt: "Dark sculptural object shown in profile.",
        },
        {
          slug: "nestor-detail-console",
          title: "Nestor detail",
          meta: "Joinery and edge condition",
          column: 2,
          padding: "none",
          src: "furniture-image-05.jpg",
          alt: "Close-up detail of the Nestor tray emphasizing edge profile and joinery.",
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
          column: 1,
          padding: "none",
          src: "projects-image-01.jpg",
          alt: "Overview of the Marceau project objects.",
        },
        {
          slug: "line-bursegan-project",
          title: "Line Bursegan",
          meta: "Object in interior context",
          column: 2,
          padding: "none",
          src: "projects-image-02.jpg",
          alt: "Marceau object displayed in an interior environment.",
        },
        {
          slug: "nestor-joinery",
          title: "Nestor",
          meta: "Material and joinery detail",
          column: 3,
          padding: "none",
          src: "projects-image-03.jpg",
          alt: "Close-up of Nestor tray materials and joinery.",
        },
        {
          slug: "black-vessel-form",
          title: "Black vessel",
          meta: "Form exploration, overhead",
          column: 1,
          padding: "none",
          src: "projects-image-04.jpeg",
          alt: "Overhead view of a dark sculptural object.",
        },
        {
          slug: "penelope-process",
          title: "Penelope",
          meta: "Accessory study and silhouette",
          column: 2,
          padding: "none",
          src: "projects-image-05.jpg",
          alt: "Penelope pencil holders presented as part of a broader project study.",
        },
      ],
    },
  ],
};

const supabaseConfig = {
  projectUrl: "https://payquixvrdzgqsxeihnj.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBheXF1aXh2cmR6Z3FzeGVpaG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NjU0ODksImV4cCI6MjA5MTA0MTQ4OX0.SaNggYvpEq_TPJ7ZL9eJUFHH2D_XAhRWcZHsEqMlIm8",
  functionName: "download-images",
};

const cvSections = [
  {
    heading: "Biography",
    body:
      "Add a short introduction to Emma Falkehed here. This space works well for a concise design statement, creative focus, and approach to materials.",
  },
  {
    heading: "Work experience",
    body: "Add selected positions, internships, collaborations, exhibitions, or commissions here.",
  },
  {
    heading: "Education",
    body: "Add schools, degrees, exchange studies, workshops, or specialist training here.",
  },
  {
    heading: "Skills",
    body:
      "Add materials, processes, software, prototyping methods, languages, and production skills here.",
  },
  {
    heading: "Contact details",
    body: "Add email, phone, location, portfolio links, and social or professional profiles here.",
  },
];

const signedUrlRefreshWindowMs = 55 * 60 * 1000;
const signedImageUrlCacheKey = "emma-falkehed-signed-image-cache-v2";
const reviewPasswordSessionKey = "emma-falkehed-review-password";
const reviewPasswordQueryParamKey = "pwd";
const desktopGalleryColumnCount = 3;
const imagePaddingOptions = new Set(["none", "small", "medium", "big"]);
const portfolioImageLoadConcurrency = 4;
const estimatedPortfolioTotalMegabytes = 143;
const defaultCategoryId = portfolioData.categories[0]?.id || "gallery";
const legacyPortfolioImagePrefix = "assets/images/";

const categoryNav = document.getElementById("category-nav");
const siteHeader = document.getElementById("site-header");
const galleryView = document.getElementById("gallery-view");
const cvView = document.getElementById("cv-view");
const galleryTrack = document.getElementById("gallery-track");
const unlockPanel = document.getElementById("unlock-panel");
const loadingPanel = document.getElementById("loading-panel");
const loadingTitle = document.getElementById("loading-title");
const loadingDetail = document.getElementById("loading-detail");
const loadingProgressBar = document.getElementById("loading-progress-bar");
const loadingProgressFill = document.getElementById("loading-progress-fill");
const loadingProgressText = document.getElementById("loading-progress-text");
const unlockForm = document.getElementById("unlock-form");
const unlockInput = document.getElementById("review-password");
const unlockButton = document.getElementById("unlock-button");
const unlockStatus = document.getElementById("unlock-status");
const copyrightBadge = document.getElementById("copyright-badge");
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxStage = document.getElementById("lightbox-stage");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");

let navButtons = [];
let hasBuiltProtectedUi = false;
let activeCategoryId = getInitialCategory();
let reviewPassword = "";
let pendingReviewPassword = "";
let signedImageUrlMap = new Map();
let portfolioFetchPromise = null;
let portfolioPreloadPromise = null;
let navigationSequence = 0;
let galleryColumnCount = getGalleryColumnCount();
const preloadedSignedImageUrls = new Set();
const signedImageMetadataMap = new Map();

restoreCachedAccessState();
pendingReviewPassword = consumeLinkedReviewPassword();
bindEvents();
void initializeApp();

async function initializeApp() {
  const isReady = await ensurePortfolioReady();

  if (!isReady) {
    return;
  }

  renderCategory(activeCategoryId);
}

function bindEvents() {
  categoryNav?.addEventListener("click", (event) => {
    const button = event.target.closest(".category-link");

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    void setActiveCategory(button.dataset.category || defaultCategoryId);
  });

  unlockForm.addEventListener("submit", (event) => {
    void handleUnlockSubmit(event);
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
      void setActiveCategory(nextCategory);
    }
  });

  window.addEventListener("resize", handleGalleryViewportChange);
}

function buildProtectedUi() {
  if (hasBuiltProtectedUi) {
    return;
  }

  renderCategoryNavigation();
  renderCvSections();
  hasBuiltProtectedUi = true;
}

function renderCategoryNavigation() {
  if (!categoryNav) {
    return;
  }

  categoryNav.innerHTML = "";

  const fragment = document.createDocumentFragment();

  portfolioData.categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-link";
    button.type = "button";
    button.dataset.category = category.id;
    button.textContent = category.label;
    fragment.appendChild(button);
  });

  const cvButton = document.createElement("button");
  cvButton.className = "category-link";
  cvButton.type = "button";
  cvButton.dataset.category = "cv";
  cvButton.textContent = "cv";
  fragment.appendChild(cvButton);

  categoryNav.appendChild(fragment);
  navButtons = [...categoryNav.querySelectorAll(".category-link")];
}

function renderCvSections() {
  if (!cvView) {
    return;
  }

  const grid = document.createElement("div");
  grid.className = "cv-grid";

  cvSections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "cv-block";

    const heading = document.createElement("h2");
    heading.textContent = section.heading;

    const body = document.createElement("p");
    body.textContent = section.body;

    block.appendChild(heading);
    block.appendChild(body);
    grid.appendChild(block);
  });

  cvView.replaceChildren(grid);
}

async function handleUnlockSubmit(event) {
  event.preventDefault();

  const password = unlockInput.value.trim();

  if (!password) {
    setUnlockStatus("Enter the password.", "error");
    unlockInput.focus();
    return;
  }

  setUnlockPending(true);

  const isUnlocked = await ensurePortfolioReady({
    password,
  });

  setUnlockPending(false);

  if (!isUnlocked) {
    return;
  }

  unlockInput.value = "";
  renderCategory(activeCategoryId);
}

async function setActiveCategory(categoryId, { skipHistory = false } = {}) {
  const currentNavigation = ++navigationSequence;

  activeCategoryId = categoryId;

  if (!skipHistory) {
    window.history.replaceState(null, "", `#${categoryId}`);
  }

  const isReady = await ensurePortfolioReady();

  if (!isReady || currentNavigation !== navigationSequence) {
    return;
  }

  renderCategory(categoryId);
}

function renderCategory(categoryId) {
  buildProtectedUi();

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === categoryId);
  });

  if (categoryId === "cv") {
    siteHeader.classList.remove("is-hidden");
    galleryView.classList.add("is-hidden");
    cvView.classList.remove("is-hidden");
    copyrightBadge.classList.add("is-hidden");
    return;
  }

  const category = portfolioData.categories.find((entry) => entry.id === categoryId);

  if (!category) {
    return;
  }

  renderGalleryCategory(category);
}

function createWorkCard(item, categoryId, categoryLabel, index) {
  const article = document.createElement("article");
  article.className = "work-card";
  article.dataset.card = getCardSlug(categoryId, item, index);
  article.dataset.padding = getImagePadding(item);
  article.style.setProperty("--card-zoom", String(getImageZoom(item)));

  const mediaContainer = createSingleMedia(item, categoryId, categoryLabel, index);

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

function createSingleMedia(item, categoryId, categoryLabel, index) {
  const button = document.createElement("button");
  button.className = "work-card__button";
  button.type = "button";
  button.setAttribute("aria-label", `Open ${item.title}`);

  const frame = document.createElement("div");
  frame.className = "work-card__frame";
  frame.dataset.padding = getImagePadding(item);

  const storagePath = getStoragePath(item, categoryId);
  const signedImageUrl = storagePath ? getFreshSignedImageUrl(storagePath) : "";

  if (signedImageUrl || !item.src) {
    const image = document.createElement("img");
    image.className = "work-card__media";
    applyImageMetadata(image, storagePath);
    image.src = resolveImageSource(item, categoryId, categoryLabel, index);
    image.alt = item.alt || item.title;
    image.loading = "lazy";
    image.decoding = "async";

    if (storagePath) {
      image.addEventListener(
        "load",
        () => {
          rememberImageMetadata(storagePath, image.naturalWidth, image.naturalHeight);
        },
        { once: true }
      );
    }

    frame.appendChild(image);
    button.appendChild(frame);
    button.addEventListener("click", () => {
      void openLightbox(item, categoryId, categoryLabel, index);
    });
    return button;
  }

  frame.classList.add("is-loading");

  const loadingState = document.createElement("div");
  loadingState.className = "work-card__loading";
  loadingState.setAttribute("aria-hidden", "true");

  frame.appendChild(loadingState);
  button.appendChild(frame);
  button.disabled = true;
  button.classList.add("is-loading");
  button.setAttribute("aria-busy", "true");

  return button;
}

async function openLightbox(item, categoryId, categoryLabel, index) {
  const hasImageAccess = await ensureImageForItem(item, categoryId);

  if (!hasImageAccess) {
    showUnlockPanel(
      unlockStatus.textContent || "Enter the password again.",
      unlockStatus.dataset.state || "error"
    );
    return;
  }

  lightboxImage.src = resolveImageSource(item, categoryId, categoryLabel, index);
  lightboxImage.alt = item.alt || item.title;
  lightboxStage.dataset.padding = getImagePadding(item);
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

function resolveImageSource(item, categoryId, categoryLabel, index) {
  const storagePath = getStoragePath(item, categoryId);
  const signedImageUrl = storagePath ? getFreshSignedImageUrl(storagePath) : "";

  return signedImageUrl || createPlaceholder(item.title, categoryLabel, index);
}

function getImagePadding(item) {
  return imagePaddingOptions.has(item.padding) ? item.padding : "none";
}

function getImageZoom(item) {
  const zoom = Number(item.zoom);

  if (!Number.isFinite(zoom)) {
    return 0;
  }

  return Math.min(Math.max(zoom, 0), 1);
}

function getInitialCategory() {
  const hash = window.location.hash.replace("#", "");
  const isKnownCategory =
    hash === "cv" || portfolioData.categories.some((category) => category.id === hash);

  return isKnownCategory ? hash : defaultCategoryId;
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

function showUnlockPanel(message = "", state = "") {
  siteHeader.classList.add("is-hidden");
  galleryView.classList.remove("is-hidden");
  cvView.classList.add("is-hidden");
  copyrightBadge.classList.add("is-hidden");
  unlockPanel.classList.remove("is-hidden");
  loadingPanel.classList.add("is-hidden");
  galleryTrack.classList.add("is-hidden");
  galleryTrack.innerHTML = "";
  setUnlockStatus(message, state);
}

function showLoadingPanel(title, detail) {
  siteHeader.classList.add("is-hidden");
  galleryView.classList.remove("is-hidden");
  cvView.classList.add("is-hidden");
  copyrightBadge.classList.add("is-hidden");
  unlockPanel.classList.add("is-hidden");
  loadingPanel.classList.remove("is-hidden");
  galleryTrack.classList.add("is-hidden");
  galleryTrack.innerHTML = "";
  setLoadingPendingState(title, detail);
}

function setUnlockStatus(message = "", state = "") {
  unlockStatus.textContent = message;

  if (state) {
    unlockStatus.dataset.state = state;
    return;
  }

  delete unlockStatus.dataset.state;
}

function setUnlockPending(isPending) {
  unlockInput.disabled = isPending;
  unlockButton.disabled = isPending;
  unlockButton.textContent = isPending ? "Loading..." : "Enter";
}

function renderGalleryCategory(category) {
  galleryColumnCount = getGalleryColumnCount();
  galleryView.classList.remove("is-hidden");
  siteHeader.classList.remove("is-hidden");
  cvView.classList.add("is-hidden");
  copyrightBadge.classList.remove("is-hidden");
  unlockPanel.classList.add("is-hidden");
  loadingPanel.classList.add("is-hidden");
  galleryTrack.classList.remove("is-hidden");
  galleryTrack.innerHTML = "";
  galleryTrack.dataset.columns = String(galleryColumnCount);

  if (galleryColumnCount === desktopGalleryColumnCount) {
    galleryTrack.dataset.layout = "columns";

    const columns = Array.from({ length: desktopGalleryColumnCount }, (_, columnIndex) => {
      const column = document.createElement("div");
      column.className = "gallery-track__column";
      column.dataset.column = String(columnIndex + 1);
      galleryTrack.appendChild(column);
      return column;
    });

    category.items.forEach((item, index) => {
      const columnIndex = getItemDesktopColumn(item, index) - 1;
      columns[columnIndex].appendChild(createWorkCard(item, category.id, category.label, index));
    });

    return;
  }

  galleryTrack.dataset.layout = "grid";

  category.items.forEach((item, index) => {
    galleryTrack.appendChild(createWorkCard(item, category.id, category.label, index));
  });
}

function handleGalleryViewportChange() {
  const nextColumnCount = getGalleryColumnCount();

  if (nextColumnCount === galleryColumnCount || activeCategoryId === "cv") {
    return;
  }

  galleryColumnCount = nextColumnCount;
  void setActiveCategory(activeCategoryId, { skipHistory: true });
}

function getGalleryColumnCount() {
  if (window.innerWidth <= 640) {
    return 1;
  }

  if (window.innerWidth <= 900) {
    return 2;
  }

  return desktopGalleryColumnCount;
}

function getItemDesktopColumn(item, index) {
  const column = Number(item.column);

  if (Number.isInteger(column) && column >= 1 && column <= desktopGalleryColumnCount) {
    return column;
  }

  return (index % desktopGalleryColumnCount) + 1;
}

function getCategoryById(categoryId) {
  return portfolioData.categories.find((entry) => entry.id === categoryId) || null;
}

function getStoragePath(item, categoryId) {
  if (typeof item.storagePath === "string" && item.storagePath.trim()) {
    return item.storagePath.trim();
  }

  if (!item.src) {
    return "";
  }

  return normalizePortfolioImageSource(item.src);
}

function normalizePortfolioImageSource(sourcePath) {
  if (typeof sourcePath !== "string") {
    return "";
  }

  const trimmedSourcePath = sourcePath.trim();

  if (!trimmedSourcePath) {
    return "";
  }

  const normalizedSourcePath = trimmedSourcePath.replace(/^\.?\//, "");
  return decodeURIComponent(normalizedSourcePath.replace(legacyPortfolioImagePrefix, ""));
}

function applyImageMetadata(image, storagePath) {
  if (!storagePath) {
    return;
  }

  const metadata = signedImageMetadataMap.get(storagePath);

  if (!metadata) {
    return;
  }

  image.width = metadata.width;
  image.height = metadata.height;
}

function rememberImageMetadata(storagePath, width, height) {
  if (!storagePath || !Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return;
  }

  signedImageMetadataMap.set(storagePath, { width, height });
}

function getCategoryPaths(categoryId) {
  const category = getCategoryById(categoryId);

  if (!category) {
    return [];
  }

  return [...new Set(category.items.map((item) => getStoragePath(item, categoryId)).filter(Boolean))];
}

function getAllPortfolioPaths() {
  return [
    ...new Set(portfolioData.categories.flatMap((category) => getCategoryPaths(category.id))),
  ];
}

function restoreCachedAccessState() {
  restoreSessionPassword();
  restoreSignedImageUrlCache();
}

function consumeLinkedReviewPassword() {
  const url = new URL(window.location.href);
  const linkedPassword = url.searchParams.get(reviewPasswordQueryParamKey) || "";

  if (!url.searchParams.has(reviewPasswordQueryParamKey)) {
    return "";
  }

  url.searchParams.delete(reviewPasswordQueryParamKey);
  window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);

  if (reviewPassword) {
    return "";
  }

  return linkedPassword.trim();
}

function getAccessPassword() {
  if (reviewPassword) {
    return reviewPassword;
  }

  if (!pendingReviewPassword) {
    return "";
  }

  const linkedPassword = pendingReviewPassword;
  pendingReviewPassword = "";
  return linkedPassword;
}

function restoreSessionPassword() {
  try {
    reviewPassword = window.sessionStorage.getItem(reviewPasswordSessionKey) || "";
  } catch {
    reviewPassword = "";
  }
}

function persistSessionPassword(password) {
  try {
    window.sessionStorage.setItem(reviewPasswordSessionKey, password);
  } catch {
    // Ignore storage failures and continue with in-memory state.
  }
}

function clearSessionPassword() {
  reviewPassword = "";

  try {
    window.sessionStorage.removeItem(reviewPasswordSessionKey);
  } catch {
    // Ignore storage failures and continue clearing in-memory state.
  }
}

function restoreSignedImageUrlCache() {
  try {
    const rawCache = window.localStorage.getItem(signedImageUrlCacheKey);

    if (!rawCache) {
      return;
    }

    const parsedCache = JSON.parse(rawCache);
    const hasEntries = parsedCache && Array.isArray(parsedCache.entries);

    if (!hasEntries) {
      clearSignedImageUrlCache();
      return;
    }

    const freshEntries = parsedCache.entries.filter(
      ([path, entry]) =>
        typeof path === "string" &&
        entry &&
        typeof entry.signedUrl === "string" &&
        Number.isFinite(entry.fetchedAt) &&
        Date.now() - entry.fetchedAt < signedUrlRefreshWindowMs
    );

    if (!freshEntries.length) {
      clearSignedImageUrlCache();
      return;
    }

    signedImageUrlMap = new Map(freshEntries);
  } catch {
    clearSignedImageUrlCache();
  }
}

function persistSignedImageUrlCache() {
  try {
    window.localStorage.setItem(
      signedImageUrlCacheKey,
      JSON.stringify({
        entries: [...signedImageUrlMap.entries()],
      })
    );
  } catch {
    // Ignore storage failures and continue with in-memory state.
  }
}

function clearSignedImageUrlCache() {
  signedImageUrlMap = new Map();

  try {
    window.localStorage.removeItem(signedImageUrlCacheKey);
  } catch {
    // Ignore storage failures and continue clearing in-memory state.
  }
}

function getFreshSignedImageUrl(path) {
  const entry = signedImageUrlMap.get(path);

  if (!entry) {
    return "";
  }

  if (Date.now() - entry.fetchedAt >= signedUrlRefreshWindowMs) {
    signedImageUrlMap.delete(path);
    persistSignedImageUrlCache();
    return "";
  }

  return entry.signedUrl;
}

function hasFreshCategoryImages(categoryId) {
  const paths = getCategoryPaths(categoryId);

  if (!paths.length) {
    return true;
  }

  return paths.every((path) => Boolean(getFreshSignedImageUrl(path)));
}

function hasFreshPortfolioImages() {
  return getAllPortfolioPaths().every((path) => Boolean(getFreshSignedImageUrl(path)));
}

function hasPreloadedPortfolioImages() {
  return getAllPortfolioPaths().every((path) => {
    const signedUrl = getFreshSignedImageUrl(path);
    return Boolean(signedUrl) && preloadedSignedImageUrls.has(signedUrl);
  });
}

async function ensureImageForItem(item, categoryId) {
  const storagePath = getStoragePath(item, categoryId);

  if (!storagePath || getFreshSignedImageUrl(storagePath)) {
    return true;
  }

  if (!reviewPassword) {
    return false;
  }

  return ensurePortfolioReady();
}

async function ensurePortfolioReady({ password = reviewPassword } = {}) {
  const accessPassword = password || getAccessPassword();

  if (hasFreshPortfolioImages() && hasPreloadedPortfolioImages()) {
    return true;
  }

  if (!accessPassword) {
    showUnlockPanel();
    return false;
  }

  if (!hasFreshPortfolioImages()) {
    showLoadingPanel("Verifying access", "Requesting secure download links.");

    const hasImageAccess = await ensureAllPortfolioImages(accessPassword);

    if (!hasImageAccess) {
      showUnlockPanel(
        unlockStatus.textContent || "Enter the password again.",
        unlockStatus.dataset.state || "error"
      );
      return false;
    }
  }

  showLoadingPanel("Downloading items", "Preparing the portfolio for viewing.");

  const areImagesLoaded = await preloadPortfolioImages();

  if (!areImagesLoaded) {
    showUnlockPanel(
      unlockStatus.textContent || "Unable to finish loading the portfolio.",
      unlockStatus.dataset.state || "error"
    );
    return false;
  }

  return true;
}

async function ensureAllPortfolioImages(password = reviewPassword) {
  if (hasFreshPortfolioImages()) {
    return true;
  }

  if (!password) {
    return false;
  }

  if (portfolioFetchPromise) {
    return portfolioFetchPromise;
  }

  const missingPaths = getAllPortfolioPaths().filter((path) => !getFreshSignedImageUrl(path));

  portfolioFetchPromise = fetchSignedImageUrlsForPaths(password, missingPaths).finally(() => {
    portfolioFetchPromise = null;
  });

  return portfolioFetchPromise;
}

async function preloadPortfolioImages() {
  if (hasPreloadedPortfolioImages()) {
    updateLoadingProgress(getAllPortfolioPaths().length, getAllPortfolioPaths().length);
    return true;
  }

  if (portfolioPreloadPromise) {
    return portfolioPreloadPromise;
  }

  const allPaths = getAllPortfolioPaths();
  const urlsToPreload = allPaths
    .map((path) => ({
      path,
      signedUrl: getFreshSignedImageUrl(path),
    }))
    .filter(({ signedUrl }) => signedUrl && !preloadedSignedImageUrls.has(signedUrl));

  portfolioPreloadPromise = runPortfolioPreload(allPaths, urlsToPreload).finally(() => {
    portfolioPreloadPromise = null;
  });

  return portfolioPreloadPromise;
}

async function runPortfolioPreload(allPaths, urlsToPreload) {
  let completedCount = allPaths.length - urlsToPreload.length;
  let preloadError = null;

  updateLoadingProgress(completedCount, allPaths.length);

  if (!urlsToPreload.length) {
    return true;
  }

  const queue = [...urlsToPreload];
  const workerCount = Math.min(portfolioImageLoadConcurrency, queue.length);

  await Promise.all(
    Array.from({ length: workerCount }, async () => {
      while (queue.length && !preloadError) {
        const nextImage = queue.shift();

        if (!nextImage) {
          return;
        }

        try {
          const metadata = await preloadSignedImage(nextImage.signedUrl);
          rememberImageMetadata(nextImage.path, metadata.width, metadata.height);
          preloadedSignedImageUrls.add(nextImage.signedUrl);
          completedCount += 1;
          updateLoadingProgress(completedCount, allPaths.length);
        } catch (error) {
          preloadError =
            error instanceof Error
              ? error
              : new Error("Unable to finish loading the portfolio images.");
        }
      }
    })
  );

  if (preloadError) {
    setUnlockStatus(preloadError.message, "error");
    return false;
  }

  return true;
}

function preloadSignedImage(signedUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    let isSettled = false;

    image.decoding = "async";

    const finishLoad = () => {
      if (isSettled) {
        return;
      }

      isSettled = true;

      if (typeof image.decode === "function") {
        image.decode().catch(() => {
          // Some browsers reject decode for cached or already-decoded images.
        });
      }

      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.onload = finishLoad;
    image.onerror = () => {
      if (isSettled) {
        return;
      }

      isSettled = true;
      reject(new Error("One of the private images could not be loaded."));
    };
    image.src = signedUrl;

    if (image.complete && image.naturalWidth > 0) {
      finishLoad();
    }
  });
}

function setLoadingPendingState(title, detail) {
  loadingTitle.textContent = title;
  loadingDetail.textContent = detail;
  loadingProgressBar.classList.add("is-indeterminate");
  loadingProgressFill.style.width = "34%";
  loadingProgressText.textContent =
    `${getAllPortfolioPaths().length} items • ${estimatedPortfolioTotalMegabytes} MB total`;
}

function updateLoadingProgress(loadedCount, totalCount) {
  const safeTotalCount = totalCount || 1;
  const progressRatio = Math.min(Math.max(loadedCount / safeTotalCount, 0), 1);
  const loadedMegabytes = estimatedPortfolioTotalMegabytes * progressRatio;

  loadingTitle.textContent = "Downloading items";
  loadingDetail.textContent = "Preparing the portfolio for viewing.";
  loadingProgressBar.classList.remove("is-indeterminate");
  loadingProgressFill.style.width = `${progressRatio * 100}%`;
  loadingProgressText.textContent =
    `${loadedCount} of ${safeTotalCount} items` +
    ` • ${loadedMegabytes.toFixed(1)} / ${estimatedPortfolioTotalMegabytes.toFixed(0)} MB`;
}

async function fetchSignedImageUrlsForPaths(
  password,
  paths,
  { announceSuccess = false, showUnlockPending = false } = {}
) {
  if (!paths.length) {
    return true;
  }

  if (showUnlockPending) {
    setUnlockPending(true);
  }

  if (announceSuccess || showUnlockPending) {
    setUnlockStatus("Loading...", "");
  }

  try {
    const response = await fetch(
      `${supabaseConfig.projectUrl}/functions/v1/${supabaseConfig.functionName}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseConfig.anonKey,
          Authorization: `Bearer ${supabaseConfig.anonKey}`,
        },
        body: JSON.stringify({ password, paths }),
      }
    );

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 401) {
        clearSessionPassword();
        clearSignedImageUrlCache();
      }

      const message =
        response.status === 401
          ? "That password was not accepted."
          : payload.error || "Unable to load private images right now.";

      throw new Error(message);
    }

    const fetchedAt = Date.now();
    let receivedCount = 0;

    (payload.images || []).forEach((entry) => {
      const signedUrl = entry.signedUrl || entry.signedURL || entry.signed_url || entry.url;

      if (entry.path && signedUrl) {
        signedImageUrlMap.set(entry.path, { signedUrl, fetchedAt });
        receivedCount += 1;
      }
    });

    if (!receivedCount) {
      throw new Error("No private image URLs were returned.");
    }

    const unresolvedPaths = paths.filter((path) => !getFreshSignedImageUrl(path));

    if (unresolvedPaths.length) {
      throw new Error("Some private images could not be unlocked.");
    }

    reviewPassword = password;
    persistSessionPassword(password);
    persistSignedImageUrlCache();
    setUnlockStatus(announceSuccess ? "Access granted." : "", announceSuccess ? "success" : "");
    return true;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to continue right now.";

    setUnlockStatus(message, "error");
    return false;
  } finally {
    if (showUnlockPending) {
      setUnlockPending(false);
    }
  }
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

  1. Replace `src` with the bucket filename when you add or swap images.
  2. Upload the matching bucket file using that same standardized filename.
     Example: `ceramics-glass-image-01.jpg`
  3. Legacy `assets/images/...` values still work, but plain filenames are the preferred format.
  4. If you need a custom bucket path, set `storagePath` directly on the item.
  5. Set `column` to `1`, `2`, or `3` to place an image in a specific desktop column.
  6. `padding` is optional and defaults to `"none"`. Use `"small"`, `"medium"`, or `"big"`
     to keep the frame size while shrinking the image slightly inside it.
  7. `zoom` is optional and defaults to `0`. Use a value from `0` to `1`.
     Example: `zoom: 0.5` renders the image at 1.5x, centered and cropped by the frame.
  8. Fine-tune gallery crop and centering in `gallery-overrides.css`.
  9. Each image gets a selector based on category + title, for example:
     .work-card[data-card="ceramics-glass-penelope"]
*/
