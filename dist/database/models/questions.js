"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var questionModel = "\n  DROP TABLE IF EXISTS bQuestions CASCADE;\n  CREATE TABLE bQuestions (\n      questionId serial PRIMARY KEY,\n      userId INT NOT NULL,\n      title VARCHAR(255) NOT NULL,\n      message TEXT NOT NULL,\n      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n      foreign key(userId) REFERENCES aUsers(userId)\n  );\n";

var questionDb = "" + questionModel;

exports.default = questionDb;