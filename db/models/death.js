'use strict';

var Sequelize = require('sequelize');

var db = require('../_db');
//eugh I super hate the _db thing I should change it

var Death = db.define('death', {
    victim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kind: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'unknown',
        values: ['unknown', 'murder', 'suicide', 'accident', 'other']
    },
    quote: {
        type: Sequelize.TEXT,
    },
    brutality: {
        type: Sequelize.INTEGER,
        defaultValue: 0
        //gotta make some kind of brutality assessment
    }
});

module.exports = Death;
