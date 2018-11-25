const projects = [
  {
    _id: "001",
    name: "Terminator",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/2001",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "002",
    name: "Mouse",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "003",
    name: "Olvo",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3001",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "004",
    name: "Tree Art 59",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3002",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "005",
    name: "Harlequin",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3003",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "006",
    name: "Skyline",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3004",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "007",
    name: "Key",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3005",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "008",
    name: "Emotion",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3006",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "009",
    name: "Head",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3007",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "010",
    name: "Control",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3008",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel consequat justo, ut sagittis ante. Sed eu faucibus ipsum. Etiam posuere faucibus nunc sit amet tempus. Cras ac ultricies lectus. Mauris facilisis elit ante. Praesent vitae quam eros. Sed placerat tortor in tellus aliquet, a efficitur nisi semper. Sed et dapibus orci, quis porttitor nisi. Nunc finibus condimentum feugiat. Etiam ex mi, imperdiet sit amet accumsan ut, pharetra et turpis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, euismod pellentesque odio et, finibus hendrerit risus. Maecenas facilisis maximus velit, vel pellentesque felis mattis ut."
  },
  {
    _id: "011",
    name: "Speaker",
    type: "Action",
    date: "2018-01-03T19:04:28.809Z",
    coverUrl: "https://picsum.photos/3009",
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
