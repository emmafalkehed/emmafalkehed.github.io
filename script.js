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
          src: "assets/images/ceramics-glass-image-01.jpg",
          alt: "Three Penelope pencil holders arranged on a white background.",
        },
        {
          slug: "marceau-group",
          title: "Marceau",
          meta: "Collection grouping, tonal palette",
          column: 2,
          padding: "none",
          src: "assets/images/ceramics-glass-image-02.jpg",
          alt: "Grouped Marceau objects in varied tones on a dark background.",
        },
        {
          slug: "black-vessel-top",
          title: "Black vessel",
          meta: "Object study, top view",
          column: 3,
          padding: "small",
          src: "assets/images/ceramics-glass-image-03.jpeg",
          alt: "A dark sculptural vessel photographed from above on a pale background.",
        },
        {
          slug: "ulysse-figue",
          title: "Ulysse Figue",
          meta: "Close material study",
          column: 1,
          padding: "big",
          src: "assets/images/ceramics-glass-image-04.jpg",
          alt: "Close-up of the Ulysse Figue object's glossy twisted surface.",
        },
        {
          slug: "trinity-mocha",
          title: "Trinity",
          meta: "Box profile, lacquer sheen",
          column: 2,
          padding: "none",
          src: "assets/images/ceramics-glass-image-05.jpg",
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
          src: "assets/images/wood-lacquer-image-01.jpg",
          alt: "Two nested Nestor trays on a white background.",
        },
        {
          slug: "nestor-detail",
          title: "Nestor detail",
          meta: "Tray corner and handle",
          column: 2,
          padding: "none",
          src: "assets/images/wood-lacquer-image-02.jpg",
          alt: "Close-up detail of the Nestor tray corner and handle.",
        },
        {
          slug: "trinity-mocha",
          title: "Trinity",
          meta: "Mocha lacquer, surface detail",
          column: 3,
          padding: "none",
          src: "assets/images/wood-lacquer-image-03.jpg",
          alt: "Close-up of the Trinity box in mocha lacquer.",
        },
        {
          slug: "black-object-side",
          title: "Black object",
          meta: "Sculpted profile, side view",
          column: 1,
          padding: "none",
          src: "assets/images/wood-lacquer-image-04.jpeg",
          alt: "A dark sculptural object photographed in profile on a pale background.",
        },
        {
          slug: "marceau-finish",
          title: "Marceau",
          meta: "Material palette and finish",
          column: 2,
          padding: "none",
          src: "assets/images/wood-lacquer-image-05.jpg",
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
          src: "assets/images/metal-silver-image-01.jpg",
          alt: "An object displayed on a marble mantel in an interior setting.",
        },
        {
          slug: "black-vessel-rim",
          title: "Black vessel",
          meta: "Topography and rim detail",
          column: 2,
          padding: "none",
          src: "assets/images/metal-silver-image-02.jpeg",
          alt: "Dark sculptural object in close-up profile view.",
        },
        {
          slug: "black-vessel-overhead",
          title: "Black vessel",
          meta: "Overhead silhouette",
          column: 3,
          padding: "none",
          src: "assets/images/metal-silver-image-03.jpeg",
          alt: "Dark sculptural object viewed from above.",
        },
        {
          slug: "trinity-gloss",
          title: "Trinity",
          meta: "Gloss finish detail",
          column: 1,
          padding: "none",
          src: "assets/images/metal-silver-image-04.jpg",
          alt: "Glossy close-up of the Trinity box.",
        },
        {
          slug: "marceau-reflection",
          title: "Marceau",
          meta: "Reflective grouping study",
          column: 2,
          padding: "none",
          src: "assets/images/metal-silver-image-05.jpg",
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
          src: "assets/images/furniture-image-01.jpg",
          alt: "Object staged on a marble mantel in an interior.",
        },
        {
          slug: "marceau-context",
          title: "Marceau",
          meta: "Collection in context",
          column: 2,
          padding: "none",
          src: "assets/images/furniture-image-02.jpg",
          alt: "Grouped Marceau collection objects.",
        },
        {
          slug: "nestor-composition",
          title: "Nestor",
          meta: "Large and small tray composition",
          column: 3,
          padding: "none",
          src: "assets/images/furniture-image-03.jpg",
          alt: "Pair of Nestor trays.",
        },
        {
          slug: "object-study-black",
          title: "Object study",
          meta: "Monolithic black form",
          column: 1,
          padding: "none",
          src: "assets/images/furniture-image-04.jpeg",
          alt: "Dark sculptural object shown in profile.",
        },
        {
          slug: "nestor-detail-console",
          title: "Nestor detail",
          meta: "Joinery and edge condition",
          column: 2,
          padding: "none",
          src: "assets/images/furniture-image-05.jpg",
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
          src: "assets/images/projects-image-01.jpg",
          alt: "Overview of the Marceau project objects.",
        },
        {
          slug: "line-bursegan-project",
          title: "Line Bursegan",
          meta: "Object in interior context",
          column: 2,
          padding: "none",
          src: "assets/images/projects-image-02.jpg",
          alt: "Marceau object displayed in an interior environment.",
        },
        {
          slug: "nestor-joinery",
          title: "Nestor",
          meta: "Material and joinery detail",
          column: 3,
          padding: "none",
          src: "assets/images/projects-image-03.jpg",
          alt: "Close-up of Nestor tray materials and joinery.",
        },
        {
          slug: "black-vessel-form",
          title: "Black vessel",
          meta: "Form exploration, overhead",
          column: 1,
          padding: "none",
          src: "assets/images/projects-image-04.jpeg",
          alt: "Overhead view of a dark sculptural object.",
        },
        {
          slug: "penelope-process",
          title: "Penelope",
          meta: "Accessory study and silhouette",
          column: 2,
          padding: "none",
          src: "assets/images/projects-image-05.jpg",
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

const signedUrlRefreshWindowMs = 55 * 60 * 1000;
const signedImageUrlCacheKey = "emma-falkehed-signed-image-cache-v2";
const reviewPasswordSessionKey = "emma-falkehed-review-password";
const desktopGalleryColumnCount = 3;
const imagePaddingOptions = new Set(["none", "small", "medium", "big"]);

const navButtons = [...document.querySelectorAll(".category-link")];
const siteHeader = document.getElementById("site-header");
const galleryView = document.getElementById("gallery-view");
const cvView = document.getElementById("cv-view");
const galleryTrack = document.getElementById("gallery-track");
const unlockPanel = document.getElementById("unlock-panel");
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

let activeCategoryId = getInitialCategory();
let reviewPassword = "";
let signedImageUrlMap = new Map();
let categoryFetchPromises = new Map();
let categoryPrefetchSequence = 0;
let renderSequence = 0;
let galleryColumnCount = getGalleryColumnCount();

restoreCachedAccessState();
void renderCategory(activeCategoryId);
bindEvents();

function bindEvents() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      void setActiveCategory(button.dataset.category || "ceramics-glass");
    });
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

