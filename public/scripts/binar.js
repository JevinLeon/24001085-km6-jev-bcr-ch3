function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      );

      return {
        ...car,
        availableAt,
      };
    });
  };

  static async listCars(filterer) {
    let cars;

    const response = await fetch("http://localhost:3000/cars");
    const { data } = await response.json();
    cars = this.populateCars(data);

    if (filterer instanceof Function) return cars.filter(filterer);

    return cars;
  }
}
