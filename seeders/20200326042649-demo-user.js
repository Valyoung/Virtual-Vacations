'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert('tripchoice', [
      {
        name: 'Paris',
        ruralurban: 'Urban',
        terrain: 'Neither',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 49,
        longitude: 2
      },
      {
        name: 'Taj Mahal/India',
        ruralurban: 'Urban',
        terrain: 'Neither',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 27,
        longitude: 78
      },
      {
        name: 'Vail/Breckenridge',
        ruralurban: 'Both',
        terrain: 'Mountains',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 39,
        longitude: -106
      },
      {
        name: 'Disney World',
        ruralurban: 'Urban',
        terrain: 'Beach',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 28,
        longitude: -82
      },
      {
        name: 'Maui, Hawaii',
        ruralurban: 'Both',
        terrain: 'Both',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 21,
        longitude: -156
      },
      {
        name: 'Cancun',
        ruralurban: 'Urban',
        terrain: 'Beach',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Reasonable',
        latitude: 21,
        longitude: -87
      },
      {
        name: 'Antarctica',
        ruralurban: 'Rural',
        terrain: 'Mountains',
        people: 'Fewer', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: -83,
        longitude: 135
      },
      {
        name: 'Tennessee Smoky Mountains',
        ruralurban: 'Rural',
        terrain: 'Mountains',
        people: 'Fewer', 
        effort: 'Easy',
        expensive: 'Reasonable',
        latitude: 36,
        longitude: -83
      },
      {
        name: 'Grand Canyon',
        ruralurban: 'Rural',
        terrain: 'Mountains',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Reasonable',
        latitude: 36,
        longitude: -112
      },
      {
        name: 'Iceland',
        ruralurban: 'Rural',
        terrain: 'Both',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 65,
        longitude: -19
      },
      {
        name: 'Great Wall of China',
        ruralurban: 'Rural',
        terrain: 'Mountains',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 40,
        longitude: 117
      },
      {
        name: 'Morocco',
        ruralurban: 'Both',
        terrain: 'Neither',
        people: 'Fewer', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 32,
        longitude: -7
      },
      {
        name: 'Rome',
        ruralurban: 'BoUrbanth',
        terrain: 'Neither',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 42,
        longitude: 12
      },
      {
        name: 'Scotland',
        ruralurban: 'Both',
        terrain: 'Mountains',
        people: 'Fewer', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 56,
        longitude: -4
      },
      {
        name: 'Santorini',
        ruralurban: 'Rural',
        terrain: 'Both',
        people: 'Fewer', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 36,
        longitude: 25
      },
      {
        name: 'New York City',
        ruralurban: 'Urban',
        terrain: 'Neither',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 41,
        longitude: -74
      },
      {
        name: 'Jamaica',
        ruralurban: 'Both',
        terrain: 'Both',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 18,
        longitude: -77
      },
      {
        name: 'Bahamas',
        ruralurban: 'Both',
        terrain: 'Beach',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Reasonable',
        latitude: 25,
        longitude: -77
      },
      {
        name: 'St. Augustine, FL',
        ruralurban: 'Both',
        terrain: 'Beach',
        people: 'Fewer', 
        effort: 'Easy',
        expensive: 'Reasonable',
        latitude: 30,
        longitude: -81
      },
      {
        name: 'Grenada, West Indies',
        ruralurban: 'Rural',
        terrain: 'Beach',
        people: 'Fewer', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 12,
        longitude: -62
      },
      {
        name: 'Denver',
        ruralurban: 'Urban',
        terrain: 'Mountains',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 39.7,
        longitude: -105
      },
      {
        name: 'Oahu, Hawaii',
        ruralurban: 'Urban',
        terrain: 'Both',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 21.43,
        longitude: -158
      },
      {
        name: 'Lake of the Ozarks',
        ruralurban: 'Rural',
        terrain: 'Neither',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Reasonable',
        latitude: 38,
        longitude: -92.7
      },
      {
        name: 'Mount Rushmore',
        ruralurban: 'Rural',
        terrain: 'Mountains',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Reasonable',
        latitude: 44,
        longitude: -103.44
      },
      {
        name: 'Yellowstone NP',
        ruralurban: 'Rural',
        terrain: 'Mountains',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Reasonable',
        latitude: 44.4,
        longitude: -110.72
      },
      {
        name: 'Big Sur, CA',
        ruralurban: 'Rural',
        terrain: 'Both',
        people: 'Fewer', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 36.25,
        longitude: -121.787
      },
      {
        name: 'Namibia',
        ruralurban: 'Both',
        terrain: 'Both',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: -22.96,
        longitude: -18.49
      },
      {
        name: 'Kansas City',
        ruralurban: 'Both',
        terrain: 'Neither',
        people: 'Fewer', 
        effort: 'Easy',
        expensive: 'Reasonable',
        latitude: 39,
        longitude: -94.58
      },
      {
        name: 'Chicago',
        ruralurban: 'Urban',
        terrain: 'Beach',
        people: 'Lots', 
        effort: 'Easy',
        expensive: 'Expensive',
        latitude: 41.88,
        longitude: -87.63
      },
      {
        name: 'Dubai',
        ruralurban: 'Urban',
        terrain: 'Beach',
        people: 'Lots', 
        effort: 'Hard',
        expensive: 'Expensive',
        latitude: 25.2,
        longitude: 55.27
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('tripchoice', null, {});
    
  }
};
