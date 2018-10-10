"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var commentModel = "\n  DROP TABLE IF EXISTS dComments CASCADE;\n  CREATE TABLE dComments (\n      commentId serial PRIMARY KEY,\n      userId INT NOT NULL,\n      answerId INT NOT NULL,\n      message TEXT NOT NULL,\n      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n      foreign key(userId) REFERENCES aUsers(userId),\n      foreign key(answerId) REFERENCES cAnswers(answerId)\n  );\n";

var commentDb = "" + commentModel;

exports.default = commentDb;