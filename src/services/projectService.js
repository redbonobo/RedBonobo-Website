const projects = [
  {
    _id: "001",
    name: "Cosmos",
    type: "Product · Concept · Cutlery",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Asset 1.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "002",
    name: "Domènec Hernandez",
    type: "Branding · Logo",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Domenec-Hernandez.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "003",
    name: "Harlequin",
    type: "Product · Packaging · Branding",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Front.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "004",
    name: "Frendy",
    type: "Brand · Logo · UI/UX",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Horizontal_Book_Mockup_1.psd.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "005",
    name: "Piano",
    type: "Interior · Rendering",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Living Room_Piano.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "006",
    name: "Tesla Nix",
    type: "Graphic",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Moaaackup.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "007",
    name: "Olvo",
    type: "Branding · UI/UX",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/mocksup.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "008",
    name: "Frendy",
    type: "Website · UI/UX",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/MOCKUP.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "009",
    name: "Tree Art 59",
    type: "Branding · Logo · Website",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/mockup-2.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "010",
    name: "Glidepay",
    type: "Branding · Packaging",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Render.Denoiser.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "011",
    name: "UNION",
    type: "Branding · Logo · Rendering",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Wallpaper.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "012",
    name: "Watteco",
    type: "Branding · Logo · Website · UI/UX",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: require("../img/projects/Watteco-Logo.jpg"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  }
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find(p => p._id === id);
}

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.type = typesAPI.types.find(g => g._id === movie.typeId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
