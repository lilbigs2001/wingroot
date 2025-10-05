import {
  AGASTACHE_SCROPHULARIIFOLIA,
  ALLEGHENY_SERVICEBERRY,
  AMELANCHIER_LAEVIS,
  ASCLEPIAS_INCARNATA,
  PURPLE_GIANT_HYSSOP,
  SWAMP_MILKWEED,
} from "./constants";

type Plant = {
  scientificName: string;
  commonName: string;
};

export const plantList: Plant[] = [
  {
    scientificName: AGASTACHE_SCROPHULARIIFOLIA,
    commonName: PURPLE_GIANT_HYSSOP,
  },
  {
    scientificName: AMELANCHIER_LAEVIS,
    commonName: ALLEGHENY_SERVICEBERRY,
  },
  { scientificName: ASCLEPIAS_INCARNATA, commonName: SWAMP_MILKWEED },
  { scientificName: "Asclepias syriaca", commonName: "Common milkweed" },
  { scientificName: "Asclepias tuberosa", commonName: "Butterfly milkweed" },
  { scientificName: "Carex bebbii", commonName: "Bebb's sedge" },
  { scientificName: "Carex cristatella", commonName: "Crested sedge" },
  { scientificName: "Carex scoparia", commonName: "Broom sedge" },
  { scientificName: "Carex vulpinoidea", commonName: "Fox sedge" },
  { scientificName: "Ceanothus americanus", commonName: "New Jersey tea" },
  { scientificName: "Cirsium discolor", commonName: "Field thistle" },
  { scientificName: "Coreopsis lanceolata", commonName: "Lanceleaf tickseed" },
  { scientificName: "Crataegus spp.", commonName: "Hawthorn" },
  { scientificName: "Dalea purpurea", commonName: "Purple prairie clover" },
  { scientificName: "Desmodium canadense", commonName: "Showy tick-trefoil" },
  { scientificName: "Elymus canadensis", commonName: "Canada wild rye" },
  { scientificName: "Eupatorium perfoliatum", commonName: "Common boneset" },
  {
    scientificName: "Euthamia graminifolia",
    commonName: "Grass-leaved goldenrod",
  },
  {
    scientificName: "Eutrochium maculatum",
    commonName: "Spotted Joe Pye weed",
  },
  { scientificName: "Gentiana andrewsii", commonName: "Closed bottle gentian" },
  { scientificName: "Geranium maculatum", commonName: "Spotted geranium" },
  { scientificName: "Helenium autumnale", commonName: "Common sneezeweed" },
  { scientificName: "Helianthus spp.", commonName: "Sunflower" },
  { scientificName: "Heliopsis helianthoides", commonName: "Smooth oxeye" },
  { scientificName: "Koeleria macrantha", commonName: "Prairie Junegrass" },
  { scientificName: "Liatris spp.", commonName: "Blazing star" },
  { scientificName: "Lobelia siphilitica", commonName: "Great blue lobelia" },
  { scientificName: "Lupinus perennis", commonName: "Wild lupine" },
  { scientificName: "Monarda fistulosa", commonName: "Wild bergamot" },
  { scientificName: "Panicum virgatum", commonName: "Switchgrass" },
  { scientificName: "Penstemon gracilis", commonName: "Slender beardtongue" },
  { scientificName: "Penstemon hirsutus", commonName: "Hairy beardtongue" },
  { scientificName: "Physocarpus opulifolius", commonName: "Common ninebark" },
  { scientificName: "Prunus virginiana", commonName: "Black chokecherry" },
  {
    scientificName: "Pycnanthemum virginianum",
    commonName: "Virginia mountain mint",
  },
  {
    scientificName: "Ratibida pinnata",
    commonName: "Pinnate prairie coneflower",
  },
  { scientificName: "Rosa blanda", commonName: "Smooth wild rose" },
  { scientificName: "Salix humilis", commonName: "Prairie willow" },
  { scientificName: "Schizachyrium scoparium", commonName: "Little bluestem" },
  { scientificName: "Solidago speciosa", commonName: "Showy goldenrod" },
  { scientificName: "Sorghastrum nutans", commonName: "Indiangrass" },
  { scientificName: "Spiraea alba", commonName: "White meadowsweet" },
  { scientificName: "Symphyotrichum lateriflorum", commonName: "Calico aster" },
  {
    scientificName: "Symphyotrichum novae-angliae",
    commonName: "New England aster",
  },
  { scientificName: "Tilia americana", commonName: "American basswood" },
  { scientificName: "Tradescantia ohiensis", commonName: "Ohio spiderwort" },
  { scientificName: "Verbena stricta", commonName: "Hoary verbena" },
  { scientificName: "Veronicastrum virginicum", commonName: "Culver's root" },
  { scientificName: "Viburnum spp.", commonName: "Viburnum" },
  { scientificName: "Zizia aurea", commonName: "Golden Alexanders" },
];
