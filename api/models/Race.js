/**
 * Race.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    // To add: http://localhost:1337/race/create?name=Tiger&specie=Cat
  attributes: {
      pet: {
          type: 'collection',
          via: 'race'
      }
  }
};