async function handleUnlockSubmit(event) {
  event.preventDefault();

  const password = unlockInput.value.trim();

  if (!password) {
    setUnlockStatus("Enter the password.", "error");
    unlockInput.focus();
    return;
  }

  const isUnlocked = await ensureCategoryImages(activeCategoryId, password, {
    announceSuccess: true,
    showUnlockPending: true,
  });

  if (!isUnlocked) {
    return;
  }

  unlockInput.value = "";
  await renderCategory(activeCategoryId);
  void prefetchRemainingCategories(activeCategoryId);
}

async function setActiveCategory(categoryId) {
  activeCategoryId = categoryId;
  window.history.replaceState(null, "", `#${categoryId}`);
  await renderCategory(categoryId);
}

async function renderCategory(categoryId) {
  const currentRender = ++renderSequence;

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

  if (!hasFreshCategoryImages(category.id)) {
    if (!reviewPassword) {
      const statusMessage = unlockStatus.textContent;
      const statusState = unlockStatus.dataset.state || "";
      showUnlockPanel(
        reviewPassword ? statusMessage || "Enter the password again." : "",
        reviewPassword ? statusState || "error" : ""
      );
      return;
    }

    renderGalleryCategory(category);

    const hasImageAccess = await ensureCategoryImages(category.id);

    if (currentRender !== renderSequence) {
      return;
    }

    if (!hasImageAccess) {
      showUnlockPanel(
        unlockStatus.textContent || "Enter the password again.",
        unlockStatus.dataset.state || "error"
      );
      return;
    }
  }

  renderGalleryCategory(category);
  void prefetchRemainingCategories(category.id);
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
    image.src = resolveImageSource(item, categoryId, categoryLabel, index);
    image.alt = item.alt || item.title;
    image.loading = "lazy";
    image.decoding = "async";
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

function showUnlockPanel(message = "", state = "") {
  siteHeader.classList.add("is-hidden");
  galleryView.classList.remove("is-hidden");
  cvView.classList.add("is-hidden");
  copyrightBadge.classList.add("is-hidden");
  unlockPanel.classList.remove("is-hidden");
  galleryTrack.classList.add("is-hidden");
  galleryTrack.innerHTML = "";
  setUnlockStatus(message, state);
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
  void renderCategory(activeCategoryId);
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
  if (item.storagePath) {
    return item.storagePath;
  }

  if (!item.src) {
    return "";
  }

  return getSourceFilename(item.src);
}

function getSourceFilename(sourcePath) {
  return decodeURIComponent(sourcePath.replace(/^assets\/images\//, ""));
}

function getCategoryPaths(categoryId) {
  const category = getCategoryById(categoryId);

  if (!category) {
    return [];
  }

  return [...new Set(category.items.map((item) => getStoragePath(item, categoryId)).filter(Boolean))];
}

function restoreCachedAccessState() {
  restoreSessionPassword();
  restoreSignedImageUrlCache();
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

async function ensureImageForItem(item, categoryId) {
  const storagePath = getStoragePath(item, categoryId);

  if (!storagePath || getFreshSignedImageUrl(storagePath)) {
    return true;
  }

  if (!reviewPassword) {
    return false;
  }

  return ensureCategoryImages(categoryId);
}

async function ensureCategoryImages(
  categoryId,
  password = reviewPassword,
  { announceSuccess = false, showUnlockPending = false } = {}
) {
  if (hasFreshCategoryImages(categoryId)) {
    return true;
  }

  if (!password) {
    return false;
  }

  const existingFetch = categoryFetchPromises.get(categoryId);

  if (existingFetch) {
    return existingFetch;
  }

  const fetchPromise = fetchSignedImageUrlsForPaths(password, getCategoryPaths(categoryId), {
    announceSuccess,
    showUnlockPending,
  }).finally(() => {
    categoryFetchPromises.delete(categoryId);
  });

  categoryFetchPromises.set(categoryId, fetchPromise);
  return fetchPromise;
}

async function prefetchRemainingCategories(priorityCategoryId) {
  if (!reviewPassword) {
    return;
  }

  const currentSequence = ++categoryPrefetchSequence;
  const categoryIds = portfolioData.categories
    .map((category) => category.id)
    .filter((categoryId) => categoryId !== priorityCategoryId);

  for (const categoryId of categoryIds) {
    if (currentSequence !== categoryPrefetchSequence) {
      return;
    }

    if (hasFreshCategoryImages(categoryId)) {
      continue;
    }

    const wasFetched = await ensureCategoryImages(categoryId);

    if (!wasFetched) {
      return;
    }
  }
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

  1. Replace `src` with your file path when you add or swap images.
  2. Upload the matching bucket file using the same standardized filename.
     Example: `ceramics-glass-image-01.jpg`
  3. If you need a custom bucket path, set `storagePath` directly on the item.
  4. Set `column` to `1`, `2`, or `3` to place an image in a specific desktop column.
  5. `padding` is optional and defaults to `"none"`. Use `"small"`, `"medium"`, or `"big"`
     to keep the frame size while shrinking the image slightly inside it.
  6. `zoom` is optional and defaults to `0`. Use a value from `0` to `1`.
     Example: `zoom: 0.5` renders the image at 1.5x, centered and cropped by the frame.
  7. Fine-tune gallery crop and centering in `gallery-overrides.css`.
  8. Each image gets a selector based on category + title, for example:
     .work-card[data-card="ceramics-glass-penelope"]
*/
