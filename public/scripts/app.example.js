class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.searchBtn = document.querySelector(".search-btn");
    this.carContainer = document.querySelector(".car-container");
  }

  async init() {
    await this.load();
    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;

    this.searchBtn.onclick = () => {
      let selectedDate = document.getElementById("tanggal").value;
      let selectedTime = document.getElementById("waktu").value;
      let passengerCount = document.getElementById("jumlah").value;

      this.filterCar(selectedDate, selectedTime, passengerCount);
    };
  }

  run = () => {
    Car.list.forEach((car) => {
      if (car.available) {
        const node = document.createElement("div");
        node.classList.add("car-card");
        node.innerHTML = car.render();
        this.carContainer.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    console.log(cars);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainer.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainer.firstElementChild;
    }
  };

  async filterCar(date, time, passengerCount) {
    if (!date && !time && !passengerCount) {
      this.clear();
      this.load();
      this.run();
    } else {
      let filteredCar;
      if (isNaN(passengerCount)) {
        filteredCar = await Binar.listCars(
          (car) =>
            this.formatDate(car.availableAt) >= date &&
            car.availableAt.getHours() >= time
        );
      } else {
        filteredCar = await Binar.listCars(
          (car) =>
            this.formatDate(car.availableAt) >= date &&
            car.availableAt.getHours() >= time &&
            car.capacity >= passengerCount
        );
      }
      console.log(filteredCar);

      Car.init(filteredCar);
      this.clear();
      this.run();
    }
  }

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
}
