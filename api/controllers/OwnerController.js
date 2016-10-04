/**
 * OwnerController
 *
 * @description :: Server-side logic for managing owners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
//	index: function(req, res) {
	petsByUser: function(req, res) {
//            Owner.find().populateAll().exec(function (err, owners) {
            Owner.findOne({id: req.param('id')}).populateAll().exec(function (err, owner) {
                if(err) {
                     console.log(err);
                     return;
                }
                
                Pet.find({owner:owner.id}).populateAll().exec(function (err, pets) {
                   if(err) {
                        console.log(err);
                     return;
                   } 
                   res.json(pets);
                });
                
            });
        }
};

