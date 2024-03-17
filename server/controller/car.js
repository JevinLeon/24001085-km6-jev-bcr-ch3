const carServices = require("../services/car");

exports.getCars = (req, res) => {
  const data = carServices.getCars();
  res.status(200).json({
    data,
    message: "Cars fetched successfully",
  });
};

exports.getCar = (req, res) => {
  const id = req?.params?.id;

  const data = carServices.getCar(id);

  if (data.length === 0) {
    return res.status(404).json({
      message: `Student with id ${id} is not found`,
      data: null,
    });
  }

  res.status(200).json({
    data: data[0],
    message: `Student with id ${id} fetched successfully`,
  });
};

exports.addCar = (req, res) => {
  const car = req.body;

  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = car;

  if (!plate || plate == "")
    return res.status(400).json({ message: "Plate is required", data: null });
  if (!manufacture || manufacture == "")
    return res
      .status(400)
      .json({ message: "Manufacture is required", data: null });
  if (!model || model == "")
    return res.status(400).json({ message: "Model is required", data: null });
  if (!image || image == "")
    return res.status(400).json({ message: "Image is required", data: null });
  if (!rentPerDay || rentPerDay <= 0)
    return res.status(400).json({
      message: "Rent per day is required and must be a valid positive number",
      data: null,
    });
  if (!capacity || capacity <= 0)
    return res.status(400).json({
      message: "Capacity is required and must be a valid positive number",
      data: null,
    });
  if (!description || description == "")
    return res
      .status(400)
      .json({ message: "Description is required", data: null });
  if (!availableAt || availableAt == "")
    return res
      .status(400)
      .json({ message: "Available date is required", data: null });
  if (!transmission || transmission == "")
    return res
      .status(400)
      .json({ message: "Transmission is required", data: null });
  if (typeof available != "boolean")
    return res
      .status(400)
      .json({ message: "Availability is required", data: null });
  if (!type || type == "")
    return res.status(400).json({ message: "Type is required", data: null });
  if (!year || year <= 1000)
    return res.status(400).json({
      message: "Year is required and must be a valid year",
      data: null,
    });
  if (!options || options.length == 0)
    return res
      .status(400)
      .json({ message: "Options are required", data: null });
  if (!specs || specs.length == 0)
    return res.status(400).json({ message: "Specs are required", data: null });

  const data = carServices.addCar(req.body);

  res.status(200).json({ data, message: "Car added successfully" });
};

exports.updateCar = (req, res) => {
  const id = req?.params?.id;
  const car = req?.body;

  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = car;

  if (!plate || plate == "")
    return res.status(400).json({ message: "Plate is required", data: null });
  if (!manufacture || manufacture == "")
    return res
      .status(400)
      .json({ message: "Manufacture is required", data: null });
  if (!model || model == "")
    return res.status(400).json({ message: "Model is required", data: null });
  if (!image || image == "")
    return res.status(400).json({ message: "Image is required", data: null });
  if (!rentPerDay || rentPerDay <= 0)
    return res.status(400).json({
      message: "Rent per day is required and must be a valid positive number",
      data: null,
    });
  if (!capacity || capacity <= 0)
    return res.status(400).json({
      message: "Capacity is required and must be a valid positive number",
      data: null,
    });
  if (!description || description == "")
    return res
      .status(400)
      .json({ message: "Description is required", data: null });
  if (!availableAt || availableAt == "")
    return res
      .status(400)
      .json({ message: "Available date is required", data: null });
  if (!transmission || transmission == "")
    return res
      .status(400)
      .json({ message: "Transmission is required", data: null });
  if (typeof available != "boolean")
    return res
      .status(400)
      .json({ message: "Availability is required", data: null });
  if (!type || type == "")
    return res.status(400).json({ message: "Type is required", data: null });
  if (!year || year <= 1000)
    return res.status(400).json({
      message: "Year is required and must be a valid year",
      data: null,
    });
  if (!options || options.length == 0)
    return res
      .status(400)
      .json({ message: "Options are required", data: null });
  if (!specs || specs.length == 0)
    return res.status(400).json({ message: "Specs are required", data: null });

  const data = carServices.updateCar(id, req.body);

  res.status(200).json({ data, message: "Cars updated successfully" });
};

exports.deleteCar = (req, res) => {
  const id = req?.params?.id;
  const data = carServices.deleteCar(id);

  res.status(200).json({ data, message: "Car deleted successfully" });
};
