/**
 * Pet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    // To add : http://localhost:1337/pet/create?name=Catrina&owner=12&race=4
  attributes: {
      name: {
          type: 'String'
      },
      owner: {
          model: 'Owner',
          required: true
      },
      race: {
          model: 'Race'
      }
  }
};

