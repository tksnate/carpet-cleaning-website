import { SERVICES } from "../../app/shared/SERVICES";

export const selectAllCampsites = () => {
  return SERVICES;
};

// export const selectRandomCampsite = () => {
//   // const randomCampsite = Math.floor(Math.random() * CAMPSITES.length);
//   return CAMPSITES[randomCampsite];

//return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
  return SERVICES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return SERVICES.find((campsite) => campsite.featured);
};
