class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `

    <img
      src="../images/${this.image}"
      class="img-fluid car-item-img object-fit-cover mb-3"
      alt="car"
    />
    <div class="d-flex flex-column gap-1">
      <h6 class="fw-medium">${this.manufacture}</h6>
      <h6 class="fw-bold fs-5">Rp ${this.rentPerDay} / hari</h6>
      <p class="car-item-desc">
        ${this.description}
      </p>
      <div class="row">
        <div class="col-1">
          <img src="./images/people-logo.png" alt="people-logo" />
        </div>
        <div class="col">${this.capacity} orang</div>
      </div>
      <div class="row">
        <div class="col-1">
          <img src="./images/settings-logo.png" alt="settings-logo" />
        </div>
        <div class="col">${this.transmission}</div>
      </div>
      <div class="row">
        <div class="col-1">
          <img src="./images/calendar-logo.png" alt="calendar-logo" />
        </div>
        <div class="col">Tahun ${this.year}</div>
      </div>
      <div class="mt-3">
        <button class="custom-btn w-100">Pilih Mobil</button>
      </div>
    </div>
    `;
  }
}
