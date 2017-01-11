/*

this would just be an array of methods of death, eg. bladed weapon, poison, animal, absurd, etc
but in fact this is likely not nec. because I can create it via sequelize w/r/t the victim model

so this file is actually most likely a reminder unless I want to get fancy with things later

peace out girl scout 
*/
'use strict';

var Sequelize = require('sequelize');

var db = require('../_db');
//eugh I super hate the _db thing I should change it

var Method = db.define('method', {
    weapon: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Death;