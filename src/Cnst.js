const PASSENGER = {
  id: 0,
  firstName: 'Joanna',
  lastName: 'Doe',
  validationId: 'AEK11129999RJ',
  bookings: [
    {
      id: 0,
      flightId: 'TRF476',
      checkedin: false,
      paid: true,
      seatId: null,
      classType: 'ECONOMY',
    },
  ],
};

const FLIGHT = {
  id: 'TRF476',
  from: {
    city: 'Stockholm',
    airport: 'ARN',
    timestamp: 1541930400000,
    zone: 'CET',
  },
  to: {
    city: 'Berlin',
    airport: 'TXL',
    timestamp: 1541936400000,
    zone: 'CEST',
  },
  aircraft: {
    id: 0,
    name: 'Boeing 761',
    seats: 200,
    seatsByRow: 6,
  },
  price: 280,
  curCode: 'EUR',
  company: 'diffyJet',
};

const SEAT_CODE_BY_COL = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
};

export { PASSENGER, FLIGHT, SEAT_CODE_BY_COL };
