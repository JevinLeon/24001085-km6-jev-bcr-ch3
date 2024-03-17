const carRepo = require("../../repositories/car");

exports.getCars = () => {
  const data = carRepo.getCars();
  return data;
};

exports.getCar = (id) => {
  const data = carRepo.getCar(id);
  return data;
};

exports.addCar = (payload) => {
  const data = carRepo.addCar(payload);
  return data;
};

exports.updateCar = (id, payload) => {
  const data = carRepo.updateCar(id, payload);
  return data;
};

exports.deleteCar = (id) => {
  const data = carRepo.deleteCar(id);
  return data;
};
