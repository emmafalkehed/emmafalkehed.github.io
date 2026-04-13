/*
  Optional per-image fields:

  - `column`: `1`, `2`, or `3` for desktop column placement
  - `padding`: `"none"`, `"small"`, `"medium"`, or `"big"`; defaults to `"none"`
    Applies only to the fixed gallery card frame.
  - `lightboxPadding`: `"none"`, `"small"`, `"medium"`, or `"big"`; defaults to `"none"`
    Optional extra inset for the expanded image view.
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
          slug: "vase-antoinette-01",
          title: "Vase Antoinette",
          meta: "Vase in blown glass, for G&B",
          column: 1,
          src: "ceramics-glass-vase-antoinette-01.jpg",
          alt: "Vase Antoinette in blown glass, for G&B",
        },
        {
          slug: "vase-antoinette-02",
          title: "Vase Antoinette",
          meta: "Vase in blown glass, for G&B",
          column: 2,
          src: "ceramics-glass-vase-antoinette-02.jpg",
          alt: "Vase Antoinette in blown glass, for G&B",
        },
        {
          slug: "vase-antoinette-03",
          title: "Vase Antoinette",
          meta: "Vase in blown glass, for G&B. Exists in transparent, white and celadon versions",
          column: 3,
          src: "ceramics-glass-vase-antoinette-03.jpg",
          alt: "Vase Antoinette in blown glass,for G&B",
        },
        {
          slug: "boite-aurita-02",
          title: "Aurita Box",
          meta: "Aurita box in porcelain, transparent glaze inside, for G&B",
          column: 1,
          src: "ceramics-glass-boite-aurita-02.jpg",
          alt: "Aurita box in porcelain, transparent glaze inside, for G&B",
        },
        {
          slug: "boite-aurita-03",
          title: "Aurita Box",
          meta: "Aurita box in porcelain, transparent glaze inside, for G&B",
          column: 2,
          src: "ceramics-glass-boite-aurita-03.jpg",
          alt: "Aurita box in porcelain, transparent glaze inside, for G&B",
        },
        {
          slug: "boite-aurita-line-bursegan-01",
          title: "Aurita Box",
          meta: "Aurita box in porcelain, photography by Line Bursegan,for G&B",
          column: 3,
          src: "ceramics-glass-boite-aurita-Line Bursegan -01.jpg",
          alt: "Aurita box in porcelain, photography by Line Bursegan,for G&B",
        },
        {
          slug: "diffuseur-ondine-01",
          title: "Ondine Diffuser",
          meta: "Ondine diffuser in blown glass, for G&B",
          column: 1,
          src: "ceramics-glass-diffuseur-ondine-01.jpg",
          alt: "Ondine diffuser in blown glass, for G&B",
        },
        {
          slug: "diffuseur-ondine-04",
          title: "Ondine Diffuser",
          meta: "Ondine diffuser research sketches, for G&B",
          column: 3,
          src: "ceramics-glass-diffuseur-ondine-04.jpg",
          alt: "Ondine diffuser in blown glass, for G&B",
        },
        {
          slug: "diffuseur-ondine-05",
          title: "Ondine Diffuser",
          meta: "Ondine diffuser research sketches, for G&B",
          column: 1,
          src: "ceramics-glass-diffuseur-ondine-05.jpg",
          alt: "Ondine diffuser in blown glass, for G&B",
        },
         {
          slug: "diffuseur-ondine-06",
          title: "Ondine Diffuser",
          meta: "Ondine diffuser in blown glass, for G&B",
          column: 2,
          src: "ceramics-glass-diffuseur-ondine-06.jpg",
          alt: "Ondine diffuser in blown glass, for G&B",
        },
        {
          slug: "diffuseur-ondine-process-02",
          title: "Ondine Diffuser",
          meta: "Glassblowing process with metal mold",
          column: 2,
          padding: "big",
          src: "ceramics-glass-diffuseur-ondine-process-02.png",
          alt: "Ondine Diffuser process image",
        },
        {
          slug: "eclats-souffles-01",
          title: "Glasses, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 3,
          src: "ceramics-glass-eclats-souffles-01.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-022",
          title: "Dessert cup, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 2,
          src: "ceramics-glass-eclats-souffles-022.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-03",
          title: "Dessert cup, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 3,
          src: "ceramics-glass-eclats-souffles-03.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-04",
          title: "Centerpiece, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 1,
          src: "ceramics-glass-eclats-souffles-04.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-06",
          title: "Centerpiece, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 2,
          src: "ceramics-glass-eclats-souffles-06.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-07",
          title: "Night Carafe, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 3,
          src: "ceramics-glass-eclats-souffles-07.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-08",
          title: "Night Carafe, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 1,
          src: "ceramics-glass-eclats-souffles-08.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-09",
          title: "Night Carafe, Eclats Soufflés Collection",
          meta: "Speckled blown glass, Eclats Soufflés Collection for G&B",
          column: 2,
          src: "ceramics-glass-eclats-souffles-09.jpg",
          alt: "Eclats Souffles blown glass object",
        },
        {
          slug: "eclats-souffles-process-01",
          title: "Glassblowing process",
          meta: "Eclats Soufflés Collection glassblowing process with wooden molds",
          column: 3,
          padding: "big",
          src: "ceramics-glass-eclats-souffles-process-01.jpg",
          alt: "Eclats Souffles process image",
        },
        {
          slug: "eclats-souffles-process-03",
          title: "Glassblowing process",
          meta: "Eclats Soufflés Collection glassblowing process with wooden molds",
          column: 2,
          padding: "big",
          src: "ceramics-glass-eclats-souffles-process-03.jpg",
          alt: "Eclats Souffles process image",
        },
        {
          slug: "eclats-souffles-process-05",
          title: "Glassblowing process",
          meta: "Eclats Soufflés Collection glassblowing process with wooden molds",
          column: 3,
          padding: "big",
          src: "ceramics-glass-eclats-souffles-process-05.png",
          alt: "Eclats Souffles process image",
        },
        {
          slug: "vase-tresse-01",
          title: "Tresse Vase",
          meta: "Vase in glazed earthenware, for G&B",
          column: 1,
          src: "ceramics-glass-vase-tresse-01.jpg",
          alt: "Vase Tresse glass vase",
        },
        {
          slug: "vase-tresse-02",
          title: "Tresse Vase",
          meta: "Manufacturing process, plaster mold model",
          column: 2,
          padding: "big",
          src: "ceramics-glass-vase-tresse-02.jpg",
          alt: "Vase Tresse glass vase",
        },
        {
          slug: "vase-tresse-03",
          title: "Tresse Vase",
          meta: "Vase in glazed earthenware, for G&B",
          column: 3,
          src: "ceramics-glass-vase-tresse-03.jpg",
          alt: "Vase Tresse glass vase",
        },
        {
          slug: "vase-tresse-04",
          title: "Tresse Vase",
          meta: "Manufacturing process, glaze research",
          column: 1,
          padding: "big",
          src: "ceramics-glass-vase-tresse-04.jpg",
          alt: "Vase Tresse glass vase",
        },
                {
          slug: "vase-croquis-01",
          title: "Sketches",
          meta: "Vase research sketches",
          column: 1,
          src: "ceramics-glass-vase-croquis-01.jpg",
          alt: "Vase Croquis sketch study",
        },
        {
          slug: "vase-croquis-02",
          title: "Sketches",
          meta: "Vase research sketches",
          column: 2,
          src: "ceramics-glass-vase-croquis-02.jpg",
          alt: "Vase Croquis sketch study",
        },
        {
          slug: "vase-croquis-03",
          title: "Sketches",
          meta: "Vase research sketches",
          column: 3,
          src: "ceramics-glass-vase-croquis-03.jpg",
          alt: "Vase Croquis sketch study",
        },
                {
          slug: "bougeoir-hestia-01",
          title: "Hestia Candleholder",
          meta: "Hestia candleholder in procelain, for G&B",
          column: 1,
          src: "ceramics-glass-bougeoir-hestia-01.jpg",
          alt: "Hestia candleholder in procelain, for G&B",
        },
        {
          slug: "bougeoir-hestia-02",
          title: "Hestia Candleholder",
          meta: "Hestia candleholder in procelain, for G&B",
          column: 2,
          src: "ceramics-glass-bougeoir-hestia-02.jpg",
          alt: "Hestia candleholder in procelain, for G&B",
        },
        {
          slug: "bougie-dune-01",
          title: "Dune Scented Candle",
          meta: "Dune scented candle in porcelain, for G&B",
          column: 3,
          src: "ceramics-glass-bougie-dune-01.jpg",
          alt: "Dune scented candle in porcelain, for G&B",
        },
      ],
    },
    {
      id: "wood-lacquer",
      label: "wood & lacquer",
      items: [
        {
          slug: "box-ania-02",
          title: "Box Ania",
          meta: "Lacquered box with duck eggshells, for G&B",
          column: 1,
          src: "wood-lacquer-box-ania-02.jpg",
          alt: "Box Ania lacquered box",
        },
        {
          slug: "box-ania-03",
          title: "Box Ania",
          meta: "Lacquered box with duck eggshells, for G&B",
          column: 1,
          src: "wood-lacquer-box-ania-03.jpg",
          alt: "Box Ania lacquered box",
        },
        {
          slug: "box-ania-05",
          title: "Box Ania",
          meta: "Process of making the box with the eggshells",
          column: 3,
          padding: "big",
          src: "wood-lacquer-box-ania-05.jpg",
          alt: "Box Ania lacquered box",
        },
        {
          slug: "box-ania-acajou-01",
          title: "Box Ania",
          meta: "Black tinted brushed Mahogany box, for G&B",
          column: 1,
          src: "wood-lacquer-box-ania-acajou-01.jpg",
          alt: "Box Ania Acajou lacquered box",
        },
        {
          slug: "box-ania-acajou-line-bursegan-03",
          title: "Box Ania Acajou",
          meta: "Ania Mahogany box, photography by Line Bursegan, for G&B",
          column: 2,
          src: "wood-lacquer-box-ania-acajou-Line Bursegan-03.jpg",
          alt: "Box Ania Acajou in a Line Bursegan view",
        },
        {
          slug: "box-lacquer",
          title: "Lacquer Box",
          meta: "Wood and lacquer object",
          column: 3,
          src: "wood-lacquer-box-laquer.jpg",
          alt: "Wood and lacquer box",
        },
        {
          slug: "box-rhea-01",
          title: "Tissue box Rhea",
          meta: "White sycamore tissue box, for G&B",
          column: 1,
          src: "wood-lacquer-box-rhea-01.jpg",
          alt: "Tissue box Rhea",
        },
        {
          slug: "box-rhea-02",
          title: "Tissue box Rhea",
          meta: "White sycamore tissue box, for G&B",
          column: 2,
          src: "wood-lacquer-box-rhea-02.jpg",
          alt: "Tissue box Rhea",
        },
        {
          slug: "box-trinity-01",
          title: "Box Trinity",
          meta: "Box in lacquered wood, for G&B",
          column: 3,
          src: "wood-lacquer-box-trinity-01.jpg",
          alt: "Box Trinity lacquered box",
        },
        {
          slug: "box-trinity-02",
          title: "Box Trinity",
          meta: "Box in lacquered wood, for G&B",
          column: 1,
          src: "wood-lacquer-box-trinity-02.jpg",
          alt: "Box Trinity lacquered box",
        },
        {
          slug: "box-trinity-03",
          title: "Box Trinity",
          meta: "Box in lacquered wood, for G&B",
          column: 2,
          src: "wood-lacquer-box-trinity-03.jpg",
          alt: "Box Trinity lacquered box",
        },
        {
          slug: "box-trinity-04",
          title: "Box Trinity",
          meta: "Box in lacquered wood, for G&B",
          column: 3,
          src: "wood-lacquer-box-trinity-04.jpg",
          alt: "Box Trinity lacquered box",
        },
        {
          slug: "cadre-bastien-01",
          title: "Bastien Photo Frame",
          meta: "Frames in tinted cassia wood and white sycamore, for G&B",
          column: 1,
          src: "wood-lacquer-cadre-bastien-01.jpg",
          alt: "Cadre Bastien frame",
        },
        {
          slug: "cadre-bastien-02",
          title: "Bastien Photo Frame",
          meta: "Frame in tinted cassia wood, for G&B",
          column: 2,
          src: "wood-lacquer-cadre-bastien-02.jpg",
          alt: "Cadre Bastien frame",
        },
        {
          slug: "cadre-bastien-03",
          title: "Bastien Photo Frame",
          meta: "Frame in white sycamore, for G&B",
          column: 3,
          src: "wood-lacquer-cadre-bastien-03.jpg",
          alt: "Cadre Bastien frame",
        },
        {
          slug: "line-bursegan-interior",
          title: "Nino Photo Frame",
          meta: "Frame in white sycamore, photography by Line Bursegan, for G&B",
          column: 1,
          padding: "none",
          src: "metal-silver-image-01.jpg",
          alt: "An object displayed on a marble mantel in an interior setting",
        },
        {
          slug: "cadre-nino-02",
          title: "Nino Photo Frame",
          meta: "Frame in white sycamore wood with removable feet in tinted cassia wood, for G&B",
          column: 1,
          src: "wood-lacquer-cadre-nino-02.jpg",
          alt: "Cadre Nino frame",
        },
        {
          slug: "cadre-nino-03",
          title: "Nino Photo Frame",
          meta: "Frame in white sycamore wood with removable feet in tinted cassia wood, for G&B",
          column: 2,
          src: "wood-lacquer-cadre-nino-03.jpg",
          alt: "Cadre Nino frame",
        },
        {
          slug: "centredetable-noeud-01",
          title: "Noeud Centerpiece",
          meta: "Centerpiece in Black tinted brushed mahagony carved wood, for G&B",
          column: 1,
          src: "wood-lacquer-centredetable-noeud-01.jpeg",
          alt: "Noeud Centerpiece",
        },
        {
          slug: "centredetable-noeud-02",
          title: "Noeud Centerpiece",
          meta: "Centerpiece in Black tinted brushed mahagony carved wood, for G&B",
          column: 2,
          src: "wood-lacquer-centredetable-noeud-02.jpeg",
          alt: "Noeud Centerpiece",
        },
        {
          slug: "centredetable-noeud-03",
          title: "Noeud Centerpiece",
          meta: "Centerpiece in Black tinted brushed mahagony carved wood, for G&B",
          column: 3,
          src: "wood-lacquer-centredetable-noeud-03.jpeg",
          alt: "Noeud Centerpiece",
        },
        {
          slug: "mirroir-adam-01",
          title: "Adam Mirror",
          meta: "Mirror in Black tinted brushed pinewood, for G&B",
          column: 1,
          src: "wood-lacquer-mirroir-adam-01.jpg",
          alt: "Mirroir Adam mirror",
        },
        {
          slug: "mirroir-adam-02",
          title: "Adam Mirror",
          meta: "Mirror in Black tinted brushed pinewood, for G&B",
          column: 2,
          src: "wood-lacquer-mirroir-adam-02.jpg",
          alt: "Adam Mirror",
        },
        {
          slug: "mirroir-adam-03",
          title: "Adam Mirror",
          meta: "Mirror in Black tinted brushed pinewood, for G&B",
          column: 3,
          src: "wood-lacquer-mirroir-adam-03.jpg",
          alt: "Adam Mirror",
        },
        {
          slug: "mirroir-celeste-01",
          title: "Celeste Mirror",
          meta: "Mirror in Carved tinted Cassia wood, for G&B",
          column: 2,
          src: "wood-lacquer-mirroir-celeste-01.jpg",
          alt: "Celeste Mirror",
        },
        {
          slug: "mirroir-celeste-03",
          title: "Celeste Mirror",
          meta: "Mirror in Carved tinted Cassia wood, for G&B",
          column: 1,
          src: "wood-lacquer-mirroir-celeste-03.jpg",
          alt: "Celeste Mirror",
        },
        {
          slug: "mirroir-celeste-04",
          title: "Celeste Mirror",
          meta: "Mirror in Carved tinted Cassia wood, for G&B",
          column: 2,
          src: "wood-lacquer-mirroir-celeste-04.jpg",
          alt: "Celeste Mirror",
        },
        {
          slug: "penholder-penelope-01",
          title: "Penholder Penelope",
          meta: "Pen holder in lacquered wood, for G&B",
          column: 1,
          src: "wood-lacquer-penholder-penelope-01.jpg",
          alt: "Penholder Penelope",
        },
        {
          slug: "penholder-penelope-02",
          title: "Penholder Penelope",
          meta: "Pen holder in lacquered wood, for G&B",
          column: 2,
          src: "wood-lacquer-penholder-penelope-02.jpg",
          alt: "Penholder Penelope",
        },
        {
          slug: "penholder-penelope-03",
          title: "Penholder Penelope",
          meta: "Pen holder in lacquered wood, for G&B",
          column: 3,
          src: "wood-lacquer-penholder-penelope-03.jpg",
          alt: "Penholder Penelope",
        },
        {
          slug: "penholder-penelope-04",
          title: "Penholder Penelope",
          meta: "Pen holder in lacquered wood, for G&B",
          column: 1,
          src: "wood-lacquer-penholder-penelope-04.jpg",
          alt: "Penholder Penelope",
        },
        {
          slug: "penholder-penelope-05",
          title: "Penholder Penelope",
          meta: "Pen holder in lacquered wood, for G&B",
          column: 2,
          src: "wood-lacquer-penholder-penelope-05.jpg",
          alt: "Penholder Penelope",
        },
        {
          slug: "penholder-penelope-06",
          title: "Penholder Penelope",
          meta: "Pen holder in lacquered wood, for G&B",
          column: 3,
          src: "wood-lacquer-penholder-penelope-06.jpg",
          alt: "Penholder Penelope",
        },
        {
          slug: "plateau-coco-01",
          title: "Coco Tray",
          meta: "Manufacturing process of the Coco tray in bent wood",
          column: 2,
          padding: "big",
          src: "wood-lacquer-plateau-coco-01.jpg",
          alt: "Plateau Coco tray",
        },
        {
          slug: "plateau-coco-02",
          title: "Coco Tray",
          meta: "Tray in mahagony bent wood and tinted rattan, for G&B",
          column: 3,
          src: "wood-lacquer-plateau-coco-02.jpg",
          alt: "Plateau Coco tray",
        },
        {
          slug: "plateau-coco-03",
          title: "Coco Tray",
          meta: "Tray in sycamore bent wood and tinted rattan, for G&B",
          column: 1,
          src: "wood-lacquer-plateau-coco-03.jpg",
          alt: "Plateau Coco tray",
        },
        {
          slug: "plateau-coco-05",
          title: "Coco Tray",
          meta: "Manufacturing process of the Coco tray in bent wood",
          column: 3,
          padding: "big",
          src: "wood-lacquer-plateau-coco-05.jpg",
          alt: "Plateau Coco tray",
        },
        {
          slug: "plateau-nestor-01",
          title: "Nestor Trays",
          meta: "Nestor trays, in Amamra wood, for G&B",
          column: 1,
          src: "wood-lacquer-plateau-nestor-01.jpg",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-02",
          title: "Nestor Tray",
          meta: "Nestor tray in Amara wood, for G&B",
          column: 2,
          src: "wood-lacquer-plateau-nestor-02.jpg",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-03",
          title: "Nestor Trays",
          meta: "Trays in Amara wood and White Sycamore wood, for G&B",
          column: 3,
          src: "wood-lacquer-plateau-nestor-03.jpg",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-04",
          title: "Nestor Tray",
          meta: "Nested tray in white sycamore wood, for G&B",
          column: 1,
          src: "wood-lacquer-plateau-nestor-04.jpg",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-05",
          title: "Nestor Tray",
          meta: "Tray in White Sycamore wood, for G&B",
          column: 2,
          src: "wood-lacquer-plateau-nestor-05.jpg",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-06",
          title: "Nestor Tray",
          meta: "Process of the 3D handle details",
          column: 3,
          padding: "big",
          src: "wood-lacquer-plateau-nestor-06.png",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-07",
          title: "Nestor Tray",
          meta: "Woodworking process of the tray",
          column: 1,
          padding: "big",
          src: "wood-lacquer-plateau-nestor-07.jpg",
          alt: "Nestor tray set",
        },
        {
          slug: "plateau-nestor-08",
          title: "Nestor Tray",
          meta: "Woodworking process of the tray",
          column: 2,
          padding: "big",
          src: "wood-lacquer-plateau-nestor-08.jpg",
          alt: "Nestor tray set",
        },
      ],
    },
    {
      id: "metal-silver",
      label: "metal & silver",
      items: [
        {
          slug: "bougeoir-pli-02",
          title: "Pli Candleholder",
          meta: "Candleholder in cast brass, for G&B",
          column: 3,
          src: "metal-silver-bougeoir-pli-02.jpg",
          alt: "Bougeoir Pli silver candleholder",
        },
        {
          slug: "bougeoir-pli-03",
          title: "Pli Candleholder",
          meta: "Candleholder in cast brass, for G&B",
          column: 1,
          src: "metal-silver-bougeoir-pli-03.jpg",
          alt: "Bougeoir Pli silver candleholder",
        },
        {
          slug: "bougeoir-pli-04",
          title: "Pli Candleholder",
          meta: "Candleholder in cast brass, for G&B",
          column: 2,
          src: "metal-silver-bougeoir-pli-04.jpg",
          alt: "Bougeoir Pli silver candleholder",
        },
        {
          slug: "coupe-barque-01",
          title: "Barque cup",
          meta: "Cup in brushed brass, for G&B",
          column: 3,
          src: "metal-silver-coupe-barque-01.jpg",
          alt: "Coupe Barque silver bowl",
        },
        {
          slug: "coupe-barque-02",
          title: "Barque cup",
          meta: "Cup in brushed brass, for G&B",
          column: 1,
          src: "metal-silver-coupe-barque-02.jpg",
          alt: "Coupe Barque silver bowl",
        },
       {
          slug: "ronds-serviette-02",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 3,
          src: "metal-silver-ronds-serviette-02.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
        {
          slug: "ronds-serviette-01",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 2,
          src: "metal-silver-ronds-serviette-01.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
       {
          slug: "ronds-serviette-07",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 2,
          src: "metal-silver-ronds-serviette-07.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
        {
          slug: "ronds-serviette-03",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 1,
          src: "metal-silver-ronds-serviette-03.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
        {
          slug: "ronds-serviette-04",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 2,
          src: "metal-silver-ronds-serviette-04.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
        {
          slug: "ronds-serviette-05",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 3,
          src: "metal-silver-ronds-serviette-05.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
        {
          slug: "ronds-serviette-06",
          title: "Napkin ring",
          meta: "Napkin ring in silver coated brass, for G&B",
          column: 1,
          src: "metal-silver-ronds-serviette-06.jpg",
          alt: "Ronds Serviette silver napkin ring",
        },
        {
          slug: "cardholder-silver-01",
          title: "Cardholder",
          meta: "Silvercoated brass cardholder, for G&B",
          column: 3,
          src: "metal&silver-cardholder-silver-01.JPG",
          alt: "Silver cardholder",
        },
        {
          slug: "cardholder-silver-02",
          title: "Cardholder",
          meta: "Silvercoated brass cardholder, for G&B",
          column: 1,
          src: "metal&silver-cardholder-silver-02.jpg",
          alt: "Silver cardholder",
        },
        {
          slug: "cardholder-silver-03",
          title: "Cardholder",
          meta: "Silvercoated brass cardholder, for G&B",
          column: 2,
          src: "metal&silver-cardholder-silver-03.JPG",
          alt: "Silver cardholder",
        },
        {
          slug: "cardholder-01",
          title: "Cardholder",
          meta: "Cardholder 3D print process picture",
          column: 3,
          padding: "big",
          src: "metal-silver-cardholder-01.jpg",
          alt: "Silver cardholder",
        },
        {
          slug: "cardholder-03",
          title: "Cardholder",
          meta: "Cardholder brass casting process picture",
          column: 2,
          padding: "big",
          src: "metal-silver-cardholder-03.jpg",
          alt: "Silver cardholder",
        },
        {
          slug: "socles-bougie-03",
          title: "Candle holders",
          meta: "Candleholders 3D printing process picture",
          column: 3,
          padding: "big",
          src: "metal-silver-socles-bougie-03.jpg",
          alt: "Socles Bougie silver candle base",
        },
        {
          slug: "socles-bougie-01",
          title: "Candle holders",
          meta: "Candleholders in silver coated brass, for G&B",
          column: 1,
          src: "metal-silver-socles-bougie-01.jpg",
          alt: "Socles Bougie silver candle base",
        },
        {
          slug: "socles-bougie-02",
          title: "Candle holders",
          meta: "Candleholders in metal with dark patina, for G&B",
          column: 2,
          src: "metal-silver-socles-bougie-02.jpg",
          alt: "Socles Bougie silver candle base",
        },
                {
          slug: "matches-holder-02",
          title: "Matches Holder",
          meta: "Silvercoated metal matches holder, for G&B",
          column: 1,
          src: "metal&silver-matches-holder-02.JPG.jpg",
          alt: "Silver matches holder",
        },
         {
          slug: "box-epi-01",
          title: "Box Epi",
          meta: "Box in cast bronze, for G&B",
          column: 3,
          src: "metal-silver-box-epi-01.jpg",
          alt: "Box Epi silver box",
        },
        {
          slug: "box-epi-02",
          title: "Box Epi",
          meta: "Box in cast bronze, for G&B",
          column: 1,
          src: "metal-silver-box-epi-02.jpg",
          alt: "Box Epi silver box",
        },
        {
          slug: "box-epi-03",
          title: "Box Epi",
          meta: "Box in cast bronze, for G&B",
          column: 2,
          src: "metal-silver-box-epi-03.jpg",
          alt: "Box Epi silver box",
        },
      ],
    },
    {
      id: "furniture",
      label: "furniture",
      items: [
        {
          slug: "side-table-corde-01",
          title: "Corde Side Table",
          meta: "Side table with metal feet and stone tabletop, for G&B",
          column: 3,
          src: "furniture-side-table-corde-01.jpg",
          alt: "Side Table Corde",
        },
        {
          slug: "side-table-corde-02",
          title: "Corde Side Table",
          meta: "Side table with metal feet and stone tabletop, for G&B",
          column: 1,
          src: "furniture-side-table-corde-02.jpg",
          alt: "Side Table Corde",
        },
        {
          slug: "side-table-corde-03",
          title: "Corde Side Table",
          meta: "Side table with metal feet and stone tabletop, for G&B",
          column: 2,
          src: "furniture-side-table-corde-03.jpg",
          alt: "Side Table Corde",
        },
         {
          slug: "meuble-bas-acajou-01",
          title: "Low cabinet",
          meta: "Low cabinet in Mahagony black tinted brushed wood, for G&B",
          column: 3,
          src: "furniture-meuble-bas-acajou-01.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-02",
          title: "Low cabinet",
          meta: "Low cabinet in Mahagony black tinted brushed wood, for G&B",
          column: 1,
          src: "furniture-meuble-bas-acajou-02.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-03",
          title: "Low cabinet",
          meta: "Low cabinet in Mahagony black tinted brushed wood, for G&B",
          column: 2,
          src: "furniture-meuble-bas-acajou-03.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-04",
          title: "Low cabinet",
          meta: "Communication pictures during the manufacturing process",
          column: 3,
          padding: "big",
          src: "furniture-meuble-bas-acajou-04.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-05",
          title: "Low cabinet",
          meta: "Communication pictures during the manufacturing process",
          column: 1,
          padding: "big",
          src: "furniture-meuble-bas-acajou-05.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-06",
          title: "Low cabinet",
          meta: "Low cabinet in Mahagony black tinted brushed wood, for G&B",
          column: 2,
          src: "furniture-meuble-bas-acajou-06.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-07",
          title: "Low cabinet",
          meta: "Low cabinet in Mahagony black tinted brushed wood, for G&B",
          column: 3,
          src: "furniture-meuble-bas-acajou-07.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-08",
          title: "Low cabinet",
          meta: "Communication pictures during the manufacturing process",
          column: 1,
          padding: "big",
          src: "furniture-meuble-bas-acajou-08.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "meuble-bas-acajou-10",
          title: "Low cabinet",
          meta: "Low cabinet in Mahagony black tinted brushed wood, for G&B",
          column: 3,
          src: "furniture-meuble-bas-acajou-10.jpeg",
          alt: "Meuble Bas Acajou low cabinet",
        },
        {
          slug: "table-lamp-carved-wood-01",
          title: "Table Lamp",
          meta: "Table lamp in carved Mahagony wood, for G&B",
          column: 2,
          src: "furniture-table-lamp-carved-wood-01.png",
          alt: "Carved wood table lamp",
        },
        {
          slug: "table-lamp-carved-wood-02",
          title: "Table Lamp",
          meta: "Table lamp in carved Mahagony wood, for G&B",
          column: 3,
          src: "furniture-table-lamp-carved-wood-02.jpeg",
          alt: "Carved wood table lamp",
        },
        {
          slug: "table-lamp-carved-wood-03",
          title: "Table Lamp",
          meta: "Table lamp in carved Mahagony wood, for G&B",
          column: 1,
          src: "furniture-table-lamp-carved-wood-03.jpeg",
          alt: "Carved wood table lamp",
        },
        {
          slug: "table-lamp-carved-wood-04",
          title: "Table Lamp",
          meta: "Table lamp in carved Mahagony wood, for G&B",
          column: 2,
          src: "furniture-table-lamp-carved-wood-04.jpeg",
          alt: "Carved wood table lamp",
        },
        {
          slug: "table-lamp-carved-wood-05",
          title: "Table Lamp",
          meta: "Table lamp in carved Mahagony wood, for G&B",
          column: 3,
          src: "furniture-table-lamp-carved-wood-05.jpeg",
          alt: "Carved wood table lamp",
        },
        {
          slug: "table-lamp-carved-wood-06",
          title: "Table Lamp",
          meta: "Table lamp in carved Mahagony wood, for G&B",
          column: 1,
          src: "furniture-table-lamp-carved-wood-06.png",
          alt: "Carved wood table lamp",
        },
        {
          slug: "armoire-rotin-01",
          title: "Rattan Cabinet",
          meta: "Rattan cabinet 3D picture, for G&B",
          column: 1,
          src: "furniture-armoire-rotin-01.png",
          alt: "Armoire Rotin rattan cabinet",
        },
        {
          slug: "armoire-rotin-02",
          title: "Rattan Cabinet",
          meta: "Rattan cabinet 3D picture, for G&B",
          column: 2,
          src: "furniture-armoire-rotin-02.png",
          alt: "Armoire Rotin rattan cabinet",
        },
        {
          slug: "chauffeuse-cythare-01",
          title: "Cythare lounge chair",
          meta: "Lounge chair 3D picture, for G&B",
          column: 3,
          src: "furniture-chauffeuse-cythare-01.png",
          alt: "Chauffeuse Cythare lounge chair",
        },
        {
          slug: "chauffeuse-cythare-02",
          title: "Cythare lounge chair",
          meta: "Lounge chair 3D picture, for G&B",
          column: 1,
          src: "furniture-chauffeuse-cythare-02.png",
          alt: "Chauffeuse Cythare lounge chair",
        },
                {
          slug: "tete-de-lit-01",
          title: "Bed headboard",
          meta: "Upholstered bed headboard, for G&B",
          column: 3,
          src: "furniture-tete-de-lit-01.png",
          alt: "Tete de Lit headboard",
        },
        {
          slug: "floorlamp-carved-wood-01-jpeg",
          title: "Floorlamp",
          meta: "Floor lamp in carved wood, for G&B",
          column: 1,
          src: "furniture-floorlamp-carved-wood-01.jpeg",
          alt: "Carved wood floor lamp",
        },
        {
          slug: "floorlamp-carved-wood-01-png",
          title: "Floorlamp",
          meta: "Floor lamp in carved wood, for G&B",
          column: 2,
          src: "furniture-floorlamp-carved-wood-01.png",
          alt: "Carved wood floor lamp",
        },
        {
          slug: "floorlamp-carved-wood-03",
          title: "Floorlamp",
          meta: "Wood carving process picture",
          column: 3,
          padding: "big",
          src: "furniture-floorlamp-carved-wood-03.jpeg",
          alt: "Carved wood floor lamp",
        },
        {
          slug: "floorlamp-carved-wood-04",
          title: "Floorlamp",
          meta: "Wood carving process picture",
          column: 1,
          padding: "big",
          src: "furniture-floorlamp-carved-wood-04.jpg",
          alt: "Carved wood floor lamp",
        },
        {
          slug: "lampe-kleos-01",
          title: "Kleos Table Lamp",
          meta: "Table Lamp in Black patinated bronze, for G&B",
          column: 3,
          src: "furniture-lampe-kleos-01.jpg",
          alt: "Lampe Kleos",
        },
        {
          slug: "lampe-kleos-02",
          title: "Kleos Table Lamp",
          meta: "Table Lamp in Black patinated bronze, for G&B",
          column: 1,
          src: "furniture-lampe-kleos-02.jpg",
          alt: "Lampe Kleos",
        },
        {
          slug: "lampe-kleos-03",
          title: "Kleos Table Lamp",
          meta: "Table Lamp in Black patinated bronze, for G&B",
          column: 2,
          src: "furniture-lampe-kleos-03.jpg",
          alt: "Lampe Kleos",
        },
        {
          slug: "petit-bureau-01",
          title: "Small Desk",
          meta: "Desk with metal feet and stone tabletop, for G&B",
          column: 1,
          src: "furniture-petit-bureau-01.png",
          alt: "Petit Bureau desk",
        },
        {
          slug: "petit-bureau-02",
          title: "Small Desk",
          meta: "Desk with metal feet and stone tabletop, for G&B",
          column: 2,
          src: "furniture-petit-bureau-02.jpg",
          alt: "Small desk",
        },
        {
          slug: "petit-bureau-04",
          title: "Small Desk",
          meta: "Metalwork process picture",
          column: 1,
          padding: "big",
          src: "furniture-petit-bureau-04.jpg",
          alt: "Small desk",
        },
        {
          slug: "tablelamp-seurat-01",
          title: "Seurat Table lamp",
          meta: "Tablelamp",
          column: 2,
          src: "furniture-tablelamp-seurat-01.JPG",
          alt: "Tablelamp Seurat",
        },
        {
          slug: "tablelamp-seurat-02",
          title: "Table lamp Seurat",
          meta: "Table lamp in speckled blown glass, for G&B",
          column: 3,
          src: "furniture-tablelamp-seurat-02.JPG",
          alt: "Tablelamp Seurat",
        },
        {
          slug: "tablelamp-seurat-03",
          title: "Table lamp Seurat",
          meta: "Table lamp in speckled blown glass, for G&B",
          column: 1,
          src: "furniture-tablelamp-seurat-03.JPG",
          alt: "Tablelamp Seurat",
        },
        {
          slug: "tablelamp-seurat-04",
          title: "Table lamp Seurat",
          meta: "Table lamp in speckled blown glass, for G&B",
          column: 2,
          src: "furniture-tablelamp-seurat-04.JPG",
          alt: "Tablelamp Seurat",
        },
      ],
    },
  ],
};

const supabaseConfig = {
  projectUrl: "https://huezkxyfrqfrrsdmbpoy.supabase.co",
  anonKey:
    "sb_publishable_vhG4wHq-UfeMfFNNupJqVg_IfsJgZnJ",
  functionName: "download-images",
};

const cvSections = [
  {
    heading: "Professional Experience",
    column: "left",
    bodyHtml: `
      <div class="cv-entry">
        <p class="cv-role"><strong>Gilles &amp; Boissier</strong> - Product Designer, Furniture &amp; Objects</p>
        <p class="cv-meta">Paris | 08/2022 - Present</p>
        <p class="cv-subtitle">G&amp;B Collection</p>
        <ul class="cv-list">
          <li>Design and development of furniture and objects, from concept to final product (drawings, 3D modeling, technical documentation)</li>
          <li>Contribution to the development of the collection (new product launches, range updates, showroom activation)</li>
          <li>Prototyping and product development with manufacturers; implementation of production processes for serial production</li>
          <li>Sourcing and selection of manufacturers and artisans; prototype development and technical adjustments</li>
          <li>Production follow-up through to delivery, quality control, and after-sales service management in collaboration with the logistics team</li>
          <li>Coordination with internal teams (Art Direction, Communication, Logistics, Accounting) and external partners (artisans, manufacturers, suppliers)</li>
        </ul>
        <p class="cv-subtitle">FF&amp;E Projects</p>
        <ul class="cv-list">
          <li>Collaboration with interior architects, project managers, FF&amp;E buyers, and other stakeholders</li>
          <li>Development of design proposals and production of FF&amp;E technical documentation</li>
          <li>Project follow-up through all phases up to final installation</li>
        </ul>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Claesson Koivisto Rune</strong> Architects - Design Assistant</p>
        <p class="cv-meta">Stockholm | 09/2021 - 08/2022</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Skandiform</strong> - Design Collaboration</p>
        <p class="cv-meta">Stockholm | 10/2020 - 06/2021</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Mathilde Joncquiere</strong> - Mosaic Workshop Assistant</p>
        <p class="cv-meta">Paris | 2019 - 2021</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Marie Laurent &amp; Nicolas Contreras</strong> - Ceramics Internship</p>
        <p class="cv-meta">Paris | 2017</p>
      </div>
    `,
  },
  {
    heading: "Contact details",
    column: "left",
    body: "emma.falkehed@gmail.com   +33676012671   Paris",
  },
  {
    heading: "Skills",
    column: "right",
    body: "Rhinoceros 3D · Keyshot · Cinema 4D · AutoCAD · Sketchup Adobe Suite (InDesign, Photoshop, Illustrator) 3D Printing"
  },
  {
    heading: "Education",
    column: "right",
    bodyHtml: `
      <div class="cv-entry">
        <p class="cv-role"><strong>Beckmans College of Design</strong> - BA in Furniture &amp; Object Design</p>
        <p class="cv-meta">Stockholm | 2021</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>École Duperré</strong> - Diplôme des Métiers d'Art, Ceramics</p>
        <p class="cv-meta">Paris | 2017</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>École Boulle</strong> - Baccalauréat in Applied Arts</p>
        <p class="cv-meta">Paris | 2015</p>
      </div>
    `,
  },
  {
    heading: "Exhibitions & Nominations",
    column: "right",
    bodyHtml: `
      <div class="cv-entry">
        <p class="cv-role"><strong>Arthreads Global Graduate Show 2021</strong> - Nominee</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Graduation Show "Time Well Spent"</strong></p>
        <p class="cv-meta">Stockholm | 05/2021</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Stockholm Design Week</strong></p>
        <p class="cv-meta">Stockholm | 02/2021</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Beckmans x Designtorget</strong></p>
        <p class="cv-meta">Stockholm | 08/2020</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Group Exhibition "Paysages"</strong></p>
        <p class="cv-meta">Ateliers de Paris | 04/2017</p>
      </div>
      <div class="cv-entry">
        <p class="cv-subtitle">Languages</p>
        <p class="cv-role"><strong>French</strong></p>
        <p class="cv-meta">Native</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>Swedish</strong></p>
        <p class="cv-meta">Full professional proficiency</p>
      </div>
      <div class="cv-entry">
        <p class="cv-role"><strong>English</strong></p>
        <p class="cv-meta">Full professional proficiency</p>
      </div>
    `,
  },
];

const signedUrlRefreshWindowMs = 55 * 60 * 1000;
const signedImageUrlCacheKey = "emma-falkehed-signed-image-cache-v2";
const reviewPasswordSessionKey = "emma-falkehed-review-password";
const reviewPasswordQueryParamKey = "pwd";
const reviewReviewerIdSessionKey = "emma-falkehed-reviewer-id";
const passwordMaxLength = 256;
const pathMaxLength = 512;
const desktopGalleryColumnCount = 3;
const galleryCardFrameAspectRatio = "4 / 5";
const imagePaddingOptions = new Set(["none", "small", "medium", "big"]);
const portfolioImageLoadConcurrency = 4;
const estimatedPortfolioTotalMegabytes = 60.5;
const defaultCategoryId = portfolioData.categories[0]?.id || "gallery";
const legacyPortfolioImagePrefix = "assets/images/";
const localPortfolioImagePrefix = ".images/";
const localImageStatusUrl = "local-image-status.json";
const localImageDirectoryStateEnabled = "enabled";
const localImageDirectoryStateDisabled = "disabled";
const localImageDirectoryStateUnknown = "unknown";

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
let reviewReviewerId = "";
let signedImageUrlMap = new Map();
let localImageAvailabilityMap = new Map();
let localImageAvailabilityPromiseMap = new Map();
let localImageDirectoryState = localImageDirectoryStateUnknown;
let localImageDirectoryStatusPromise = null;
let unavailablePortfolioImagePaths = new Set();
let portfolioFetchPromise = null;
let portfolioPreloadPromise = null;
let navigationSequence = 0;
let galleryColumnCount = getGalleryColumnCount();
const preloadedImageUrls = new Set();
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

  lightboxStage.addEventListener("click", (event) => {
    if (event.target === lightboxStage) {
      closeLightbox();
    }
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

  const leftColumn = document.createElement("div");
  leftColumn.className = "cv-column";

  const rightColumn = document.createElement("div");
  rightColumn.className = "cv-column";

  cvSections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "cv-block";

    const heading = document.createElement("h2");
    heading.textContent = section.heading;

    const body = document.createElement(section.bodyHtml ? "div" : "p");

    if (section.bodyHtml) {
      body.className = "cv-rich";
      body.innerHTML = section.bodyHtml.trim();
    } else {
      body.textContent = section.body;
    }

    block.appendChild(heading);
    block.appendChild(body);

    if (section.column === "right") {
      rightColumn.appendChild(block);
      return;
    }

    leftColumn.appendChild(block);
  });

  grid.append(leftColumn, rightColumn);

  cvView.replaceChildren(grid);
}

async function handleUnlockSubmit(event) {
  event.preventDefault();

  const password = sanitizePasswordInput(unlockInput.value);

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
  article.dataset.orientation = "portrait";
  article.style.setProperty("--card-zoom", String(getImageZoom(item)));

  const mediaContainer = createSingleMedia(article, item, categoryId, categoryLabel, index);

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

function createSingleMedia(article, item, categoryId, categoryLabel, index) {
  const button = document.createElement("button");
  button.className = "work-card__button";
  button.type = "button";
  button.setAttribute("aria-label", `Open ${item.title}`);

  const frame = document.createElement("div");
  frame.className = "work-card__frame";

  const storagePath = getStoragePath(item, categoryId);
  const imageUrl = storagePath ? getResolvedImageUrl(storagePath) : "";
  const shouldRenderPlaceholder = storagePath ? isUnavailablePortfolioImagePath(storagePath) : false;

  if (imageUrl || shouldRenderPlaceholder || !item.src) {
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
          syncCardLayout(article, image.naturalWidth, image.naturalHeight);
        },
        { once: true }
      );
    }

    syncCardLayout(article, image.width, image.height);

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
  lightboxStage.dataset.padding = getLightboxPadding(item);
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
  const imageUrl = storagePath ? getResolvedImageUrl(storagePath) : "";

  return imageUrl || createPlaceholder(item.title, categoryLabel, index);
}

function getImagePadding(item) {
  return imagePaddingOptions.has(item.padding) ? item.padding : "none";
}

function getLightboxPadding(item) {
  return imagePaddingOptions.has(item.lightboxPadding) ? item.lightboxPadding : "none";
}

function getImageZoom(item) {
  const zoom = Number(item.zoom);

  if (!Number.isFinite(zoom)) {
    return 0;
  }

  return Math.min(Math.max(zoom, 0), 1);
}

function getImageOrientation(width, height) {
  const normalizedWidth = Number(width);
  const normalizedHeight = Number(height);

  if (
    !Number.isFinite(normalizedWidth) ||
    !Number.isFinite(normalizedHeight) ||
    normalizedWidth <= 0 ||
    normalizedHeight <= 0
  ) {
    return null;
  }

  return normalizedWidth > normalizedHeight ? "landscape" : "portrait";
}

function syncCardLayout(card, width, height) {
  if (!card) {
    return;
  }

  const orientation = getImageOrientation(width, height);

  if (!orientation) {
    return;
  }

  card.dataset.orientation = orientation;
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
  galleryTrack.dataset.layout = "grid";
  galleryTrack.style.setProperty("--gallery-card-frame-aspect-ratio", galleryCardFrameAspectRatio);

  if (category.note) {
    const note = document.createElement("p");
    note.className = "gallery-category-note";
    note.textContent = category.note;
    galleryTrack.appendChild(note);
  }

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

function getLocalImageUrl(path) {
  if (!path) {
    return "";
  }

  const encodedPath = path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${localPortfolioImagePrefix}${encodedPath}`;
}

function getLocalImageIfAvailable(path) {
  if (localImageDirectoryState === localImageDirectoryStateDisabled) {
    return "";
  }

  return localImageAvailabilityMap.get(path) ? getLocalImageUrl(path) : "";
}

function getResolvedImageUrl(path) {
  if (isLocalPreviewModeEnabled()) {
    return getLocalImageIfAvailable(path);
  }

  return getLocalImageIfAvailable(path) || getFreshSignedImageUrl(path);
}

function isUnavailablePortfolioImagePath(path) {
  return unavailablePortfolioImagePaths.has(path);
}

function isLocalPreviewModeEnabled() {
  return localImageDirectoryState === localImageDirectoryStateEnabled;
}

function hasSettledImageUrl(path) {
  return hasResolvedImageUrl(path) || isUnavailablePortfolioImagePath(path);
}

function hasResolvedImageUrl(path) {
  return Boolean(getResolvedImageUrl(path));
}

async function ensureLocalImageForPath(path) {
  if (!path) {
    return false;
  }

  const canUseLocalImages = await ensureLocalImageDirectoryStatus();

  if (!canUseLocalImages) {
    return false;
  }

  if (localImageAvailabilityMap.has(path)) {
    return localImageAvailabilityMap.get(path);
  }

  if (localImageAvailabilityPromiseMap.has(path)) {
    return localImageAvailabilityPromiseMap.get(path);
  }

  const localImageUrl = getLocalImageUrl(path);
  const availabilityPromise = new Promise((resolve) => {
    const image = new Image();
    let isSettled = false;

    const settle = (isAvailable) => {
      if (isSettled) {
        return;
      }

      isSettled = true;
      localImageAvailabilityMap.set(path, isAvailable);
      localImageAvailabilityPromiseMap.delete(path);

      if (isAvailable) {
        unavailablePortfolioImagePaths.delete(path);
      } else if (isLocalPreviewModeEnabled()) {
        unavailablePortfolioImagePaths.add(path);
      }

      resolve(isAvailable);
    };

    image.onload = () => settle(true);
    image.onerror = () => settle(false);
    image.src = localImageUrl;

    if (image.complete) {
      settle(image.naturalWidth > 0);
    }
  });

  localImageAvailabilityPromiseMap.set(path, availabilityPromise);
  return availabilityPromise;
}

async function ensureLocalImagesForPaths(paths) {
  const sanitizedPaths = sanitizeImagePaths(paths);

  if (!sanitizedPaths.length) {
    return;
  }

  const canUseLocalImages = await ensureLocalImageDirectoryStatus();

  if (!canUseLocalImages) {
    return;
  }

  await Promise.all(sanitizedPaths.map((path) => ensureLocalImageForPath(path)));
}

async function ensureLocalImageDirectoryStatus() {
  if (localImageDirectoryState !== localImageDirectoryStateUnknown) {
    return localImageDirectoryState === localImageDirectoryStateEnabled;
  }

  if (localImageDirectoryStatusPromise) {
    return localImageDirectoryStatusPromise;
  }

  localImageDirectoryStatusPromise = fetch(localImageStatusUrl, {
    cache: "no-store",
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Local image status is unavailable.");
      }

      const payload = await response.json().catch(() => ({}));
      const hasLocalImages = payload?.hasLocalImages === true;

      localImageDirectoryState = hasLocalImages
        ? localImageDirectoryStateEnabled
        : localImageDirectoryStateDisabled;

      if (!hasLocalImages) {
        localImageAvailabilityMap = new Map();
        localImageAvailabilityPromiseMap = new Map();
      }

      return hasLocalImages;
    })
    .catch(() => {
      localImageDirectoryState = localImageDirectoryStateDisabled;
      localImageAvailabilityMap = new Map();
      localImageAvailabilityPromiseMap = new Map();
      return false;
    })
    .finally(() => {
      localImageDirectoryStatusPromise = null;
    });

  return localImageDirectoryStatusPromise;
}

function restoreCachedAccessState() {
  restoreSessionAuth();
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

  return sanitizePasswordInput(linkedPassword);
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

function restoreSessionAuth() {
  try {
    const storedPassword = window.sessionStorage.getItem(reviewPasswordSessionKey) || "";
    reviewPassword = sanitizePasswordInput(storedPassword);
    reviewReviewerId = normalizeReviewerId(
      window.sessionStorage.getItem(reviewReviewerIdSessionKey) || ""
    );

    if (!reviewPassword) {
      window.sessionStorage.removeItem(reviewPasswordSessionKey);
      window.sessionStorage.removeItem(reviewReviewerIdSessionKey);
      reviewReviewerId = "";
    } else if (reviewPassword !== storedPassword) {
      window.sessionStorage.setItem(reviewPasswordSessionKey, reviewPassword);
    }
  } catch {
    reviewPassword = "";
    reviewReviewerId = "";
  }
}

function persistSessionAuth(password, reviewerId = reviewReviewerId) {
  const sanitizedPassword = sanitizePasswordInput(password);
  const sanitizedReviewerId = normalizeReviewerId(reviewerId);

  if (!sanitizedPassword) {
    clearSessionAuth();
    return;
  }

  try {
    window.sessionStorage.setItem(reviewPasswordSessionKey, sanitizedPassword);

    if (sanitizedReviewerId) {
      window.sessionStorage.setItem(reviewReviewerIdSessionKey, sanitizedReviewerId);
    } else {
      window.sessionStorage.removeItem(reviewReviewerIdSessionKey);
    }
  } catch {
    // Ignore storage failures and continue with in-memory state.
  }
}

function clearSessionAuth() {
  reviewPassword = "";
  reviewReviewerId = "";

  try {
    window.sessionStorage.removeItem(reviewPasswordSessionKey);
    window.sessionStorage.removeItem(reviewReviewerIdSessionKey);
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

  return paths.every((path) => hasSettledImageUrl(path));
}

function hasFreshPortfolioImages() {
  return getAllPortfolioPaths().every((path) => hasSettledImageUrl(path));
}

function hasLocalPortfolioImages() {
  if (!isLocalPreviewModeEnabled()) {
    return false;
  }

  return getAllPortfolioPaths().every((path) => Boolean(getLocalImageIfAvailable(path)));
}

function hasPreloadedPortfolioImages() {
  return getAllPortfolioPaths().every((path) => {
    if (isUnavailablePortfolioImagePath(path)) {
      return true;
    }

    const imageUrl = getResolvedImageUrl(path);
    return Boolean(imageUrl) && preloadedImageUrls.has(imageUrl);
  });
}

async function ensureImageForItem(item, categoryId) {
  const storagePath = getStoragePath(item, categoryId);

  await ensureLocalImagesForPaths([storagePath]);

  if (!storagePath || hasSettledImageUrl(storagePath)) {
    return true;
  }

  if (isLocalPreviewModeEnabled()) {
    unavailablePortfolioImagePaths.add(storagePath);
    return true;
  }

  if (!reviewPassword) {
    return false;
  }

  return ensurePortfolioReady();
}

async function ensurePortfolioReady({ password = reviewPassword } = {}) {
  const accessPassword = sanitizePasswordInput(password) || getAccessPassword();
  await ensureLocalImagesForPaths(getAllPortfolioPaths());
  const isLocalPreviewMode = isLocalPreviewModeEnabled();
  const hasLocalAccess = isLocalPreviewMode || hasLocalPortfolioImages();

  if (isLocalPreviewMode) {
    clearSessionAuth();
    clearSignedImageUrlCache();
  }

  if (hasFreshPortfolioImages() && hasPreloadedPortfolioImages()) {
    return true;
  }

  if (!accessPassword && !hasLocalAccess) {
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
  const sanitizedPassword = sanitizePasswordInput(password);
  await ensureLocalImagesForPaths(getAllPortfolioPaths());

  if (isLocalPreviewModeEnabled()) {
    return true;
  }

  if (hasFreshPortfolioImages() || hasLocalPortfolioImages()) {
    return true;
  }

  if (!sanitizedPassword) {
    return false;
  }

  if (portfolioFetchPromise) {
    return portfolioFetchPromise;
  }

  const missingPaths = getAllPortfolioPaths().filter((path) => !hasResolvedImageUrl(path));

  portfolioFetchPromise = fetchSignedImageUrlsForPaths(sanitizedPassword, missingPaths).finally(() => {
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
      imageUrl: getResolvedImageUrl(path),
    }))
    .filter(({ imageUrl }) => imageUrl && !preloadedImageUrls.has(imageUrl));

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
          const metadata = await preloadSignedImage(nextImage.imageUrl);
          rememberImageMetadata(nextImage.path, metadata.width, metadata.height);
          preloadedImageUrls.add(nextImage.imageUrl);
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

function normalizeReviewerId(value) {
  return typeof value === "string" ? value.trim() : "";
}

function getReviewerIdFromPayload(payload) {
  return (
    normalizeReviewerId(payload?.reviewerId) ||
    normalizeReviewerId(payload?.reviewer?.id) ||
    "shared"
  );
}

async function fetchSignedImageUrlsForPaths(
  password,
  paths,
  { announceSuccess = false, showUnlockPending = false } = {}
) {
  const sanitizedPassword = sanitizePasswordInput(password);
  const sanitizedPaths = sanitizeImagePaths(paths);

  if (!sanitizedPaths.length) {
    return true;
  }

  if (!sanitizedPassword) {
    setUnlockStatus("Enter the password.", "error");
    return false;
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
        body: JSON.stringify({ password: sanitizedPassword, paths: sanitizedPaths }),
      }
    );

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 401) {
        clearSessionAuth();
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
    sanitizedPaths.forEach((path) => unavailablePortfolioImagePaths.delete(path));

    (payload.images || []).forEach((entry) => {
      const signedUrl = entry.signedUrl || entry.signedURL || entry.signed_url || entry.url;

      if (entry.path && signedUrl) {
        signedImageUrlMap.set(entry.path, { signedUrl, fetchedAt });
        unavailablePortfolioImagePaths.delete(entry.path);
        receivedCount += 1;
      }
    });

    const unresolvedPaths = Array.isArray(payload.missingPaths)
      ? sanitizeImagePaths(payload.missingPaths)
      : sanitizedPaths.filter((path) => !getFreshSignedImageUrl(path));
    const unrequestedSupabasePaths = Array.isArray(payload.unrequestedSupabasePaths)
      ? sanitizeImagePaths(payload.unrequestedSupabasePaths)
      : [];

    if (!receivedCount) {
      console.warn("No signed image URLs were returned by Supabase.", {
        requestedPaths: sanitizedPaths,
        missingPaths: unresolvedPaths,
        payload,
      });
    }

    if (unresolvedPaths.length) {
      unresolvedPaths.forEach((path) => unavailablePortfolioImagePaths.add(path));
      console.warn("Missing requested pictures from Supabase.", unresolvedPaths);
    }

    if (unrequestedSupabasePaths.length) {
      console.info(
        "Pictures present in Supabase but missing from frontend request.",
        unrequestedSupabasePaths
      );
    }

    reviewReviewerId = getReviewerIdFromPayload(payload);
    reviewPassword = sanitizedPassword;
    persistSessionAuth(sanitizedPassword, reviewReviewerId);
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

function sanitizePasswordInput(value) {
  if (typeof value !== "string") {
    return "";
  }

  const sanitizedValue = value.trim();

  if (
    !sanitizedValue ||
    sanitizedValue.length > passwordMaxLength ||
    /[\u0000-\u001F\u007F]/.test(sanitizedValue)
  ) {
    return "";
  }

  return sanitizedValue;
}

function sanitizeImagePaths(paths) {
  if (!Array.isArray(paths)) {
    return [];
  }

  return [
    ...new Set(
      paths
        .map((path) => sanitizeImagePath(path))
        .filter(Boolean)
    ),
  ];
}

function sanitizeImagePath(path) {
  if (typeof path !== "string") {
    return "";
  }

  const sanitizedPath = path.trim();

  if (!sanitizedPath || sanitizedPath.length > pathMaxLength) {
    return "";
  }

  if (/[\u0000-\u001F\u007F\\]/.test(sanitizedPath)) {
    return "";
  }

  if (
    sanitizedPath.startsWith("/") ||
    sanitizedPath.endsWith("/") ||
    sanitizedPath.includes("//")
  ) {
    return "";
  }

  const segments = sanitizedPath.split("/");

  if (segments.some((segment) => !segment || segment === "." || segment === "..")) {
    return "";
  }

  return sanitizedPath;
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
     to add a frame inset while keeping the gallery card height fixed; the legend stays aligned
     vertically and shifts only on the x-axis to match the inset.
  7. `lightboxPadding` is optional and defaults to `"none"`. Use it only if the expanded image
     view also needs an inset.
  8. `zoom` is optional and defaults to `0`. Use a value from `0` to `1`.
     Example: `zoom: 0.5` renders the image at 1.5x, centered and cropped by the frame.
  9. Fine-tune gallery crop and centering in `gallery-overrides.css`.
  10. Each image gets a selector based on category + title, for example:
     .work-card[data-card="ceramics-glass-penelope"]
*/
