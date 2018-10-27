const PRICE_BY_FEATURE = {
  window: 10,
  aisle: 4,
  extraLeg: 10,
  simple: 2,
};

function calculateSeatPrice(features) {
  let calcPrice = PRICE_BY_FEATURE['simple'];
  if (features.window) {
    calcPrice += PRICE_BY_FEATURE['window'];
  } else if (features.aisle) {
    calcPrice += PRICE_BY_FEATURE['aisle'];
  }

  if (features.extraLeg) {
    calcPrice += PRICE_BY_FEATURE['extraLeg'];
  }
  return calcPrice;
}

const PASSENGER = {
  id: 0,
  firstName: 'Joanna',
  lastName: 'Doe',
  validationId: 'AEK11129999RJ',
  paid: false,
  seatId: null,
};

const FLIGHT = {
  id: 'TRF476',
  from: 'Stockholm ARN',
  to: 'Berlin TXL',
  price: 280,
};

function generateSeatsForFlight(numberOfSeats = 200, seatsInRow = 6) {
  let seats = [];
  let columns = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
  };

  for (let i = 0; i < numberOfSeats; i++) {
    let row = Math.floor(i / seatsInRow) + 1;
    let col = i % seatsInRow;
    let colCode = columns[col];
    let window = col === 0 || col === seatsInRow - 1;
    let aisle = seatsInRow / 2 === col + 1 || seatsInRow / 2 === col;
    let extraLeg = row % 10 === 0;
    let occupied = Math.random() < 0.1;
    let features = {
      window,
      aisle,
      extraLeg,
    };
    let seat = {
      id: row + colCode,
      colCode,
      row,
      window,
      aisle,
      extraLeg,
      occupied,
      features,
      price: calculateSeatPrice(features),
    };
    seats.push(seat);
  }
  return seats;
}

export { generateSeatsForFlight, FLIGHT, PASSENGER };
