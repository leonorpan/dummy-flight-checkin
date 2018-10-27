import { SEAT_CODE_BY_COL } from './Cnst';

const PRICE_BY_FEATURE = {
  nearWindow: 10,
  aisle: 4,
  extraLeg: 10,
  simple: 2,
};

function calculateSeatPrice(features) {
  let calcPrice = PRICE_BY_FEATURE['simple'];
  if (features.nearWindow) {
    calcPrice += PRICE_BY_FEATURE['nearWindow'];
  } else if (features.aisle) {
    calcPrice += PRICE_BY_FEATURE['aisle'];
  }

  if (features.extraLeg) {
    calcPrice += PRICE_BY_FEATURE['extraLeg'];
  }
  return calcPrice;
}

function generateSeatsForFlight(numberOfSeats = 200, seatsInRow = 6) {
  let seats = [];

  for (let i = 0; i < numberOfSeats; i++) {
    let row = Math.floor(i / seatsInRow) + 1;
    let col = i % seatsInRow;
    let colCode = SEAT_CODE_BY_COL[col];
    let nearWindow = col === 0 || col === seatsInRow - 1;
    let aisle = seatsInRow / 2 === col + 1 || seatsInRow / 2 === col;
    let extraLeg = row % 10 === 0;
    let occupied = Math.random() < 0.1;
    let features = {
      nearWindow: nearWindow,
      aisle,
      extraLeg,
    };
    let seat = {
      id: row + colCode,
      colCode,
      row,
      reserved: false,
      occupied,
      features,
      price: calculateSeatPrice(features),
    };
    seats.push(seat);
  }
  return seats;
}

export { generateSeatsForFlight };
