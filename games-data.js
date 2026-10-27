/* PixelFair shared game data (local JavaScript — no API, no database).
   All listings are example entries marked "Coming Soon". */
var PIXELFAIR_GENRES = ["Action","Adventure","Puzzle","RPG","Platformer","Strategy","Horror","Racing","Simulation","Casual","Arcade","Multiplayer","Card Game"];

var PIXELFAIR_GAMES = [
  { slug:"neon-drift-legacy", title:"Neon Drift Legacy", genres:["Racing","Arcade"], dev:"Volt Circuit Studios", year:2026, featured:true, recent:true,
    desc:"A high-octane neon-street racer blending classic arcade drift mechanics with a synthwave soundtrack.",
    art:"linear-gradient(135deg,#f472b6,#7c3aed)", emoji:"🏎️",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"starbound-tactics", title:"Starbound Tactics", genres:["Strategy","RPG"], dev:"Orbital Fox Games", year:2026, featured:true, recent:true,
    desc:"Turn-based squad tactics set across procedurally generated star systems. Command, upgrade, survive.",
    art:"linear-gradient(135deg,#22d3ee,#2563eb)", emoji:"🛰️",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"pixel-harvest-moon", title:"Pixel Harvest Valley", genres:["Simulation","Casual"], dev:"Cozy Sprout Interactive", year:2026, featured:true, recent:false,
    desc:"A cozy farming-life simulation about restoring an overgrown valley and befriending its quirky residents.",
    art:"linear-gradient(135deg,#84cc16,#0ea5e9)", emoji:"🌾",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"shadow-requiem", title:"Shadow Requiem", genres:["Horror","Adventure"], dev:"Pale Lantern Studio", year:2026, featured:true, recent:true,
    desc:"Atmospheric first-person horror exploring a soundless cathedral town where memory is the only light.",
    art:"linear-gradient(135deg,#4c1d95,#111827)", emoji:"🕯️",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"cogwork-alchemy", title:"Cogwork Alchemy", genres:["Puzzle","Simulation"], dev:"Brass Owl Works", year:2025, featured:true, recent:false,
    desc:"Chain-reaction puzzle crafting: build steampunk contraptions that transmute raw materials into wonder.",
    art:"linear-gradient(135deg,#f59e0b,#b45309)", emoji:"⚙️",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"aether-bound", title:"Aether Bound", genres:["Action","Adventure"], dev:"Skyloom Collective", year:2026, featured:true, recent:false,
    desc:"A sky-pirate action-adventure with glider traversal, floating islands and hand-inked cutscenes.",
    art:"linear-gradient(135deg,#38bdf8,#a855f7)", emoji:"🪁",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"crypt-of-zzulk", title:"Crypt of Zzulk", genres:["RPG","Action"], dev:"Tomb Lantern Games", year:2025, featured:false, recent:true,
    desc:"A grid-based dungeon RPG where every spell you cast permanently reshapes the crypt around you.",
    art:"linear-gradient(135deg,#ef4444,#7f1d1d)", emoji:"💀",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"moss-jumper", title:"Moss Jumper", genres:["Platformer","Casual"], dev:"Tiny Fern Team", year:2026, featured:false, recent:true,
    desc:"A gentle momentum platformer played as a spore bouncing through a giant miniature forest floor.",
    art:"linear-gradient(135deg,#4ade80,#166534)", emoji:"🍄",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"hyperloop-duel", title:"Hyperloop Duel", genres:["Multiplayer","Arcade"], dev:"Split Atom Arcade", year:2025, featured:false, recent:false,
    desc:"Two-player local arena duel at 600km/h — mind games, shield timing and vacuum tricks.",
    art:"linear-gradient(135deg,#facc15,#db2777)", emoji:"⚡",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"tide-cartographer", title:"Tide Cartographer", genres:["Adventure","Puzzle"], dev:"Salt & Compass", year:2026, featured:false, recent:true,
    desc:"Chart shifting archipelagos by manipulating tidal gates in this calm, map-making puzzler-adventure.",
    art:"linear-gradient(135deg,#06b6d4,#312e81)", emoji:"🗺️",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"ember-siege", title:"Ember Siege", genres:["Strategy","Action"], dev:"Iron Kiln Interactive", year:2025, featured:false, recent:false,
    desc:"Real-time fortress defence where your forge economy forges both walls and warbands mid-siege.",
    art:"linear-gradient(135deg,#fb923c,#991b1b)", emoji:"🔥",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"lunar-cafe-shift", title:"Lunar Café Shift", genres:["Simulation","Casual"], dev:"Quiet Orbit Games", year:2026, featured:false, recent:true,
    desc:"Run a late-night café at a moon transit hub, serving weary travellers low-gravity coffee.",
    art:"linear-gradient(135deg,#c4b5fd,#1e3a8a)", emoji:"🌙",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"glitch-berserk", title:"Glitch Berserk", genres:["Action","Arcade"], dev:"CRT Rebellion", year:2025, featured:false, recent:false,
    desc:"Arena hack-and-slash inside a corrupted retro cartridge — combos break the game and help you.",
    art:"linear-gradient(135deg,#22d3ee,#e11d48)", emoji:"👾",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" },
  { slug:"hollow-crown-deck", title:"Hollow Crown Deck", genres:["Card Game","Strategy"], dev:"Regalia Tabletop Digital", year:2026, featured:false, recent:false,
    desc:"A roguelike deckbuilder of court intrigue — play alliances, blackmail and oaths as cards.",
    art:"linear-gradient(135deg,#eab308,#581c87)", emoji:"🃏",
    platforms:"Coming Soon", release:"Coming Soon", website:"Coming Soon", devsite:"Coming Soon" }
];

var PIXELFAIR_DEVELOPERS = [
  { name:"Volt Circuit Studios", note:"Arcade racing & synthwave experiences.", emoji:"🏁" },
  { name:"Cozy Sprout Interactive", note:"Warm life-sims and relaxing worlds.", emoji:"🌱" },
  { name:"Orbital Fox Games", note:"Deep tactical strategy in space.", emoji:"🦊" },
  { name:"Pale Lantern Studio", note:"Atmospheric, quiet horror.", emoji:"🏮" }
];

var PIXELFAIR_ARTICLES = [
  { slug:"dev-log-template", category:"Developer Logs", title:"Your First Dev Log: A Starter Structure", teaser:"A simple repeatable format for posting development updates on PixelFair." },
  { slug:"pixel-art-basics", category:"Tutorials", title:"Pixel Art Basics for Game UI", teaser:"Core principles for readable pixel-perfect interfaces — Coming Soon full guide." },
  { slug:"community-spotlight-forms", category:"Community Spotlights", title:"Spotlight: How Indie Teams Find Players", teaser:"How early communities form around small studios." },
  { slug:"indie-news-roundup", category:"Indie Game News", title:"Indie Scene Roundup Template", teaser:"Our recurring roundup format — publication Coming Soon." },
  { slug:"marketing-resources", category:"Development Resources", title:"Free Marketing Resources for Solo Devs", teaser:"A curated list of tools and checklists." },
  { slug:"pixelfair-update-roadmap", category:"PixelFair Updates", title:"PixelFair Platform Roadmap", teaser:"Search, listings, submissions and review automation — status overview." }
];
