import { SERVICES } from "../../app/shared/SERVICES";

export const selectAllServices = () => {
  return SERVICES;
};

export const selectServiceById = (id) => {
  return SERVICES.find((service) => service.id === parseInt(id));
};

export const selectFeaturedService = () => {
  return SERVICES.find((service) => service.featured);
};
