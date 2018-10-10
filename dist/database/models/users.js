"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var userModel = "\n  DROP TABLE IF EXISTS aUsers CASCADE;\n  CREATE TABLE aUsers (\n      userId serial PRIMARY KEY,\n      firstName VARCHAR(255) NOT NULL,\n      lastName VARCHAR(255) NOT NULL,\n      username VARCHAR(255) UNIQUE NOT NULL,\n      phoneNo BIGINT NOT NULL,\n      email VARCHAR(255) UNIQUE NOT NULL,\n      password VARCHAR(255) NOT NULL,\n      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n  );\n";

var userDb = "" + userModel;

exports.default = userDb;