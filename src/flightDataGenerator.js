function calculatePrice(window = false, aisle = false, extraLeg = false) {
  let calcPrice = 2;
  if (window) {
    calcPrice += 10;
  } else if (aisle) {
    calcPrice += 4;
  }

  if (extraLeg) {
    calcPrice += 20;
  }
  return calcPrice;
}

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
    let col = columns[i % seatsInRow];
    let window = i % seatsInRow === 0 || i % seatsInRow === seatsInRow - 1;
    let aisle = seatsInRow / 2 === i % seatsInRow + 1 || seatsInRow / 2 === i % seatsInRow;
    let extraLeg = row % 10 === 0;
    let occupied = Math.random() < 0.1;
    let seat = {
      id: row + col,
      col,
      row,
      window,
      aisle,
      extraLeg,
      occupied,
      price: calculatePrice(window, aisle, extraLeg),
    };
    seats.push(seat);
  }
  return seats;
}

export { generateSeatsForFlight };
