const uuid = require("uuid");
const cars = require("../../data/cars.json");

exports.getCars = () => {
  return cars;
};

exports.getCar = (id) => {
  return cars.filter((car) => car.id === id);
};

exports.addCar = (payload) => {
  const id = uuid.v4();

  cars.push({ id, ...payload });
  return cars;
};

exports.updateCar = (id, payload) => {
  const updatedCar = { id, ...payload };

  cars.map((car, index) => {
    if (car.id === id) {
      cars[index] = updatedCar;
    }
  });

  return cars;
};

exports.deleteCar = (id) => {
  const deletedCarIndex = cars.findIndex((car) => car?.id == id);
  cars.splice(deletedCarIndex, 1);
  return cars;
};
