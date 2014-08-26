/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var db = require('../../config/db');

// Get list of things
exports.index = function(req, res, id) {
  console.log(req.query.id);
  db.connection.query('SELECT * FROM city WHERE state_id = ?',[req.query.id], function(err, rows){
    if (err) throw err;
    res.json(rows);
  });
};