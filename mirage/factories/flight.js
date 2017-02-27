import { Factory, faker } from 'ember-cli-mirage';


function createTakeoffLanding() {
  const time = new Date();
  time.setHours(time.getHours() + getRandomIntInclusive(1, 12));
  time.setDate(time.getDate() + getRandomIntInclusive(1, 3));

  return {
    time: time, 
    airport: getRandomAirport() 
  };
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAirport() {
  return faker.list.random('IRL', 'IDK', 'WTF', 'WAT', 'BIO', 'BRB', 'BFF', 'BBQ', 'AFK', 'LOL', 'FTW', 'TIL')();
}

export default Factory.extend({

  number: function(i) {
    return `FN00${i}`;
  },

  airline: faker.list.random('Virgin', 'Lufthansa', 'Emirates'),

  takeoff: function() {
    return createTakeoffLanding();
  },

  landing: function() {
    return createTakeoffLanding();
  },

  stops: function() {
    const totalStops = getRandomIntInclusive(0, 3); 

    const stops = [];
    for (let i = 0; i < totalStops; i++) {
      stops[i] = getRandomAirport(); 
    }
    return stops;
  },

  price: function() {
    return getRandomIntInclusive(200, 999);
  }

});
