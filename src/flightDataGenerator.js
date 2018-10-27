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
    let seat = {
      id: row + col,
    };
    seats.push(seat);
  }
  return seats;
}

export { generateSeatsForFlight };
